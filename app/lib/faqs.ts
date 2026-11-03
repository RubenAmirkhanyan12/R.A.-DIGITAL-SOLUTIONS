import { DELIVERY_WEEKS, formatEUR, OFFER, planById, SHARED_COPY } from "./site-config";

export interface Faq {
  q: string;
  a: string;
  // Fragmento de la respuesta que se convierte en enlace
  link?: { text: string; href: string };
}

const NUMBER_WORDS = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis"];
const inWords = (range: string) => range.split("-").map((n) => NUMBER_WORDS[Number(n)] ?? n).join(" o ");

const starter = planById("starter");

export const HUB_FAQS: Faq[] = [
  {
    q: "¿Cuánto cuesta automatizar un proceso?",
    a: `Desde ${formatEUR(starter.fromEUR)} para ${inWords(starter.processes)} procesos, con el precio cerrado por escrito antes de empezar. Está todo en la página de precios.`,
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
