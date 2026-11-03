// Uso puntual: node scripts/verify-seo.mjs [--skip-build]
import { execSync, spawn } from "node:child_process";

const PORT = 3100;
const LOCAL = `http://localhost:${PORT}`;
const SITE = "https://www.ras-tech.es";
const HUB = "/automatizar";
const EXACT_ANCHOR = "automatización de procesos en barcelona";
const MAX_EXACT_ANCHOR_PAGES = 3;
const MIN_INBOUND = 2;
const UNPROVABLE = /730|2\.?800 ?%|51k|51[.,]840|ROI garantizado/i;

const EXPECTED_TITLES = {
  "/": "Automatización de procesos para pymes en Barcelona | RASTECH",
  "/precios": "Precios de automatización de procesos en Barcelona | RASTECH",
  "/casos": "Casos de uso de automatización para pymes | RASTECH",
  "/automatizar": "Automatización de Procesos Barcelona: Guía por Sectores | RASTECH",
  "/automatizar-restaurantes": "Automatización para restaurantes en Barcelona | RASTECH",
  "/automatizar-ecommerce": "Automatización para e-commerce en Barcelona | RASTECH",
  "/automatizar-agencias": "Automatización para agencias en Barcelona | RASTECH",
  "/automatizar-otros": "Automatización de procesos de negocio a medida | RASTECH",
  "/sobre-nosotros": "Sobre Rubén Amirkhanyan: automatización con n8n | RASTECH",
  "/blog": "Blog de automatización de procesos para pymes | RASTECH",
  "/blog/cuanto-cuesta-automatizar-barcelona": "Cuánto cuesta automatizar procesos en Barcelona (2026)",
  "/blog/n8n-vs-make-vs-zapier-barcelona": "n8n vs Make vs Zapier: cuál elegir en 2026 | RASTECH",
  "/blog/errores-automatizar-empresa-barcelona": "7 errores al automatizar una empresa y cómo evitarlos",
  "/blog/automatizacion-procesos-barcelona": "Automatización de procesos: guía para pymes (2026) | RASTECH",
  "/blog/5-procesos-manuales-destructivos-barcelona": "5 procesos de tu pyme que conviene automatizar | RASTECH",
  "/blog/automatizacion-facturacion-40h-4h": "Cómo automatizar la facturación de una asesoría | RASTECH",
  "/blog/automatizar-facturas-con-n8n": "Cómo automatizar facturas con n8n paso a paso | RASTECH",
  "/blog/automatizar-pedidos-a-proveedores-restaurante": "Automatizar pedidos a proveedores en restaurantes | RASTECH",
  "/blog/automatizar-pedidos-shopify-woocommerce": "Cómo automatizar pedidos de Shopify y WooCommerce | RASTECH",
  "/blog/reportes-automaticos-para-agencias-de-marketing": "Reportes automáticos para agencias de marketing | RASTECH",
  "/blog/automatizar-cobros-y-facturas-impagadas": "Automatizar cobros y facturas impagadas en pymes | RASTECH",
  "/blog/que-es-n8n-y-cuando-usarlo-en-una-pyme": "Qué es n8n y cuándo usarlo en una pyme | RASTECH",
};

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x2F;/g, "/");

