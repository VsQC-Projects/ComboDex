(() => {
"use strict";
const UI_KEY = "combo-dex-ui-v1";
const THEMES = ["official", "wood", "dojo", "borne", "capsule"];
const MODULES = ["people", "frames", "compare", "replay", "create", "import", "knowledge"];
const TXT = {
  fr: {wood: "Bois", official: "Officielle", dojo: "Dojo", borne: "Borne", capsule: "Capsule",
    title: "Mini-jeu : trouve l'objet !", find: "Trouve cet objet caché dans la page :", from: "Jeu",
    quit: "Abandonner", again: "Rejouer", found: "Trouvé !", miss: "Ce n'est pas celui-là…",
    time: "Temps", scroll: "Il peut être n'importe où dans la page, fais défiler.",
    all: "Elles sont dispersées dans la page : trouve-les toutes.", got: "Trouvées",
    gave: "Tu as abandonné… il était là !", gaveN: "Tu as abandonné… elles étaient là !", close: "Fermer"},
  en: {wood: "Wood", official: "Official", dojo: "Dojo", borne: "Cabinet", capsule: "Capsule",
    title: "Mini-game: find the object!", find: "Find this object hidden on the page:", from: "Game",
    quit: "Give up", again: "Play again", found: "Found it!", miss: "Not that one…",
    time: "Time", scroll: "It can be anywhere on the page, scroll around.",
    all: "They are scattered across the page: find them all.", got: "Found",
    gave: "You gave up… it was right here!", gaveN: "You gave up… they were right here!", close: "Close"},
  es: {wood: "Madera", official: "Oficial", dojo: "Dojo", borne: "Recreativa", capsule: "Cápsula",
    title: "Minijuego: ¡encuentra el objeto!", find: "Encuentra este objeto escondido en la página:", from: "Juego",
    quit: "Rendirse", again: "Jugar otra vez", found: "¡Encontrado!", miss: "Ese no es…",
    time: "Tiempo", scroll: "Puede estar en cualquier parte de la página, desplázate.",
    all: "Están repartidas por la página: encuéntralas todas.", got: "Encontradas",
    gave: "Te rendiste… ¡estaba aquí!", gaveN: "Te rendiste… ¡estaban aquí!", close: "Cerrar"},
};
const lang = () => (TXT[window.cdxLang] ? window.cdxLang : "fr");
const t = k => TXT[lang()][k];
const LI = {fr: 0, en: 1, es: 2};

/* ---------- themes ---------- */
function readUI() { try { return JSON.parse(localStorage.getItem(UI_KEY)) || {}; } catch { return {}; } }
function isPreview() {
  try { return !window.CDX_ADMIN && window.self !== window.top; } catch { return true; }
}
function setTheme(name) {
  if (!THEMES.includes(name)) name = "official";
  document.documentElement.dataset.theme = name;
  document.querySelectorAll("#daSwitch button,[data-admin-theme]").forEach(b => {
    const id = b.dataset.theme || b.dataset.adminTheme;
    if (id) b.setAttribute("aria-pressed", id === name ? "true" : "false");
  });
  if (isPreview()) return;
  const ui = readUI(); ui.theme = name;
  try { if (typeof H === "object" && H) H.theme = name; } catch {}
  try { localStorage.setItem(UI_KEY, JSON.stringify(ui)); } catch {}
  schedule();
}
function buildSwitch() {
  const box = document.createElement("div");
  box.id = "daSwitch"; box.className = "da-switch"; box.setAttribute("role", "group");
  box.innerHTML = THEMES.map(n => `<button type="button" data-theme="${n}"></button>`).join("");
  box.addEventListener("click", e => { const b = e.target.closest("button[data-theme]"); if (b) setTheme(b.dataset.theme); });
  document.body.appendChild(box);
  labelSwitch();
  const lift = () => {
    const f = document.querySelector(".studio-footer");
    const over = f ? innerHeight - f.getBoundingClientRect().top : 0;
    box.style.bottom = (over > 0 ? Math.round(over) + 8 : 12) + "px";
  };
  addEventListener("scroll", lift, {passive: true});
  addEventListener("resize", lift);
  new ResizeObserver(lift).observe(document.body);
  lift();
}
function labelSwitch() {
  const box = document.getElementById("daSwitch"); if (!box) return;
  box.setAttribute("aria-label", t("da"));
  box.querySelectorAll("button").forEach(b => {
    b.textContent = t(b.dataset.theme);
    b.setAttribute("aria-pressed", document.documentElement.dataset.theme === b.dataset.theme ? "true" : "false");
  });
}

/* ---------- refs data + Atelier VSQC config (combo-dex-ui-v1.refs) ---------- */
const DATA = window.CDX_OBJETS || {};
const gameName = g => { try { if (typeof b === "object" && b[g] && b[g].name) return b[g].name; } catch {} return g.toUpperCase(); };
/* Quantity/spacing live in combo-dex-ui-v1.refs. 0 on a zone = no objects there. Gap is extra pixels between objects (0–100). */
const REF_KEYS = ["perGame", "peopleDesktop", "peopleMobile", "footerPc", "footerMobile", "logoPc", "gap", "tries"];
const REF_DEFAULTS = {perGame: 4, peopleDesktop: 4, peopleMobile: 4, footerPc: 0, footerMobile: 0, logoPc: 0, gap: 12, tries: 800, games: {}};
const REF_MAX = {perGame: 48, peopleDesktop: 48, peopleMobile: 48, footerPc: 48, footerMobile: 48, logoPc: 48, gap: 100, tries: 2000};
const PLAN = {};
MODULES.forEach(m => (PLAN[m] = []));
/* row[7] = number of pieces: one ref made of several images scattered over the same page */
const pieces = it => it.row[7] || 0;
const label = it => it.row[1 + LI[lang()]] || it.row[1];
const hint = it => it.row[4 + LI[lang()]] || label(it);

const hash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const rng = seed => () => { seed = seed + 0x6D2B79F5 | 0; let x = Math.imul(seed ^ seed >>> 15, 1 | seed); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; };
const clampN = (n, lo, hi, fb) => { n = Number(n); return Number.isFinite(n) ? Math.max(lo, Math.min(hi, Math.round(n))) : fb; };
function clampRow(src, fb) {
  const row = {};
  for (const k of REF_KEYS) {
    if (src && src[k] != null) row[k] = clampN(src[k], k === "tries" ? 80 : 0, REF_MAX[k], fb[k]);
  }
  return row;
}
function readRefs() {
  const raw = (readUI().refs && typeof readUI().refs === "object") ? readUI().refs : {};
  const out = {...REF_DEFAULTS, games: {}};
  Object.assign(out, clampRow(raw, REF_DEFAULTS));
  if (raw.games && typeof raw.games === "object") {
    for (const [g, v] of Object.entries(raw.games)) {
      if (!v || typeof v !== "object") continue;
      const row = clampRow(v, out);
      if (Object.keys(row).length) out.games[g] = row;
    }
  }
  return out;
}
function gameQuota(cfg, g, tab, small) {
  const ov = cfg.games[g] || {};
  if (tab === "people") {
    const k = small ? "peopleMobile" : "peopleDesktop";
    return ov[k] != null ? ov[k] : cfg[k];
  }
  return ov.perGame != null ? ov.perGame : cfg.perGame;
}
function gameGap(cfg, g) {
  const ov = cfg.games[g] || {};
  return ov.gap != null ? ov.gap : cfg.gap;
}
function viewSettings(cfg) {
  let g = "";
  try { if (typeof o === "object" && o && o.game) g = o.game; } catch {}
  const ov = (g && cfg.games[g]) || {};
  const out = {};
  for (const k of REF_KEYS) out[k] = ov[k] != null ? ov[k] : cfg[k];
  return out;
}
function allRows() {
  const out = {};
  for (const [g, rows] of Object.entries(DATA)) out[g] = rows.slice();
  let extra = {};
  try { extra = (typeof d === "object" && d.objets) || {}; } catch {}
  for (const [g, rows] of Object.entries(extra)) {
    if (!Array.isArray(rows)) continue;
    out[g] = out[g] || [];
    for (const row of rows) {
      if (!row || !row[0]) continue;
      const i = out[g].findIndex(r => r[0] === row[0]);
      if (i >= 0) out[g][i] = row; else out[g].push(row);
    }
  }
  return out;
}
function rebuildPlan() {
  const cfg = readRefs();
  const small = innerWidth < 700;
  const catalog = allRows();
  MODULES.forEach(m => (PLAN[m] = []));
  for (const m of MODULES)
    for (const [g, rows] of Object.entries(catalog)) {
      const cap = gameQuota(cfg, g, m, small);
      if (!cap || !rows || !rows.length) continue;
      const r = rng(hash(m + "/" + g));
      rows.map(row => [r(), row]).sort((a, c) => a[0] - c[0]).slice(0, cap)
        .forEach(([, row]) => PLAN[m].push({g, id: row[0], row}));
    }
}
function writeRefs(next) {
  const ui = readUI();
  ui.refs = next;
  try { if (typeof H === "object" && H) H.refs = next; } catch {}
  try { localStorage.setItem(UI_KEY, JSON.stringify(ui)); } catch {}
  rebuildPlan();
  if (layer) place();
  else { lastWanted = (PLAN.people || []).length; lastMissed = 0; paintLive(); }
}
rebuildPlan();
window.CDX_REF_API = {
  defaults: () => ({...REF_DEFAULTS, games: {}}),
  max: REF_MAX,
  get: readRefs,
  games() {
    const ids = new Set([...Object.keys(DATA)]);
    try { if (typeof b === "object" && b) Object.keys(b).forEach(id => ids.add(id)); } catch {}
    return [...ids].sort().map(id => [id, gameName(id)]);
  },
  set(patch) {
    const cur = readRefs();
    const next = {...cur, games: {...cur.games}};
    if (patch && typeof patch === "object") {
      Object.assign(next, clampRow(patch, next));
      if (patch.games && typeof patch.games === "object") {
        for (const [g, v] of Object.entries(patch.games)) {
          if (v === null) { delete next.games[g]; continue; }
          next.games[g] = {...(next.games[g] || {}), ...clampRow(v, next)};
        }
      }
    }
    writeRefs(next);
    return next;
  },
  setGame(g, row) {
    const cur = readRefs();
    const next = {...cur, games: {...cur.games}};
    if (!row || !Object.keys(row).length) delete next.games[g];
    else next.games[g] = clampRow(row, cur);
    writeRefs(next);
    return next;
  },
  reset() { writeRefs(window.CDX_REF_API.defaults()); return readRefs(); },
  catalog(g) { const rows = allRows()[g]; return (rows && rows.length) || 0; },
  reload() { rebuildPlan(); if (layer) place(); else schedule(80); },
  stats() {
    const by = {};
    placed.forEach(p => { by[p.it.g] = (by[p.it.g] || 0) + 1; });
    const cfg = readRefs();
    const catalog = allRows();
    let catN = 0;
    for (const rows of Object.values(catalog)) catN += (rows && rows.length) || 0;
    const tab = layer ? activeTab() : "people";
    return {
      tab,
      shown: placed.length,
      planned: (PLAN[tab] || []).length,
      missed: lastMissed,
      wanted: lastWanted,
      catalog: catN,
      gap: cfg.gap,
      perGame: cfg.perGame,
      peopleDesktop: cfg.peopleDesktop,
      peopleMobile: cfg.peopleMobile,
      footerPc: cfg.footerPc,
      footerMobile: cfg.footerMobile,
      logoPc: cfg.logoPc,
      layer: !!layer,
      by
    };
  },
  themes: THEMES,
  setTheme
};
addEventListener("cdx-refs-cfg", () => { rebuildPlan(); schedule(80); });

let layer, placed = [], lastMissed = 0, lastWanted = 0;
function activeTab() { const s = [...document.querySelectorAll("main > .page")].find(p => !p.classList.contains("hidden")); return s ? s.id : "home"; }

const SOLID = new Set(["IMG", "INPUT", "SELECT", "TEXTAREA", "BUTTON", "CANVAS", "VIDEO", "IFRAME", "SVG", "svg", "TABLE", "LABEL", "SUMMARY", "A"]);
function obstacles(root, out) {
  const walk = el => {
    for (const c of el.children) {
      if (c === layer || c.id === "daSwitch") continue;
      const r = c.getBoundingClientRect();
      if (!r.width || !r.height) { if (getComputedStyle(c).display === "contents") walk(c); continue; }
      const cs = getComputedStyle(c);
      if (cs.visibility === "hidden" || cs.position === "fixed") continue;
      const painted = SOLID.has(c.tagName) || cs.backgroundColor !== "rgba(0, 0, 0, 0)" || cs.backgroundImage !== "none" ||
        parseFloat(cs.borderTopWidth) > 0 || parseFloat(cs.borderLeftWidth) > 0 || cs.boxShadow !== "none" ||
        [...c.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
      if (painted) out.push([r.left + scrollX, r.top + scrollY, r.right + scrollX, r.bottom + scrollY]);
      else walk(c);
    }
  };
  walk(root);
}

function place() {
  lastMissed = 0;
  lastWanted = 0;
  if (!layer) return;
  rebuildPlan();
  layer.textContent = "";
  placed = [];
  const tab = activeTab();
  layer.dataset.tab = tab;
  const items = PLAN[tab] || [];
  lastWanted = items.reduce((n, it) => n + Math.max(1, pieces(it) || 1), 0);
  if (tab === "home" || !items.length) {
    paintLive();
    return;
  }
  const cfg = readRefs();
  const view = viewSettings(cfg);
  const W = document.documentElement.scrollWidth, Hh = document.documentElement.scrollHeight;
  const boxes = [];
  [".nav", ".lang-switch", ".brand", "#peopleLogo", ".studio-footer .footer-signature", ".studio-footer .footer-left"].forEach(s => {
    const e = document.querySelector(s);
    if (e) obstacles(e, boxes);
  });
  boxes.push(...[".nav"].map(s => document.querySelector(s)).filter(Boolean).map(e => {
    const r = e.getBoundingClientRect(); return [r.left + scrollX, r.top + scrollY, r.right + scrollX, r.bottom + scrollY];
  }));
  obstacles(document.getElementById(tab), boxes);
  const CELL = 4, cw = Math.ceil(W / CELL), ch = Math.ceil(Hh / CELL), grid = new Uint8Array(cw * ch);
  const mark = (x0, y0, x1, y1) => {
    for (let y = Math.max(0, y0 / CELL | 0); y < Math.min(ch, Math.ceil(y1 / CELL)); y++)
      grid.fill(1, y * cw + Math.max(0, x0 / CELL | 0), y * cw + Math.min(cw, Math.ceil(x1 / CELL)));
  };
  const unmark = (x0, y0, x1, y1) => {
    for (let y = Math.max(0, y0 / CELL | 0); y < Math.min(ch, Math.ceil(y1 / CELL)); y++)
      grid.fill(0, y * cw + Math.max(0, x0 / CELL | 0), y * cw + Math.min(cw, Math.ceil(x1 / CELL)));
  };
  const free = (x0, y0, x1, y1) => {
    if (x0 < 2 || y0 < 2 || x1 > W - 2 || y1 > Hh - 2) return false;
    const yA = y0 / CELL | 0, yB = Math.ceil(y1 / CELL), xA = x0 / CELL | 0, xB = Math.ceil(x1 / CELL);
    for (let y = yA; y < yB; y++)
      for (let x = xA; x < xB; x++) if (grid[y * cw + x]) return false;
    return true;
  };
  const small = innerWidth < 700;
  const tries = view.tries;
  const UI_PAD = small ? 2 : 6;
  boxes.forEach(([a, b2, c, d]) => mark(a - UI_PAD, b2 - UI_PAD, c + UI_PAD, d + UI_PAD));
  const rectOf = sel => {
    const e = document.querySelector(sel);
    if (!e) return null;
    const r = e.getBoundingClientRect();
    if (!r.width || !r.height) return null;
    return {t: r.top + scrollY, b: r.bottom + scrollY, l: r.left + scrollX, r: r.right + scrollX};
  };
  const inflate = (box, t, r, btm, l) => box && ({t: box.t - t, b: box.b + btm, l: box.l - l, r: box.r + r});
  const zones = {
    footer: inflate(rectOf(".studio-footer"), small ? 110 : 96, 16, 8, 16),
    logo: inflate(rectOf("#peopleLogo") || rectOf(".brand") || rectOf(".head"), 52, small ? 36 : 110, 28, small ? 36 : 110),
    peopleLogo: inflate(rectOf("#peopleLogo"), 48, 96, 28, 96)
  };
  const capFooter = small ? view.footerMobile : view.footerPc;
  const capLogo = view.logoPc;
  if (capLogo > 0) {
    const hole = zones.peopleLogo || zones.logo;
    if (hole) unmark(hole.l, hole.t, hole.r, hole.b);
    ["#peopleLogo", ".brand", ".lang-switch"].forEach(s => {
      const e = document.querySelector(s);
      if (!e) return;
      const r = e.getBoundingClientRect();
      mark(r.left + scrollX - UI_PAD, r.top + scrollY - UI_PAD, r.right + scrollX + UI_PAD, r.bottom + scrollY + UI_PAD);
    });
  }
  const navEl = document.querySelector(".nav");
  const navB = navEl ? navEl.getBoundingClientRect().bottom + scrollY : 52;
  const footEl = document.querySelector(".studio-footer");
  const footT = footEl ? footEl.getBoundingClientRect().top + scrollY : Hh;
  const gw = small ? Math.max(44, Math.min(64, Math.round(W * 0.18))) : 0;
  if (small && gw) {
    unmark(0, navB + 2, gw, Math.max(navB + 40, footT - 4));
    unmark(W - gw, navB + 2, W, Math.max(navB + 40, footT - 4));
  }
  const inRect = (box, x, y, size) => box && x + size / 2 >= box.l && x + size / 2 <= box.r && y + size / 2 >= box.t && y + size / 2 <= box.b;
  const inGutter = (x, y, size) => small && gw && (x + size / 2 < gw || x + size / 2 > W - gw);
  const zoneOf = (x, y, size) => {
    if (inGutter(x, y, size)) return "main";
    if (inRect(zones.footer, x, y, size)) return "footer";
    if (inRect(zones.logo, x, y, size) || inRect(zones.peopleLogo, x, y, size)) return "logo";
    return "main";
  };
  let usedFooter = 0, usedLogo = 0;
  const zoneOk = (x, y, size, want) => {
    const z = zoneOf(x, y, size);
    if (want && z !== want) return false;
    if (!want) {
      if (z === "footer" && (capFooter <= 0 || usedFooter >= capFooter)) return false;
      if (z === "logo" && (capLogo <= 0 || usedLogo >= capLogo)) return false;
    }
    if (want === "footer" && (capFooter <= 0 || usedFooter >= capFooter)) return false;
    if (want === "logo" && (capLogo <= 0 || usedLogo >= capLogo)) return false;
    return true;
  };
  const r = rng(hash(tab + W + String(view.gap)));
  const order = items.map(it => [r(), it]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
  const gapPx = g => Math.max(0, Math.round(gameGap(cfg, g)));
  const tooClose = (x, y, size, gap) => {
    const cx = x + size / 2, cy = y + size / 2;
    for (const p of placed) {
      const px = parseFloat(p.img.style.left) || 0;
      const py = parseFloat(p.img.style.top) || 0;
      const ps = parseFloat(p.img.style.width) || size;
      const dx = cx - (px + ps / 2), dy = cy - (py + ps / 2);
      const min = size / 2 + ps / 2 + gap;
      if (dx * dx + dy * dy < min * min) return true;
    }
    return false;
  };
  const okSpot = (x, y, size, gap, want) =>
    free(x, y, x + size, y + size) && !tooClose(x, y, size, gap) && zoneOk(x, y, size, want);
  const put = (it, src, x, y, size) => {
    const z = zoneOf(x, y, size);
    if (z === "footer") usedFooter++;
    if (z === "logo") usedLogo++;
    const gap = gapPx(it.g);
    mark(x - gap, y - gap, x + size + gap, y + size + gap);
    const img = new Image();
    img.src = src;
    img.alt = ""; img.className = "cdx-ref"; img.loading = "lazy"; img.decoding = "async"; img.draggable = false;
    img.title = `${label(it)} · ${gameName(it.g)}`;
    img.style.cssText = `left:${x | 0}px;top:${y | 0}px;width:${size}px;height:${size}px;--rot:${Math.round(r() * 40 - 20)}deg`;
    img.dataset.key = it.g + "/" + it.id;
    img.onerror = () => img.remove();
    layer.appendChild(img);
    placed.push({it, img});
  };
  const clipRect = (box, size) => {
    if (!box) return null;
    const l = Math.max(2, box.l), t = Math.max(2, box.t);
    const rr = Math.min(W - 2, box.r), bb = Math.min(Hh - 2, box.b);
    if (rr - l < size || bb - t < size) return null;
    return {l, t, r: rr, b: bb};
  };
  const gutters = small && gw ? [
    {l: 1, t: navB + 2, r: gw, b: Math.max(navB + 48, footT - 2)},
    {l: W - gw, t: navB + 2, r: W - 1, b: Math.max(navB + 48, footT - 2)}
  ] : [];
  const scanBox = (size, gap, want, box) => {
    const area = box ? clipRect(box, size) : (want === "main" ? {l: 2, t: 2, r: W - 2, b: Hh - 2} : null);
    if (!area) return null;
    const zoneWant = want === "main" ? "" : want;
    const step = Math.max(CELL, Math.min(small ? 8 : 14, Math.max(4, Math.round(Math.max(size, gap) / (small ? 4 : 3)))));
    for (let y = area.t; y <= area.b - size; y += step)
      for (let x = area.l; x <= area.r - size; x += step) {
        if (!okSpot(x, y, size, gap, zoneWant)) continue;
        return [x, y];
      }
    return null;
  };
  const pickSpot = (it, size, want) => {
    const gap = gapPx(it.g);
    const box = want === "footer" ? zones.footer : want === "logo" ? (zones.peopleLogo || zones.logo) : null;
    const zoneWant = want === "main" ? "" : want;
    if (small && (!want || want === "main") && gutters.length) {
      for (let k = 0; k < tries; k++) {
        const gbox = gutters[k % gutters.length];
        const spanX = Math.max(1, gbox.r - gbox.l - size);
        const spanY = Math.max(1, gbox.b - gbox.t - size);
        const x = gbox.l + r() * spanX, y = gbox.t + r() * spanY;
        if (!okSpot(x, y, size, gap, "")) continue;
        return [x, y];
      }
      for (const gbox of gutters) {
        const hit = scanBox(size, gap, "main", gbox);
        if (hit) return hit;
      }
    }
    const area = want === "main" ? {l: 2, t: 2, r: W - 2, b: Hh - 2} : clipRect(box, size);
    if (want !== "main" && !area) return null;
    const bounds = area || {l: 2, t: 2, r: W - 2, b: Hh - 2};
    const spanX = Math.max(1, bounds.r - bounds.l - size);
    const spanY = Math.max(1, bounds.b - bounds.t - size);
    for (let k = 0; k < tries; k++) {
      const x = bounds.l + r() * spanX, y = bounds.t + r() * spanY;
      if (!okSpot(x, y, size, gap, zoneWant)) continue;
      return [x, y];
    }
    return scanBox(size, gap, want, box);
  };
  const srcOf = (it, p) => (it.row && it.row[8]) || (p ? `objets/${it.g}/${it.id}-${p}.webp` : `objets/${it.g}/${it.id}.webp`);
  const sizeOf = it => pieces(it) ? (small ? 22 : 34) : Math.round((small ? 20 : 40) + r() * (small ? 8 : 24));
  const tryPlace = (it, want) => {
    const n = pieces(it);
    if (n) {
      let got = 0;
      for (let p = 1; p <= n; p++) {
        const size = small ? 22 : 34;
        const spot = pickSpot(it, size, want);
        if (!spot) break;
        put(it, srcOf(it, p), spot[0], spot[1], size);
        got++;
      }
      return got > 0;
    }
    const size = sizeOf(it);
    const spot = pickSpot(it, size, want);
    if (!spot) return false;
    put(it, srcOf(it), spot[0], spot[1], size);
    return true;
  };
  const leftover = [];
  let fi = 0, li = 0;
  for (const it of order) {
    if (fi < capFooter && tryPlace(it, "footer")) { fi++; continue; }
    leftover.push(it);
  }
  const rest = [];
  for (const it of leftover) {
    if (li < capLogo && tryPlace(it, "logo")) { li++; continue; }
    rest.push(it);
  }
  for (const it of rest) {
    if (!tryPlace(it, "main")) lastMissed++;
  }
  lastWanted = items.reduce((n, it) => n + Math.max(1, pieces(it) || 1), 0);
  lastMissed = Math.max(lastMissed, lastWanted - placed.length);
  if (game && game.tab === tab) relink();
  paintLive();
}
function paintLive() {
  try {
    const el = document.getElementById("atelierRefLive");
    if (!el || !window.cdxT) return;
    const st = window.CDX_REF_API.stats();
    const names = {people: "Personnages", frames: "Frames", compare: "Comparer", replay: "Replay", create: "Créer", import: "Importer", knowledge: "Knowledge", home: "Accueil"};
    let msg = cdxT("atelier.refs.live")
      .replace("{0}", String(st.shown))
      .replace("{1}", String(st.planned))
      .replace("{2}", names[st.tab] || st.tab)
      .replace("{3}", String(st.catalog || 0));
    if (st.missed) msg += " " + cdxT("atelier.refs.miss").replace("{0}", String(st.missed));
    if (!st.layer) msg += " " + cdxT("atelier.refs.console");
    el.textContent = msg;
  } catch {}
}

let timer = 0;
function schedule(ms = 250) { clearTimeout(timer); timer = setTimeout(place, ms); }

/* ---------- mini-game ---------- */
let game = null, audio = null;
function ctx() { try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); if (audio.state === "suspended") audio.resume(); } catch {} return audio; }
function tone(ac, f, at, dur, type = "square", vol = 0.08) {
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.setValueAtTime(f, at);
  g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(vol, at + 0.012);
  g.gain.setValueAtTime(vol, at + dur * 0.7); g.gain.exponentialRampToValueAtTime(0.0008, at + dur);
  o.connect(g).connect(ac.destination); o.start(at); o.stop(at + dur + 0.02);
}
function fanfare() {
  const ac = ctx(); if (!ac) return;
  const n = ac.currentTime + 0.05, s = 0.105;
  [392, 415.3, 440, 466.2, 493.9, 523.3, 554.4, 587.3].forEach((f, i) => tone(ac, f, n + i * s, s * 1.1, "triangle", 0.07));
  const end = n + 8 * s;
  [[523.3, 659.3, 784], [587.3, 740, 880]].forEach((ch, i) => ch.forEach(f => tone(ac, f, end + i * 0.3, i ? 1.1 : 0.28, "square", 0.035)));
  tone(ac, 1174.7, end + 0.3, 1.1, "triangle", 0.05);
}
function jingle(ok) {
  const ac = ctx(); if (!ac) return;
  const n = ac.currentTime + 0.02;
  (ok ? [784, 988, 1175, 1568] : [330, 262]).forEach((f, i) => tone(ac, f, n + i * 0.09, ok ? 0.16 : 0.2, ok ? "square" : "sawtooth", 0.05));
}

function panel() {
  let p = document.getElementById("cdxHunt");
  if (!p) {
    p = document.createElement("div");
    p.id = "cdxHunt"; p.className = "cdx-hunt"; p.setAttribute("role", "dialog"); p.setAttribute("aria-live", "polite");
    document.body.appendChild(p);
  }
  return p;
}
function renderPanel(state) {
  const p = panel(); if (!game) { p.remove(); return; }
  const it = game.target.it, secs = Math.floor(((game.end || Date.now()) - game.start) / 1000);
  const done = state === "found" || state === "gave", need = game.need, src = `objets/${it.g}/${it.id}${pieces(it) ? "-1" : ""}.webp`;
  const prog = need > 1 ? `<div class="hunt-prog"><b>${t("got")} : ${game.got.size}/${need}</b> · ${t("all")}</div>` : "";
  const head = state === "gave" ? t(need > 1 ? "gaveN" : "gave") : t("found");
  p.innerHTML = `<div class="hunt-top"><b>${t("title")}</b><span class="hunt-time">${t("time")} ${secs}s</span></div>
    ${done ? `<div class="hunt-found"><img src="${src}" alt=""><div><b>${head}</b><div>${label(it)}</div><div class="muted small">${gameName(it.g)}</div></div></div>`
      : `<div class="small muted">${t("find")}</div><div class="hunt-hint">« ${hint(it)} »</div>${prog}<div class="small muted">${t("from")} : ${gameName(it.g)} · ${t("scroll")}</div>`}
    ${state === "miss" ? `<div class="hunt-miss">${t("miss")}</div>` : ""}
    <div class="hunt-btns"><button type="button" class="tiny" data-h="${done ? "close" : "quit"}">${done ? t("close") : t("quit")}</button><button type="button" class="tiny primary" data-h="again">${t("again")}</button></div>`;
  p.onclick = e => {
    const b = e.target.closest("[data-h]"); if (!b) return;
    if (b.dataset.h === "quit") giveUp(); else if (b.dataset.h === "close") stop(); else start();
  };
}
function giveUp() {
  if (!game || game.end) return;
  game.end = Date.now(); game.gave = true; clearInterval(game.tick);
  const imgs = placed.filter(p => p.img.dataset.key === game.key).map(p => p.img);
  imgs.forEach(i => i.classList.add("hunt-reveal"));
  if (imgs[0]) imgs[0].scrollIntoView({behavior: "smooth", block: "center"});
  jingle(false); renderPanel("gave");
}
function relink() {
  if (!game) return;
  const hits = placed.filter(p => p.img.dataset.key === game.key);
  if (hits.length) game.target = hits[0];
  hits.forEach(p => {
    if (game.gave) p.img.classList.add("hunt-reveal");
    else if (game.got.has(p.img.src)) p.img.classList.add(game.end ? "hunt-win" : "hunt-got");
  });
}
function start() {
  let tab = activeTab();
  if (tab === "home" || !placed.length) {
    tab = MODULES[Math.floor(Math.random() * MODULES.length)];
    const btn = document.querySelector(`.nav .tab[data-tab="${tab}"]`);
    if (btn) btn.click();
    clearTimeout(timer); place();
  }
  if (!placed.length) return;
  if (game) clearInterval(game.tick);
  document.querySelectorAll(".cdx-ref.hunt-win,.cdx-ref.hunt-got,.cdx-ref.hunt-reveal").forEach(i => i.classList.remove("hunt-win", "hunt-got", "hunt-reveal"));
  const keys = [...new Set(placed.map(p => p.img.dataset.key))];
  const key = keys[Math.floor(Math.random() * keys.length)];
  const target = placed.find(p => p.img.dataset.key === key);
  game = {tab, target, key, need: placed.filter(p => p.img.dataset.key === key).length, got: new Set(), start: Date.now(), end: 0};
  document.documentElement.classList.add("cdx-hunting");
  renderPanel();
  game.tick = setInterval(() => { if (game && !game.end) { const el = document.querySelector("#cdxHunt .hunt-time"); if (el) el.textContent = `${t("time")} ${Math.floor((Date.now() - game.start) / 1000)}s`; } }, 1000);
}
function stop() {
  if (game) clearInterval(game.tick);
  game = null;
  document.documentElement.classList.remove("cdx-hunting");
  document.querySelectorAll(".cdx-ref.hunt-win,.cdx-ref.hunt-got,.cdx-ref.hunt-reveal").forEach(i => i.classList.remove("hunt-win", "hunt-got", "hunt-reveal"));
  renderPanel();
}
function onRefClick(e) {
  const img = e.target.closest(".cdx-ref");
  if (!img || !game || game.end) return;
  if (img.dataset.key === game.key) {
    if (game.got.has(img.src)) return;
    game.got.add(img.src);
    if (game.got.size < game.need) {
      img.classList.add("hunt-got");
      const ac = ctx(); if (ac) tone(ac, 988, ac.currentTime + 0.02, 0.14, "square", 0.05);
      renderPanel(); return;
    }
    game.end = Date.now(); clearInterval(game.tick);
    placed.forEach(p => { if (game.got.has(p.img.src)) { p.img.classList.remove("hunt-got"); p.img.classList.add("hunt-win"); } });
    jingle(true); renderPanel("found");
  } else {
    img.classList.remove("hunt-shake"); void img.offsetWidth; img.classList.add("hunt-shake");
    jingle(false); renderPanel("miss");
  }
}

/* brand long-press: 5 s opens the mini-game; short taps keep the original behaviour */
function bindBrand() {
  const hb = document.getElementById("homeBrand"); if (!hb) return;
  let hold = 0, fired = false;
  const cancel = () => { clearTimeout(hold); hb.classList.remove("brand-charging"); };
  hb.addEventListener("pointerdown", e => {
    if (e.button > 0) return;
    fired = false; ctx();
    hb.classList.add("brand-charging");
    hold = setTimeout(() => { fired = true; hb.classList.remove("brand-charging"); fanfare(); start(); }, 5000);
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach(ev => hb.addEventListener(ev, cancel));
  hb.addEventListener("click", e => { if (fired) { fired = false; e.stopImmediatePropagation(); e.preventDefault(); } }, true);
  hb.addEventListener("contextmenu", e => e.preventDefault());
}

function init() {
  setTheme(readUI().theme || document.documentElement.dataset.theme || "official");
  buildSwitch();
  if (window.CDX_ADMIN) return;
  layer = document.createElement("div");
  layer.id = "cdxRefs"; layer.className = "cdx-refs"; layer.setAttribute("aria-hidden", "true");
  layer.addEventListener("click", onRefClick);
  document.body.appendChild(layer);
  bindBrand();
  const main = document.getElementById("main");
  if (main) new ResizeObserver(() => schedule(300)).observe(main);
  if (main) new MutationObserver(() => {
    if (layer.dataset.tab !== activeTab()) { layer.textContent = ""; placed = []; layer.dataset.tab = activeTab(); }
    schedule(400);
  }).observe(main, {subtree: true, childList: true, attributes: true, attributeFilter: ["class"]});
  addEventListener("resize", () => schedule(300));
  addEventListener("hashchange", () => schedule(120));
  let lastRefsJson = "";
  try { lastRefsJson = JSON.stringify(readUI().refs || {}); } catch {}
  addEventListener("storage", e => {
    if (e.key !== UI_KEY) return;
    const u = readUI();
    if (u.theme && THEMES.includes(u.theme) && document.documentElement.dataset.theme !== u.theme) {
      document.documentElement.dataset.theme = u.theme;
    }
    let refsJson = "";
    try { refsJson = JSON.stringify(u.refs || {}); } catch {}
    if (refsJson === lastRefsJson) return;
    lastRefsJson = refsJson;
    rebuildPlan();
    schedule(80);
  });
  addEventListener("message", e => {
    if (e.origin !== location.origin || !e.data || e.data.cdx !== "preview") return;
    rebuildPlan();
    schedule(40);
  });
  window.addEventListener("cdx-lang", () => { labelSwitch(); placed.forEach(p => (p.img.title = `${label(p.it)} · ${gameName(p.it.g)}`)); if (game) renderPanel(game.end ? "found" : ""); });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => schedule(300));
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
