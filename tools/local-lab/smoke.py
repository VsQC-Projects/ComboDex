#!/usr/bin/env python3
"""Offline smoke checks for the unchanged ComboDex site snapshot."""
from pathlib import Path
import re, sys
root=Path(__file__).resolve().parents[2]
errors=[]
for page in ("index.html","console.html"):
    html=(root/page).read_text(encoding="utf-8")
    for src in re.findall(r'<script[^>]+src="([^"]+)"',html):
        if src.startswith(("http:","https:","//","data:")): continue
        target=root/src.split("?")[0].lstrip("/")
        if not target.is_file(): errors.append(f"{page}: script absent: {src}")
    for href in re.findall(r'<link[^>]+href="([^"]+)"',html):
        if href.startswith(("http:","https:","//","data:")): continue
        target=root/href.split("?")[0].lstrip("/")
        if not target.is_file(): errors.append(f"{page}: ressource absente: {href}")
for name in ("cdx-app.js","cdx-admin.css","cdx-refs.js","cdx-objets.js"):
    if not (root/name).is_file(): errors.append(f"Fichier requis absent: {name}")
print("ComboDex: contrôle statique des dépendances HTML")
if errors:
    for e in errors: print("ERREUR:",e)
    sys.exit(1)
print("OK : dépendances HTML locales trouvées.")
