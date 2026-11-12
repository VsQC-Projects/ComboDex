
(() => {
"use strict";
const UI_KEY = "combo-dex-ui-v1";
const THEMES = ["wood", "official", "dojo"];
const MODULES = ["people", "frames", "compare", "replay", "create", "import", "knowledge"];
const TXT = {
  fr: {wood: "Bois", official: "Officielle", dojo: "Dojo", da: "Direction artistique",
    title: "Mini-jeu : trouve l'objet !", find: "Trouve cet objet caché dans la page :", from: "Jeu",
    quit: "Abandonner", again: "Rejouer", found: "Trouvé !", miss: "Ce n'est pas celui-là…",
    time: "Temps", scroll: "Il peut être n'importe où dans la page, fais défiler.",
    all: "Elles sont dispersées dans la page : trouve-les toutes.", got: "Trouvées",
    gave: "Tu as abandonné… il était là !", gaveN: "Tu as abandonné… elles étaient là !", close: "Fermer"},
  en: {wood: "Wood", official: "Official", dojo: "Dojo", da: "Art direction",
    title: "Mini-game: find the object!", find: "Find this object hidden on the page:", from: "Game",
    quit: "Give up", again: "Play again", found: "Found it!", miss: "Not that one…",
    time: "Time", scroll: "It can be anywhere in the page, scroll around.",
    all: "They are scattered across the page: find them all.", got: "Found",
    gave: "You gave up… it was right here!", gaveN: "You gave up… they were right here!", close: "Close"},
  es: {wood: "Madera", official: "Oficial", dojo: "Dojo", da: "Dirección artística",
    title: "Minijuego: ¡encuentra el objeto!", find: "Encuentra este objeto escondido en la página:", from: "Juego",
    quit: "Rendirse", again: "Jugar otra vez", found: "¡Encontrado!", miss: "Ese no es…",
    time: "Tiempo", scroll: "Puede estar en cualquier parte de la página, desplázate.",
    all: "Están repartidas por la página: encuentra todas.", got: "Encontradas",
    gave: "Te rendiste… ¡estaba aquí!", gaveN: "Te rendiste… ¡estaban aquí!", close: "Cerrar"},
};
const lang = () => (TXT[window.cdxLang] ? window.cdxLang : "fr");
const t = k => TXT[lang()][k];
const LI = {fr: 0, en: 1, es: 2};

/* ---------- themes ---------- */
function readUI() { try { return JSON.parse(localStorage.getItem(UI_KEY)) || {}; } catch { return {}; } }
function setTheme(name) {
  if (!THEMES.includes(name)) name = "official";
  document.documentElement.dataset.theme = name;
  const ui = readUI(); ui.theme = name;
  try { if (typeof H === "object" && H) H.theme = name; } catch {}
  try { localStorage.setItem(UI_KEY, JSON.stringify(ui)); } catch {}
  document.querySelectorAll("#daSwitch button").forEach(b => b.setAttribute("aria-pressed", b.dataset.theme === name ? "true" : "false"));
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

/* ---------- refs data ---------- */
const DATA = window.CDX_OBJETS || {};
const gameName = g => { try { if (typeof b === "object" && b[g] && b[g].name) return b[g].name; } catch {} return g.toUpperCase(); };
const PER_GAME = 8;
const PEOPLE_DESKTOP = 12;
const PEOPLE_MOBILE = 12;
const PLAN = {};
MODULES.forEach(m => (PLAN[m] = []));
const pieces = it => it.row[7] || 0;
const label = it => it.row[1 + LI[lang()]] || it.row[1];
const hint = it => it.row[4 + LI[lang()]] || label(it);

const hash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const rng = seed => () => { seed = seed + 0x6D2B79F5 | 0; let x = Math.imul(seed ^ seed >>> 15, 1 | seed); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; };
for (const m of MODULES)
  for (const [g, rows] of Object.entries(DATA)) {
    const r = rng(hash(m + "/" + g));
    rows.map(row => [r(), row]).sort((a, c) => a[0] - c[0]).slice(0, m === "people" ? PEOPLE_DESKTOP : PER_GAME)
      .forEach(([, row]) => PLAN[m].push({g, id: row[0], row}));
  }

let layer, placed = [];
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


/* Placement commun des refs : tous les modules */
let refVisitTab = null;
let refVisitSeed = 0;
let refVisitItems = [];
let refVisitWidth = 0;

function refNewVisit(tab) {
  refVisitTab = tab;
  refVisitSeed = Math.floor(Math.random() * 4294967295);

  const mobile = window.innerWidth < 700;
  const limit = mobile ? 12 : (tab === "people" ? 12 : 8);

  refVisitItems = [];

  for (const [g, rows] of Object.entries(DATA)) {
    if (!Array.isArray(rows)) continue;

    const shuffled = [...rows]
      .map(row => ({row, random: Math.random()}))
      .sort((a, b) => a.random - b.random)
      .slice(0, limit);

    for (const {row} of shuffled) {
      refVisitItems.push({
        g,
        id: row[0],
        row
      });
    }
  }

  refVisitItems.sort(() => Math.random() - 0.5);
}

function place() {
  if (!layer) return;

  const tab = activeTab();
  const mobile = window.innerWidth < 700;
  const W = document.documentElement.clientWidth;
  const H = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );

  if (tab !== refVisitTab || W !== refVisitWidth) {
    refNewVisit(tab);
    refVisitWidth = W;
  }

  layer.replaceChildren();
  placed = [];
  layer.dataset.tab = tab;

  if (tab === "home" || !refVisitItems.length) return;

  const page = document.getElementById(tab);
  if (!page) return;

  const rect = el => {
    const r = el.getBoundingClientRect();
    return {
      left: r.left + scrollX,
      right: r.right + scrollX,
      top: r.top + scrollY,
      bottom: r.bottom + scrollY,
      width: r.width,
      height: r.height
    };
  };

  const area = rect(page);

  const panels = [...page.querySelectorAll(
    ".panel, .card, .section, .ft-stage, " +
    ".ft-row, .character-panel, " +
    ".ra-theater-panel, .compare-hero, " +
    ".kc-head, .kc-card, .atelier-dash"
  )]
    .map(rect)
    .filter(p => p.width > W * 0.42 && p.height > 55);

  const edgePanel = (y, left) => panels
    .filter(p => y >= p.top - 12 && y <= p.bottom + 12)
    .filter(p => left ? p.left > 4 : p.right < W - 4)
    .sort((a, b) =>
      left ? b.left - a.left : a.right - b.right
    )[0];

  const random = rng(refVisitSeed);
  const occupied = [];

  const canPlace = (x, y, size) =>
    !occupied.some(p =>
      x < p.x + p.size + 3 &&
      x + size + 3 > p.x &&
      y < p.y + p.size + 5 &&
      y + size + 5 > p.y
    );

  const add = (it, src, x, y, size) => {
    x = Math.round(Math.max(3, Math.min(W - size - 3, x)));
    y = Math.round(Math.max(3, Math.min(H - size - 3, y)));

    if (!canPlace(x, y, size)) return false;

    const img = new Image();

    img.src = src;
    img.alt = "";
    img.className = "cdx-ref cdx-ref-edge";
    img.loading = "lazy";
    img.decoding = "async";
    img.draggable = false;
    img.dataset.key = it.g + "/" + it.id;
    img.title = `${label(it)} · ${gameName(it.g)}`;

    img.style.cssText =
      `left:${x}px;top:${y}px;` +
      `width:${size}px;height:${size}px;` +
      `--rot:${Math.round(random() * 30 - 15)}deg`;

    img.onerror = () => {
      img.remove();
      const index = placed.findIndex(p => p.img === img);
      if (index >= 0) placed.splice(index, 1);
    };

    layer.appendChild(img);
    placed.push({it, img});
    occupied.push({x, y, size});

    return true;
  };

  const items = refVisitItems;
  const startY = Math.max(4, area.top);
  const endY = Math.min(H - 45, area.bottom + 25);
  const span = Math.max(1, endY - startY);

  /* Alternance gauche / droite comme Personnages */
  items.forEach((it, i) => {
    const size = Math.round(
      (mobile ? 30 : 40) +
      random() * (mobile ? 14 : 24)
    );

    const src =
      `objets/${it.g}/${it.id}` +
      `${pieces(it) ? "-1" : ""}.webp`;

    const baseY =
      startY + (i + 0.5) * span / items.length;

    const left = i % 2 === 0;

    for (let attempt = 0; attempt < 48; attempt++) {
      const step =
        Math.ceil(attempt / 2) *
        (size + 7) *
        (attempt % 2 ? 1 : -1);

      const y = Math.max(
        4,
        Math.min(
          H - size - 4,
          baseY + (attempt ? step : 0)
        )
      );

      const panel = edgePanel(y + size / 2, left);
      let x;

      if (mobile) {
        const edge = panel
          ? (left ? panel.left : panel.right)
          : (left
              ? Math.max(12, area.left + 12)
              : Math.min(W - 12, area.right - 12));

        const visible = size * (0.72 + random() * 0.20);

        x = left
          ? edge - visible
          : edge - (size - visible);

        x += (random() - 0.5) * 12;
      } else {
        const band = Math.min(120, W * 0.13);

        x = left
          ? 5 + random() * band
          : W - size - 5 - random() * band;
      }

      if (add(it, src, x, y, size)) break;
    }
  });

  /* Refs supplémentaires près du pied de page */
  const footer = document.querySelector(".studio-footer");

  if (footer && items.length) {
    const f = rect(footer);
    const count = Math.min(mobile ? 4 : 7, items.length);

    for (let i = 0; i < count; i++) {
      const it = items[(i * 7 + 3) % items.length];
      const size = mobile ? 30 : 40;

      const x = (i + 0.5) * W / count - size / 2;
      const y = f.top - size - 6 - (i % 2) * 9;

      add(
        it,
        `objets/${it.g}/${it.id}` +
        `${pieces(it) ? "-1" : ""}.webp`,
        x, y, size
      );
    }
  }

  /* Refs dans l'espace à droite du logo ComboDex */
  if (items.length) {
    const header = document.querySelector(".head");
    const logo = document.querySelector(
      ".head .brand-btn, .head .brand-word, " +
      ".brand-btn, .brand-word"
    );
    const langs = document.querySelector(
      ".head .lang-switch, .lang-switch"
    );

    if (header && logo) {
      const h = rect(header);
      const l = rect(logo);
      const r = langs ? rect(langs) : null;

      const from = l.right + (mobile ? 5 : 14);
      const to = (
        r && r.left > from + 24
          ? r.left
          : Math.min(W - 8, h.right - 8)
      ) - (mobile ? 4 : 14);

      const size = mobile
        ? Math.min(25, Math.max(18, h.height - 12))
        : Math.min(34, Math.max(22, h.height - 12));

      const count = Math.max(
        0,
        Math.min(
          mobile ? 7 : 10,
          Math.floor((to - from) / (size + 5))
        )
      );

      for (let i = 0; i < count; i++) {
        const it = items[(i * 3 + 5) % items.length];

        const x =
          from +
          (i + 0.5) * (to - from) / count -
          size / 2;

        const y = h.top + (h.height - size) / 2;

        add(
          it,
          `objets/${it.g}/${it.id}` +
          `${pieces(it) ? "-1" : ""}.webp`,
          x, y, size
        );
      }
    }
  }

  if (game && game.tab === tab) relink();
}

let timer = 0;
function schedule(ms = 250) { clearTimeout(timer); timer = setTimeout(place, ms); }

/* ---------- mini-game ---------- */
let game = null, audio = null;
function ctx() {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
  } catch {}
  return audio;
}
function tone(ac, f, at, dur, type = "square", vol = 0.08) {
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f, at);
  g.gain.setValueAtTime(0, at);
  g.gain.linearRampToValueAtTime(vol, at + 0.012);
  g.gain.setValueAtTime(vol, at + dur * 0.7);
  g.gain.exponentialRampToValueAtTime(0.0008, at + dur);
  o.connect(g).connect(ac.destination);
  o.start(at);
  o.stop(at + dur + 0.02);
}
function fanfare() {
  const ac = ctx(); if (!ac) return;
  const n = ac.currentTime + 0.05, s = 0.105;
  [392, 415.3, 440, 466.2, 493.9, 523.3, 554.4, 587.3].forEach((f, i) =>
    tone(ac, f, n + i * s, s * 1.1, "triangle", 0.07)
  );
  const end = n + 8 * s;
  [[523.3, 659.3, 784], [587.3, 740, 880]].forEach((ch, i) =>
    ch.forEach(f => tone(ac, f, end + i * 0.3, i ? 1.1 : 0.28, "square", 0.035))
  );
  tone(ac, 1174.7, end + 0.3, 1.1, "triangle", 0.05);
}
function jingle(ok) {
  const ac = ctx(); if (!ac) return;
  const n = ac.currentTime + 0.02;
  (ok ? [784, 988, 1175, 1568] : [330, 262]).forEach((f, i) =>
    tone(ac, f, n + i * 0.09, ok ? 0.16 : 0.2, ok ? "square" : "sawtooth", 0.05)
  );
}