const stripTags = (s) => decode(s.replace(/<!--.*?-->/gs, "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

const metaContent = (html, attr, value) => {
  const tag = html.match(new RegExp(`<meta[^>]*${attr}="${value}"[^>]*>`, "i"))?.[0];
  return tag ? decode(tag.match(/content="([^"]*)"/i)?.[1] ?? "") : "";
};

function internalPath(href) {
  const raw = decode(href);
  if (/^(mailto:|tel:|#|javascript:)/i.test(raw)) return null;
  let path = raw;
  if (/^https?:\/\//i.test(raw)) {
    const url = new URL(raw);
    if (!/^(www\.)?ras-tech\.es$/.test(url.hostname) && url.hostname !== "localhost") return null;
    path = url.pathname;
  }
  if (!path.startsWith("/") || path.startsWith("/_next") || path.startsWith("/lead-magnet")) return null;
  path = path.split(/[?#]/)[0];
  return path.length > 1 ? path.replace(/\/$/, "") : "/";
}

function headingSkips(html) {
  const levels = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  const skips = [];
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) skips.push(`h${levels[i - 1]}>h${levels[i]}`);
  }
  return [...new Set(skips)];
}

// El menú (<header>) y el pie (<footer>) no cuentan como enlaces de contenido
const contentOnly = (html) =>
  html.replace(/<header\b[\s\S]*?<\/header>/gi, "").replace(/<footer\b[\s\S]*?<\/footer>/gi, "");

function analyse(path, status, html) {
  const title = decode(html.match(/<title>(.*?)<\/title>/is)?.[1] ?? "");
  const description = metaContent(html, "name", "description");
  const canonical = decode(html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1] ?? "");
  const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)].map((m) => stripTags(m[1]));
  const lang = html.match(/<html[^>]*\blang="([^"]*)"/i)?.[1] ?? "";
  const jsonLd = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>(.*?)<\/script>/gis)].map((m) => m[1]);
  const ld = jsonLd.join(" ");
  const links = new Set();
  let exactAnchors = 0;
  let selfLinks = 0;
  for (const m of contentOnly(html).matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gis)) {
    const target = internalPath(m[1]);
    if (target === null) continue;
    // Un salto a una sección de la misma página (/#contacto) no es un autoenlace
    if (target === path) {
      if (!decode(m[1]).includes("#")) selfLinks++;
    } else links.add(target);
    if (target === HUB && stripTags(m[2]).toLowerCase() === EXACT_ANCHOR) exactAnchors++;
  }
  const noindex = /<meta[^>]*name="robots"[^>]*noindex/i.test(html);
  const ogTitle = metaContent(html, "property", "og:title");
  const ogDescription = metaContent(html, "property", "og:description");
  const twitterDescription = metaContent(html, "name", "twitter:description");

  return {
    path, status, title, description, canonical, h1s, lang,
    jsonLdCount: jsonLd.length,
    aggregateRating: /aggregateRating/i.test(ld),
    review: /"review"/i.test(ld),
    unprovable: [title, description, ogTitle, ogDescription, twitterDescription, ld].some((t) => UNPROVABLE.test(t)),
    ogMatches: ogTitle === title && ogDescription === description,
    links, exactAnchors, selfLinks, noindex,
    skips: headingSkips(html),
    keywordsMeta: /<meta[^>]*name="keywords"/i.test(html),
  };
}

function warnings(p) {
  const warns = [];
  if (p.title.length > 60 && p.path === HUB) warns.push(`title ${p.title.length}>60 (congelado a propósito)`);
  return warns;
}

function checks(p, inbound) {
  const errors = [];
  const expectedCanonical = p.path === "/" ? SITE : `${SITE}${p.path}`;
  if (p.status !== 200) errors.push(`status ${p.status}`);
  if (p.title.length > 60 && p.path !== HUB) errors.push(`title ${p.title.length}>60`);
  if (!p.description) errors.push("description vacía");
  if (p.description.length > 155) errors.push(`description ${p.description.length}>155`);
  if (p.canonical !== expectedCanonical) errors.push(`canonical ${p.canonical || "ausente"}`);
  if (p.h1s.length !== 1) errors.push(`${p.h1s.length} H1`);
  if (p.lang !== "es") errors.push(`lang ${p.lang}`);
  if (p.aggregateRating) errors.push("aggregateRating");
  if (p.review) errors.push("review");
  if (inbound < MIN_INBOUND) errors.push(`${inbound} entrantes desde el contenido`);
  if (p.selfLinks) errors.push(`se enlaza a sí misma (${p.selfLinks})`);
  if (EXPECTED_TITLES[p.path] !== p.title) errors.push("title no coincide");
  if (!EXPECTED_TITLES[p.path]) errors.push("sin title esperado");
  if (!p.ogMatches) errors.push("OG distinto");
  if (p.unprovable) errors.push("cifra no demostrable");
  if (p.noindex) errors.push("noindex");
  if (p.keywordsMeta) errors.push("meta keywords");
  if (p.exactAnchors > 1) errors.push(`${p.exactAnchors} anclas exactas`);
  return errors;
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(LOCAL)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("El servidor no arrancó");
}

