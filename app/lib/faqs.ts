import { DELIVERY_WEEKS, formatEUR, OFFER, planById, processesInWords, SHARED_COPY } from "./site-config";

export interface Faq {
  q: string;
  a: string;
  // Fragmento de la respuesta que se convierte en enlace
  link?: { text: string; href: string };
}

const starter = planById("starter");

export const HUB_FAQS: Faq[] = [
  {
    q: "¿Cuánto cuesta automatizar un proceso?",
    a: `Desde ${formatEUR(starter.fromEUR)} para ${processesInWords(starter)} procesos, con el precio cerrado por escrito antes de empezar. Está todo en la página de precios.`,
    link: { text: "página de precios", href: "/precios" },
  },
  {
    q: "¿Cuánto se tarda?",
    a: `Entre ${DELIVERY_WEEKS.min} y ${DELIVERY_WEEKS.max} semanas, según el plan y el número de procesos.`,
  },
  {
    q: "¿Tengo que cambiar de herramientas o saber programar?",
    a: SHARED_COPY.tools,
  },
  {
    q: "¿Cuándo no compensa?",
    a: "Cuando la tarea se hace pocas veces al año, o cuando lo que te falta es un programa y no te sobran tareas a mano. Si es tu caso, te lo digo en la llamada.",
  },
  {
    q: "¿Qué pasa después de escribirte?",
    a: `Te respondo en ${OFFER.responseTime}. Hablamos ${OFFER.freeCallMinutes} minutos, sin compromiso, y si encaja recibes una propuesta con precio cerrado por escrito.`,
  },
];

export const OTROS_FAQS: Faq[] = [
  {
    q: "¿Mi sector encaja?",
    a: "Si en tu negocio hay tareas de oficina que se repiten igual cada semana, normalmente sí. En la llamada vemos tu caso y, si no compensa, te lo digo.",
  },
  {
    q: "¿Qué necesito para empezar?",
    a: "Saber qué tarea te quita más tiempo y tener acceso a los programas con los que la haces. Lo demás lo vemos juntos en la llamada.",
  },
  {
    q: "¿Qué pasa con los datos de mis clientes?",
    a: "Trabajo con tus datos conforme al RGPD: viajan cifrados (HTTPS) y se quedan en tus propias cuentas.",
  },
  { q: "¿Cuánto cuesta?", a: HUB_FAQS[0].a },
  { ...HUB_FAQS[1], q: "¿Cuánto tarda?" },
];

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