function panel() {
  let p = document.getElementById("cdxHunt");
  if (!p) {
    p = document.createElement("div");
    p.id = "cdxHunt";
    p.className = "cdx-hunt";
    p.setAttribute("role", "dialog");
    p.setAttribute("aria-live", "polite");
    document.body.appendChild(p);
  }
  return p;
}
function renderPanel(state) {
  const p = panel();
  if (!game) { p.remove(); return; }
  const it = game.target.it;
  const secs = Math.floor(((game.end || Date.now()) - game.start) / 1000);
  const done = state === "found" || state === "gave";
  const need = game.need;
  const src = `objets/${it.g}/${it.id}${pieces(it) ? "-1" : ""}.webp`;
  const prog = need > 1
    ? `<div class="hunt-prog"><b>${t("got")} : ${game.got.size}/${need}</b> · ${t("all")}</div>`
    : "";
  const head = state === "gave" ? t(need > 1 ? "gaveN" : "gave") : t("found");

  p.innerHTML = `<div class="hunt-top"><b>${t("title")}</b><span class="hunt-time">${t("time")} ${secs}s</span></div>
    ${done
      ? `<div class="hunt-found"><img src="${src}" alt=""><div><b>${head}</b><div>${label(it)}</div><div class="muted small">${gameName(it.g)}</div></div></div>`
      : `<div class="small muted">${t("find")}</div><div class="hunt-hint">« ${hint(it)} »</div>${prog}<div class="small muted">${t("from")} : ${gameName(it.g)} · ${t("scroll")}</div>`}
    ${state === "miss" ? `<div class="hunt-miss">${t("miss")}</div>` : ""}
    <div class="hunt-btns"><button type="button" class="tiny" data-h="${done ? "close" : "quit"}">${done ? t("close") : t("quit")}</button><button type="button" class="tiny primary" data-h="again">${t("again")}</button></div>`;

  p.onclick = e => {
    const b = e.target.closest("[data-h]");
    if (!b) return;
    if (b.dataset.h === "quit") giveUp();
    else if (b.dataset.h === "close") stop();
    else start();
  };
}
function giveUp() {
  if (!game || game.end) return;
  game.end = Date.now();
  game.gave = true;
  clearInterval(game.tick);
  const imgs = placed.filter(p => p.img.dataset.key === game.key).map(p => p.img);
  imgs.forEach(i => i.classList.add("hunt-reveal"));
  if (imgs[0]) imgs[0].scrollIntoView({behavior: "smooth", block: "center"});
  jingle(false);
  renderPanel("gave");
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
    clearTimeout(timer);
    place();
  }
  if (!placed.length) return;
  if (game) clearInterval(game.tick);
  document.querySelectorAll(".cdx-ref.hunt-win,.cdx-ref.hunt-got,.cdx-ref.hunt-reveal")
    .forEach(i => i.classList.remove("hunt-win", "hunt-got", "hunt-reveal"));
  const keys = [...new Set(placed.map(p => p.img.dataset.key))];
  const key = keys[Math.floor(Math.random() * keys.length)];
  const target = placed.find(p => p.img.dataset.key === key);
  game = {
    tab, target, key,
    need: placed.filter(p => p.img.dataset.key === key).length,
    got: new Set(),
    start: Date.now(),
    end: 0
  };
  document.documentElement.classList.add("cdx-hunting");
  renderPanel();
  game.tick = setInterval(() => {
    if (game && !game.end) {
      const el = document.querySelector("#cdxHunt .hunt-time");
      if (el) el.textContent = `${t("time")} ${Math.floor((Date.now() - game.start) / 1000)}s`;
    }
  }, 1000);
}
function stop() {
  if (game) clearInterval(game.tick);
  game = null;
  document.documentElement.classList.remove("cdx-hunting");
  document.querySelectorAll(".cdx-ref.hunt-win,.cdx-ref.hunt-got,.cdx-ref.hunt-reveal")
    .forEach(i => i.classList.remove("hunt-win", "hunt-got", "hunt-reveal"));
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
      const ac = ctx();
      if (ac) tone(ac, 988, ac.currentTime + 0.02, 0.14, "square", 0.05);
      renderPanel();
      return;
    }
    game.end = Date.now();
    clearInterval(game.tick);
    placed.forEach(p => {
      if (game.got.has(p.img.src)) {
        p.img.classList.remove("hunt-got");
        p.img.classList.add("hunt-win");
      }
    });
    jingle(true);
    renderPanel("found");
  } else {
    img.classList.remove("hunt-shake");
    void img.offsetWidth;
    img.classList.add("hunt-shake");
    jingle(false);
    renderPanel("miss");
  }
}

