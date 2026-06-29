export type OutreachStatus = "PENDING" | "CONTACTED" | "REPLIED" | "PUBLISHED" | "REJECTED";
export type PitchType = "guest-post" | "resource-mention" | "case-study" | "community-post" | "dm";

export interface OutreachTarget {
  id: number;
  name: string;
  url: string;
  contactMethod: string;
  relevance: number; // 1-10
  pitchType: PitchType;
  description: string;
  keywords: string[];
  status: OutreachStatus;
  notes?: string;
}

export const outreachTargets: OutreachTarget[] = [
  // ── TIER 1: Herramientas oficiales (máxima relevancia) ──────────────────────
  {
    id: 1,
    name: "n8n Blog",
    url: "https://n8n.io/blog",
    contactMethod: "https://n8n.io/contact",
    relevance: 10,
    pitchType: "guest-post",
    description: "Blog oficial de n8n — herramienta usada en todos los casos de RASTECH. Un mention aquí vale 10 links genéricos.",
    keywords: ["n8n", "automatización", "workflows", "Barcelona"],
    status: "PENDING",
    notes: "Proponer: caso real asesoría fiscal Barcelona con n8n. Tienen sección 'Customer stories'.",
  },
  {
    id: 2,
    name: "Make Blog",
    url: "https://make.com/en/blog",
    contactMethod: "https://www.make.com/en/contact",
    relevance: 10,
    pitchType: "guest-post",
    description: "Blog oficial de Make (ex-Integromat). Tienen sección de casos de uso reales.",
    keywords: ["Make", "automatización", "integraciones", "pymes"],
    status: "PENDING",
    notes: "Proponer: comparativa real de Make vs n8n en empresa española. Tienen partnership program.",
  },
  {
    id: 3,
    name: "Zapier Blog",
    url: "https://zapier.com/blog",
    contactMethod: "https://zapier.com/contact-us",
    relevance: 8,
    pitchType: "resource-mention",
    description: "Blog de Zapier con millones de visitas. Difícil guest post, pero pueden mencionar en artículos de automatización España.",
    keywords: ["Zapier", "automatización empresa", "Barcelona"],
    status: "PENDING",
    notes: "Target secundario. Mejor enfoque: comentar en sus artículos con insight de mercado Barcelona.",
  },

  // ── TIER 1: Agencias y consultoras Barcelona ────────────────────────────────
  {
    id: 4,
    name: "Agencias Barcelona #1",
    url: "https://www.google.com/search?q=agencia+automatizacion+barcelona",
    contactMethod: "contacto directo en su web",
    relevance: 9,
    pitchType: "resource-mention",
    description: "Agencias de automatización/marketing Barcelona que pueden referir clientes o mencionar RASTECH como partner técnico.",
    keywords: ["agencia Barcelona", "automatización", "partner"],
    status: "PENDING",
    notes: "Buscar en Google 'agencia automatización barcelona' y contactar las 3 primeras no-competencia directa.",
  },
  {
    id: 5,
    name: "Agencias Barcelona #2",
    url: "https://www.google.com/search?q=consultora+digital+barcelona+procesos",
    contactMethod: "contacto directo en su web",
    relevance: 8,
    pitchType: "resource-mention",
    description: "Consultoras digitales Barcelona que trabajan con pymes — clientes complementarios.",
    keywords: ["consultora digital Barcelona", "transformación digital"],
    status: "PENDING",
    notes: "Proponer colaboración: ellos hacen estrategia, RASTECH implementa automatización técnica.",
  },
  {
    id: 6,
    name: "Despachos y asesorías Barcelona",
    url: "https://www.google.com/search?q=asesoria+fiscal+barcelona+tecnologia",
    contactMethod: "contacto directo",
    relevance: 8,
    pitchType: "case-study",
    description: "Asesorías fiscales y contables Barcelona — clientes directos y fuente de backlinks locales.",
    keywords: ["asesoría fiscal Barcelona", "automatización contable"],
    status: "PENDING",
    notes: "Ofrecer: caso real documentado (facturación 40h→4h) a cambio de testimonial/mención en su web.",
  },

  // ── TIER 2: Comunidades tech ─────────────────────────────────────────────────
  {
    id: 7,
    name: "Medium — Automatización en Español",
    url: "https://medium.com/tag/automatizacion",
    contactMethod: "Publicar artículo directamente",
    relevance: 7,
    pitchType: "guest-post",
    description: "Medium tiene tráfico orgánico en español para automatización empresarial.",
    keywords: ["automatización", "Barcelona", "n8n", "pymes"],
    status: "PENDING",
    notes: "Publicar versión resumida del post 'Cuánto cuesta automatizar' con link a ras-tech.es. Gratuito.",
  },
  {
    id: 8,
    name: "Medium — SaaS España",
    url: "https://medium.com/tag/saas",
    contactMethod: "Publicar artículo directamente",
    relevance: 6,
    pitchType: "guest-post",
    description: "Publicaciones sobre SaaS y herramientas digitales en español.",
    keywords: ["SaaS", "herramientas automatización", "España"],
    status: "PENDING",
    notes: "Publicar comparativa n8n vs Make vs Zapier con perspectiva España/Barcelona.",
  },
  {
    id: 9,
    name: "LinkedIn — Artículo de Rubén",
    url: "https://www.linkedin.com/in/ruben-amirkhanyan",
    contactMethod: "Publicar directamente en LinkedIn Articles",
    relevance: 8,
    pitchType: "guest-post",
    description: "Artículos en LinkedIn tienen SEO propio y alcance orgánico en audiencia empresarial.",
    keywords: ["automatización Barcelona", "n8n", "ROI", "pymes"],
    status: "PENDING",
    notes: "Publicar versión corta (800 palabras) de cada post con link 'Artículo completo en ras-tech.es'.",
  },

  // ── TIER 2: Reddit ───────────────────────────────────────────────────────────
  {
    id: 10,
    name: "Reddit r/webdev",
    url: "https://www.reddit.com/r/webdev/",
    contactMethod: "Publicar post en el subreddit",
    relevance: 6,
    pitchType: "community-post",
    description: "Comunidad de desarrolladores web — potencial audiencia para caso n8n.",
    keywords: ["n8n", "automation", "workflow", "Barcelona"],
    status: "PENDING",
    notes: "IMPORTANTE: No spam. Publicar como 'Show HN' con el caso real técnico de n8n. No mencionar precios.",
  },
  {
    id: 11,
    name: "Reddit r/smallbusiness",
    url: "https://www.reddit.com/r/smallbusiness/",
    contactMethod: "Publicar post en el subreddit",
    relevance: 7,
    pitchType: "community-post",
    description: "Comunidad de pequeños empresarios — audiencia ideal para caso de ahorro de tiempo.",
    keywords: ["automatización", "ahorro tiempo", "pymes", "ROI"],
    status: "PENDING",
    notes: "Publicar: 'Our client saved 432 hours/year on invoicing. Here's how (n8n case study)'. En inglés da más alcance.",
  },
  {
    id: 12,
    name: "Reddit r/Entrepreneur",
    url: "https://www.reddit.com/r/Entrepreneur/",
    contactMethod: "Publicar post en el subreddit",
    relevance: 6,
    pitchType: "community-post",
    description: "Comunidad de emprendedores anglófona con tráfico alto.",
    keywords: ["automation ROI", "business processes", "n8n Make Zapier"],
    status: "PENDING",
    notes: "Publicar caso 1,850% ROI como 'Here's how a Spanish SMB automated 100+ invoices/month'.",
  },

  // ── TIER 3: Directorios y recursos locales ──────────────────────────────────
  {
    id: 13,
    name: "Barcelona Activa — Recursos Digitales",
    url: "https://www.barcelonactiva.cat",
    contactMethod: "https://www.barcelonactiva.cat/ca/contacte",
    relevance: 7,
    pitchType: "resource-mention",
    description: "Entidad pública Barcelona que promueve digitalización de pymes. Tienen directorio de proveedores.",
    keywords: ["digitalización Barcelona", "automatización pymes", "Barcelona Activa"],
    status: "PENDING",
    notes: "Solicitar inclusión en directorio de proveedores tecnológicos para pymes.",
  },
  {
    id: 14,
    name: "Blogs Tech Barcelona",
    url: "https://www.google.com/search?q=blog+tecnologia+barcelona+startups",
    contactMethod: "contacto directo en su web",
    relevance: 6,
    pitchType: "guest-post",
    description: "Blogs locales sobre startups y tecnología en Barcelona.",
    keywords: ["tecnología Barcelona", "startups Barcelona", "automatización"],
    status: "PENDING",
    notes: "Buscar 'blog tecnología barcelona' y contactar los 3 primeros con propuesta de guest post.",
  },
  {
    id: 15,
    name: "Product Hunt",
    url: "https://www.producthunt.com",
    contactMethod: "Crear cuenta y publicar RASTECH",
    relevance: 5,
    pitchType: "community-post",
    description: "Directorio de productos/servicios tech. Un lanzamiento puede generar tráfico y backlinks.",
    keywords: ["automation tool", "Barcelona", "n8n workflows"],
    status: "PENDING",
    notes: "Lanzar RASTECH como 'Automation service for Barcelona SMBs'. Requiere preparación de assets.",
  },
];

export function getTargetsByTier(): { tier1: OutreachTarget[]; tier2: OutreachTarget[]; tier3: OutreachTarget[] } {
  return {
    tier1: outreachTargets.filter((t) => t.relevance >= 9),
    tier2: outreachTargets.filter((t) => t.relevance >= 6 && t.relevance < 9),
    tier3: outreachTargets.filter((t) => t.relevance < 6),
  };
}

export function getPendingTargets(): OutreachTarget[] {
  return outreachTargets.filter((t) => t.status === "PENDING");
}
