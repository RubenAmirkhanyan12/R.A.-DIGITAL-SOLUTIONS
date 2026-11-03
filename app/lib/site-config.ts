export interface RealCase {
  sector: string;
  company: string;
  summary: string;
}

export interface Review {
  author: string;
  company: string;
  quote: string;
}

export const SITE = {
  name: "RASTECH",
  url: "https://www.ras-tech.es",
  city: "Barcelona",
  owner: "Rubén Amirkhanyan",
  credential: "Estudiante de Informática en la UPC",
  phone: "+34 613 361 175",
  phoneHref: "tel:+34613361175",
  email: "rubenamirkhanyan12@gmail.com",
};

export const OWNER_INTRO =
  "Soy Rubén, estudio Informática en la UPC y automatizo procesos con n8n y Make para pymes de Barcelona. Estoy empezando, por eso cuido cada proyecto de principio a fin.";

export const OFFER = {
  freeCallMinutes: 30,
  responseTime: "24 horas laborables",
  trainingHours: 1,
  guaranteeDays: 60,
  guarantee:
    "Si a los 60 días el sistema no hace lo acordado en la propuesta, lo corrijo sin coste; y si no lo consigo, te devuelvo el importe del proyecto.",
  payment: "Pago único por proyecto, fraccionable en dos pagos (mitad al empezar, mitad al entregar).",
  noHiddenCosts: "Todo lo que no esté en la propuesta se presupuesta por escrito antes de hacerlo.",
};

export type Plan = {
  id: string;
  name: string;
  fromEUR: number;
  processes: string;
  weeks: string;
  support: string;
  recommended?: boolean;
};

export const PLANS: Plan[] = [
  { id: "starter", name: "STARTER", fromEUR: 700, processes: "1-2", weeks: "2", support: "Soporte 30 días" },
  {
    id: "growth",
    name: "GROWTH",
    fromEUR: 1150,
    processes: "3-5",
    weeks: "2-3",
    support: "Soporte 60 días + revisión de optimización en el mes 1",
    recommended: true,
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    fromEUR: 1650,
    processes: "6+",
    weeks: "3-4",
    support: "Retainer mensual opcional (se presupuesta aparte)",
  },
];

// Estimación, no garantía
export const ASSUMPTIONS = { hourlyCostEUR: 25, weeksPerMonth: 4.33, reductionPct: 85 };

// Solo casos con permiso escrito del cliente y datos demostrables
export const REAL_CASES: RealCase[] = [];
export const REAL_REVIEWS: Review[] = [];

export const SCENARIOS = [
  {
    id: "restaurante",
    sector: "Restaurante",
    title: "Facturas, reservas y pedidos a proveedores",
    problem:
      "Las reservas entran por teléfono, correo y web, los pedidos a proveedores salen de una libreta y las facturas se preparan a mano al cerrar.",
    automated: [
      "Reservas de todos los canales en un solo calendario",
      "Pedido al proveedor cuando el stock baja del mínimo",
      "Factura y envío a partir de la venta",
      "Resumen diario de caja",
    ],
    hoursPerWeek: 8,
    planId: "growth",
    ctaLabel: "Ver automatización para restaurantes",
    ctaHref: "/automatizar-restaurantes",
  },
  {
    id: "ecommerce",
    sector: "Tienda online",
    title: "Pedidos, stock y devoluciones",
    problem:
      "Cada pedido se copia a la hoja de almacén, el stock no coincide entre canales y las devoluciones se llevan a mano.",
    automated: [
      "Pedido pagado enviado a almacén o logística",
      "Stock ajustado en los demás canales",
      "Factura creada al cobrar",
      "Registro de devoluciones con aviso al cliente",
    ],
    hoursPerWeek: 10,
    planId: "growth",
    ctaLabel: "Ver automatización para e-commerce",
    ctaHref: "/automatizar-ecommerce",
  },
  {
    id: "agencia",
    sector: "Agencia de marketing",
    title: "Reportes, facturas recurrentes e hitos",
    problem:
      "Cada informe mensual exige entrar en varias plataformas, copiar datos a una plantilla y revisar que no se cuele nada de otro cliente.",
    automated: [
      "Informe por cliente con datos de Analytics y anuncios",
      "Revisión del responsable antes de enviarlo",
      "Facturas recurrentes",
      "Avisos de hitos y entregas",
    ],
    hoursPerWeek: 12,
    planId: "growth",
    ctaLabel: "Ver automatización para agencias",
    ctaHref: "/automatizar-agencias",
  },
  {
    id: "despacho",
    sector: "Despacho o asesoría",
    title: "Expedientes, plazos y documentos",
    problem:
      "Los documentos llegan por correo, hay que archivarlos a mano y los plazos dependen de una hoja que alguien debe mirar cada día.",
    automated: [
      "Carpeta y ficha al abrir un expediente",
      "Avisos escalonados de vencimientos",
      "Archivo de documentos por cliente",
      "Aviso al cliente cuando cambia el estado",
    ],
    hoursPerWeek: 9,
    planId: "starter",
    ctaLabel: "Ver automatización a medida",
    ctaHref: "/automatizar-otros",
  },
  {
    id: "servicios",
    sector: "Empresa de servicios",
    title: "Altas de clientes, cobros e informes",
    problem:
      "Cada cliente nuevo genera las mismas tareas en varias aplicaciones, y los cobros y los informes dependen de que alguien se acuerde.",
    automated: [
      "Alta de cliente en todas las herramientas",
      "Facturación recurrente",
      "Recordatorios de cobro escalonados",
      "Informe mensual generado y enviado",
    ],
    hoursPerWeek: 15,
    planId: "enterprise",
    ctaLabel: "Ver automatización a medida",
    ctaHref: "/automatizar-otros",
  },
];

// Horas semanales del ejemplo de la home: la suma da el coste de no automatizar
export const PROCESS_HOURS = { facturacion: 4, emails: 5, reportes: 2, cobros: 2, seguimiento: 2 };

export function formatEUR(amount: number): string {
  const digits = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${digits} €`;
}

export function monthlySaving(hoursPerWeek: number): number {
  return Math.round(hoursPerWeek * ASSUMPTIONS.weeksPerMonth * ASSUMPTIONS.hourlyCostEUR);
}

export function roiNet(ahorroAnual: number, inversion: number): number {
  return Math.round(((ahorroAnual - inversion) / inversion) * 100);
}

export function paybackDays(inversion: number, ahorroMes: number): number {
  return Math.ceil(inversion / (ahorroMes / 30));
}

export function planById(id: string): Plan {
  const plan = PLANS.find((p) => p.id === id);
  if (!plan) throw new Error(`Plan desconocido: ${id}`);
  return plan;
}

export function scenarioNumbers(scenario: { hoursPerWeek: number; planId: string }) {
  const plan = planById(scenario.planId);
  const saving = monthlySaving(scenario.hoursPerWeek);
  return { plan, saving, payback: paybackDays(plan.fromEUR, saving) };
}