/* brand long-press: 5 s opens the mini-game */
function bindBrand() {
  const hb = document.getElementById("homeBrand");
  if (!hb) return;
  let hold = 0, fired = false;
  const cancel = () => {
    clearTimeout(hold);
    hb.classList.remove("brand-charging");
  };
  hb.addEventListener("pointerdown", e => {
    if (e.button > 0) return;
    fired = false;
    ctx();
    hb.classList.add("brand-charging");
    hold = setTimeout(() => {
      fired = true;
      hb.classList.remove("brand-charging");
      fanfare();
      start();
    }, 5000);
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach(ev => hb.addEventListener(ev, cancel));
  hb.addEventListener("click", e => {
    if (fired) {
      fired = false;
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }, true);
  hb.addEventListener("contextmenu", e => e.preventDefault());
}

function init() {
  setTheme(readUI().theme || document.documentElement.dataset.theme || "official");
  buildSwitch();
  layer = document.createElement("div");
  layer.id = "cdxRefs";
  layer.className = "cdx-refs";
  layer.setAttribute("aria-hidden", "true");
  layer.addEventListener("click", onRefClick);
  document.body.appendChild(layer);
  bindBrand();
  const main = document.getElementById("main");
  if (main) new ResizeObserver(() => schedule(300)).observe(main);
  if (main) new MutationObserver(() => {
    if (layer.dataset.tab !== activeTab()) {
      layer.textContent = "";
      placed = [];
      layer.dataset.tab = activeTab();
    }
    schedule(400);
  }).observe(main, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["class"]
  });
  addEventListener("resize", () => schedule(300));
  addEventListener("hashchange", () => schedule(120));
  window.addEventListener("cdx-lang", () => {
    labelSwitch();
    placed.forEach(p => (p.img.title = `${label(p.it)} · ${gameName(p.it.g)}`));
    if (game) renderPanel(game.end ? "found" : "");
  });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => schedule(300));
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
})();