if (!process.argv.includes("--skip-build")) execSync("npm run build", { stdio: "ignore" });

// Si ya hay algo en el puerto, se estaría comprobando una build vieja
const busy = await fetch(LOCAL).then(() => true, () => false);
if (busy) {
  console.error(`El puerto ${PORT} ya está en uso: cierra ese servidor y vuelve a ejecutar.`);
  process.exit(1);
}

const server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore", detached: true });
let failed = 0;

try {
  await waitForServer();
  const sitemap = await (await fetch(`${LOCAL}/sitemap.xml`)).text();
  const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => {
    const rest = m[1].replace(SITE, "");
    return rest === "" ? "/" : rest;
  });

  const pages = [];
  for (const path of paths) {
    const res = await fetch(`${LOCAL}${path}`);
    pages.push(analyse(path, res.status, await res.text()));
  }

  const inbound = new Map(paths.map((p) => [p, 0]));
  for (const page of pages) {
    for (const target of page.links) {
      if (inbound.has(target)) inbound.set(target, inbound.get(target) + 1);
    }
  }

  const known = new Set(paths);
  const broken = [];
  for (const target of new Set(pages.flatMap((p) => [...p.links]))) {
    if (known.has(target)) continue;
    const status = (await fetch(`${LOCAL}${target}`)).status;
    if (status !== 200) broken.push(`${target} (${status}) desde ${pages.filter((p) => p.links.has(target)).map((p) => p.path).join(", ")}`);
  }
  const exactPages = pages.filter((p) => p.exactAnchors > 0);
  const anchorError = exactPages.length > MAX_EXACT_ANCHOR_PAGES;

  console.log("| URL | Status | Title (long.) | Desc. (long.) | Canonical | H1 | lang | JSON-LD | aggRating/review | Sal. | Ent. | Resultado |");
  console.log("|---|---|---|---|---|---|---|---|---|---|---|---|");
  for (const p of pages) {
    const errors = checks(p, inbound.get(p.path));
    if (errors.length) failed++;
    const canon = p.canonical.replace(SITE, "") || "/";
    console.log(
      `| ${p.path} | ${p.status} | ${p.title} (${p.title.length}) | ${p.description.length} | ${canon} | ${p.h1s.length}: ${p.h1s[0] ?? ""} | ${p.lang} | ${p.jsonLdCount} | ${p.aggregateRating || p.review ? "sí" : "no"} | ${p.links.size} | ${inbound.get(p.path)} | ${errors.length ? `ERROR: ${errors.join("; ")}` : "OK"} |`,
    );
  }

  const warned = pages.map((p) => [p.path, warnings(p)]).filter(([, w]) => w.length);
  console.log(`\nEnlaces internos rotos: ${broken.length}`);
  for (const b of broken) console.log(`  ERROR ${b}`);
  console.log(
    `Ancla exacta «${EXACT_ANCHOR}» en ${exactPages.length} páginas (máx. ${MAX_EXACT_ANCHOR_PAGES}): ${exactPages.map((p) => p.path).join(", ") || "ninguna"}${anchorError ? " — ERROR" : ""}`,
  );
  if (broken.length || anchorError) failed++;
  console.log(`\n${pages.length} URLs, ${failed} con ERROR, ${warned.length} con WARN`);
  for (const [path, w] of warned) console.log(`  WARN ${path}: ${w.join("; ")}`);
  const skipped = pages.filter((p) => p.skips.length);
  console.log(`\nSaltos de encabezado: ${skipped.length ? "" : "ninguno"}`);
  for (const p of skipped) console.log(`  ${p.path}: ${p.skips.join(", ")}`);

  for (const url of ["/contacto", "/blog/no-existe"]) {
    console.log(`${url} -> ${(await fetch(`${LOCAL}${url}`)).status}`);
  }
} finally {
  process.kill(-server.pid);
}

process.exitCode = failed ? 1 : 0;
