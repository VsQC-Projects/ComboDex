"""Sanity-check ComboDex S1 SQL files. Does not connect to Supabase."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
NEED = [
    "000_do_not_apply.sql",
    "001_keep_existing.sql",
    "002_new_tables.sql",
    "003_rls.sql",
]
TABLES = ["profiles", "cases", "case_events", "audit_log", "reviews", "collections", "follows"]
errs: list[str] = []


def strip_comments_and_blocks(src: str) -> str:
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    lines = []
    for line in src.splitlines():
        if line.strip().startswith("--"):
            continue
        lines.append(line)
    return "\n".join(lines)


def main() -> int:
    for name in NEED:
        p = ROOT / name
        if not p.exists():
            errs.append(f"missing {name}")
            continue
        text = p.read_text(encoding="utf-8")
        if "service_role" in text and "never" not in text.lower():
            errs.append(f"{name} mentions service_role without a never-warning")
        live = strip_comments_and_blocks(text)
        if re.search(r"(?im)^\s*(create|alter|drop|grant|revoke|insert|delete|update|comment)\b", live):
            errs.append(f"{name} has live DDL — keep it commented until authorized")
        if name == "002_new_tables.sql":
            for t in TABLES:
                if t not in text:
                    errs.append(f"002 missing table {t}")
        if name == "003_rls.sql":
            if "anon DELETE" not in text and "for delete to anon" in text.lower():
                errs.append("003 must not grant anon DELETE")
            if "combos_anon_select" not in text:
                errs.append("003 missing combos_anon_select")
            if "is_atelier" not in text:
                errs.append("003 missing is_atelier()")
    if errs:
        print("FAIL supabase lint")
        for e in errs:
            print(" -", e)
        return 1
    print("OK supabase lint (files only, not applied)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
