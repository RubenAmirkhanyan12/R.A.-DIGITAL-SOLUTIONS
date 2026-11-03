// Guardián estático de textos: node scripts/check-site.mjs (también corre como prebuild)
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const APP = join(ROOT, "app");
const CONFIG = "app/lib/site-config.ts";
const EXTENSIONS = /\.(tsx?|jsx?|mdx?)$/;
const MAX_POST_AGE_DAYS = 180;

const FORBIDDEN = [
  /especialista/i,
  /garantizad[oa]s?/i,
  /\b100\s?%(?![\w"'`)\]])/,
  /24\/7/,
  /cero errores/i,
  /agendar/i,
  /presupuesto flexible/i,
  /te devuelvo/i,
  /devoluci[oó]n del importe/i,
  /triplicar/i,
  /sin contratar/i,
  /hemos documentado/i,
  /24\s?-\s?48\s?h/i,
  /15\+\s?empresas/i,
  /12\+\s?agencias/i,
  /€\s?51k/i,
  /\b95\s?%/,
  /5\s?★/,
  /valoración media/i,
  /referencias verificables/i,
  /ingeniero informático/i,
  /3 plazas disponibles/i,
  /garantía de roi/i,
  /encriptación end-to-end/i,
  /gdpr completo/i,
  /uptime 99/i,
  /\+\s?200 integraciones/i,
  /usamos zapier/i,
  /todos los casos son reales/i,
  /80\s?% elige/i,
  /rastech\.es/i,
  /href="#"/,
  /aggregateRating/,
];

const PRICE = /\d[\d.,]*\s?[€$](?!\{)|€\s?\d|\$\d/;
const OK_MARK = "check-site:ok";
const VALID_MARK = /https:\/\/\S+.*\d{4}-\d{2}-\d{2}|\d{4}-\d{2}-\d{2}.*https:\/\/\S+/;

const PLACES = [
  "Barcelona", "Badalona", "Hospitalet", "Sabadell", "Terrassa", "Mataró", "Sant Cugat",
  "Cornellà", "Granollers", "Castelldefels", "Gavà", "Viladecans", "El Prat", "Esplugues",
  "Sant Boi", "Rubí", "Martorell", "Vilanova", "Sitges", "Girona", "Tarragona", "Lleida",
  "Madrid", "Valencia", "Gràcia", "Eixample", "Sants", "Poblenou", "Sarrià", "Les Corts",
  "Horta", "Nou Barris", "Sant Martí", "Sant Andreu", "Ciutat Vella", "Maresme", "Vallès",
  "Baix Llobregat", "Catalunya", "Cataluña",
];

// Nombres propios que no cuentan como mayúscula de título
const PROPER = new Set([
  "Barcelona", "España", "Make", "Zapier", "Shopify", "WooCommerce", "Google", "Gmail", "Sheets",
  "Analytics", "Ads", "Stripe", "HubSpot", "WhatsApp", "Excel", "Outlook", "Rubén", "Amirkhanyan",
  "UPC", "RGPD", "IVA", "Verifactu", "AEAT", "BOE", "RASTECH", "TPV", "CRM",
]);

const configText = readFileSync(join(ROOT, CONFIG), "utf8");
const phoneDigits = (configText.match(/phone:\s*"([^"]+)"/)?.[1] ?? "").replace(/\D/g, "").replace(/^34/, "");
const ownerEmail = configText.match(/email:\s*"([^"]+)"/)?.[1] ?? "";
const PHONE = phoneDigits ? new RegExp(phoneDigits.split("").join("[\\s.()\\-]*")) : null;
const GMAIL = /[\w.+-]+@gmail\.com/i;

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path);
    return EXTENSIONS.test(entry.name) ? [path] : [];
  });
}

const failures = [];
const warnings = [];

function titleCaseWords(text) {
  const words = text.split(/[\s:·—–-]+/).map((w) => w.replace(/^[(¿¡"«]+/, ""));
  const capitalised = words.filter(
    (w) => /^[A-ZÁÉÍÓÚÑ][a-záéíóúñü]/.test(w) && !PROPER.has(w.replace(/[^\wÁÉÍÓÚÑáéíóúñü]/g, "")),
  ).length;
  // «A», «Y», «O», «E», «U» en mayúscula a mitad de titular
  const midLetters = words.slice(1).filter((w) => /^[AYOEU]$/.test(w)).length;
  return capitalised + (midLetters ? 3 : 0);
}

function headingTexts(text) {
  const found = [];
  for (const m of text.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)) {
    const inner = m[2]
      .replace(/\{"\s*"\}/g, " ")
      .replace(/\{`[^`]*`\}/g, " ")
      .replace(/\{[^}]*\}/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    found.push({ index: m.index, text: inner });
  }
  return found;
}

const lineOf = (text, index) => text.slice(0, index).split("\n").length;

for (const file of walk(APP)) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const isConfig = rel === CONFIG;

  lines.forEach((line, i) => {
    const where = `${rel}:${i + 1}`;
    for (const pattern of FORBIDDEN) {
      if (pattern.test(line)) failures.push(`${where} — texto prohibido (${pattern.source})`);
    }
    if (!isConfig) {
      if (GMAIL.test(line) || (ownerEmail && line.includes(ownerEmail)))
        failures.push(`${where} — correo del dueño fuera de site-config`);
      if (PHONE?.test(line)) failures.push(`${where} — teléfono del dueño fuera de site-config`);
      if (PRICE.test(line)) {
        const markLine = [line, lines[i - 1] ?? ""].find((l) => l.includes(OK_MARK));
        if (!markLine) failures.push(`${where} — precio escrito a mano fuera de site-config`);
        else if (!VALID_MARK.test(markLine))
          failures.push(`${where} — ${OK_MARK} sin enlace oficial y fecha (AAAA-MM-DD)`);
      }
    }
    const places = new Set(PLACES.filter((p) => line.includes(p)));
    if (places.size >= 4) warnings.push(`${where} — ${places.size} lugares en una línea: ${[...places].join(", ")}`);
  });

  const headings = headingTexts(text);
  if (rel.endsWith(".ts") || rel.endsWith(".md")) {
    lines.forEach((line, i) => {
      const md = line.match(/^#{2,6}\s+(.+)$/);
      if (md) headings.push({ line: i + 1, text: md[1].replace(/\*\*/g, "") });
    });
  }
  if (rel.endsWith(".tsx")) {
    lines.forEach((line, i) => {
      const t = line.match(/\btitle:\s*"([^"]+)"/);
      if (t && !t[1].includes("| RASTECH")) headings.push({ line: i + 1, text: t[1] });
    });
  }
  for (const h of headings) {
    if (titleCaseWords(h.text) >= 3) {
      warnings.push(`${rel}:${h.line ?? lineOf(text, h.index)} — titular con mayúsculas de título: «${h.text}»`);
    }
  }
}

// Antigüedad de los posts
const posts = readFileSync(join(APP, "lib/blog-posts.ts"), "utf8");
const today = new Date();
for (const block of posts.split(/\n  \{\n/).slice(1)) {
  const slug = block.match(/slug:\s*"([^"]+)"/)?.[1];
  const date = block.match(/updatedDate:\s*"([^"]+)"/)?.[1] ?? block.match(/publishDate:\s*"([^"]+)"/)?.[1];
  if (!slug || !date) continue;
  const days = Math.floor((today - new Date(date)) / 86_400_000);
  if (days > MAX_POST_AGE_DAYS) warnings.push(`blog/${slug} — actualizado hace ${days} días (${date})`);
}

for (const w of warnings) console.log(`WARN  ${w}`);
for (const f of failures) console.log(`FALLO ${f}`);
console.log(`\ncheck-site: ${failures.length} fallos, ${warnings.length} avisos`);
process.exitCode = failures.length ? 1 : 0;
