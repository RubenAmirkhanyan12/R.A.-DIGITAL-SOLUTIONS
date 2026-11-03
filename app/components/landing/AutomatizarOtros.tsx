import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LandingContactForm, { type FormField } from "./LandingContactForm";
import RelatedGuides from "./RelatedGuides";
import { GUIDES } from "../../lib/guides";
import { OFFER } from "../../lib/site-config";
import { Search, Phone, FileText } from "lucide-react";

const formFields: FormField[] = [
  { name: "nombre", label: "Tu nombre", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "empresa", label: "Nombre de tu empresa", type: "text", required: true },
  { name: "industria", label: "Sector / Industria (ej: Abogacía, Veterinaria, Gym…)", type: "text", required: true },
  {
    name: "procesos",
    label: "¿Qué procesos quieres automatizar?",
    type: "textarea",
    required: true,
  },
  { name: "telefono", label: "Teléfono (opcional)", type: "text" },
];

const steps = [
  {
    icon: <Search size={24} className="text-[#B8860B]" />,
    title: "Leo tu caso",
    desc: "Reviso tu solicitud antes de hablar contigo.",
  },
  {
    icon: <Phone size={24} className="text-[#B8860B]" />,
    title: "Te llamo",
    desc: "Hablamos para entender tus procesos.",
  },
  {
    icon: <FileText size={24} className="text-[#B8860B]" />,
    title: "Propuesta",
    desc: "Te envío una propuesta con precio cerrado.",
  },
];

const method = [
  {
    title: "Analizo",
    desc: "Mapeo contigo qué haces, cuánto tiempo te lleva y cuánto te cuesta, sin suposiciones.",
  },
  {
    title: "Diseño",
    desc: "Con ese mapa diseño los flujos para tu negocio, integrados con lo que ya usas, como Gmail, WhatsApp Business, Google Sheets o tu programa de gestión, sin cambiar tus herramientas.",
  },
  {
    title: "Pruebo",
    desc: "Antes de activar nada, simulo los escenarios normales y los problemáticos: documentos con errores, emails que rebotan o clientes que no responden.",
  },
  {
    title: "Implemento",
    desc: "Activo los procesos uno por uno mientras tu negocio sigue funcionando, y enseño a tu equipo a manejarlos.",
  },
  {
    title: "Optimizo",
    desc: "Con los primeros datos reales reviso qué tarda más y dónde hay cuellos de botella, y voy afinando el sistema.",
  },
];

const businessExamples = [
  {
    title: "Despachos y asesorías",
    intro: "Aquí el trabajo repetitivo suele estar en pedir documentos y recordar fechas a cada cliente.",
    items: [
      "Avisos de vencimientos y de documentación pendiente",
      "Recogida de facturas por email y archivo en la carpeta de cada cliente",
      "Alta de clientes nuevos: ficha, carpeta y correo de bienvenida",
      "Aviso al cliente cuando cambia el estado de su expediente",
    ],
  },
  {
    title: "Clínicas",
    intro: "La agenda concentra casi todo el trabajo manual. Con datos de salud, reviso contigo qué información pasa por cada herramienta antes de conectar nada.",
    items: [
      "Recordatorios de cita por email o mensaje",
      "Envío de formularios previos a la primera visita",
      "Aviso a la lista de espera cuando se libera un hueco",
      "Recordatorio de revisiones periódicas",
    ],
  },
  {
    title: "Gimnasios",
    intro: "Cada socio que entra o se va genera varias tareas en sitios distintos.",
    items: [
      "Altas y bajas de socios en todas las herramientas a la vez",
      "Avisos de cuotas pendientes",
      "Recordatorios de clases y reservas",
      "Mensaje a los socios que llevan tiempo sin venir",
    ],
  },
  {
    title: "Academias",
    intro: "El punto delicado es que ninguna persona interesada se quede sin respuesta.",
    items: [
      "Seguimiento de matrículas, desde la primera consulta hasta el alta",
      "Recordatorios de pago de mensualidades",
      "Avisos de inicio de curso y cambios de horario",
      "Envío de certificados al terminar",
    ],
  },
];

export default function AutomatizarOtros() {
  return (
    <>
      <div className="min-h-screen bg-[#0F0F0F]">
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] pt-36 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#B8860B]" />
              <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
                Propuesta Personalizada · RASTECH
              </span>
              <span className="w-8 h-px bg-[#B8860B]" />
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
              Automatización personalizada de procesos de negocio en Barcelona
            </h1>

            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto">
              Esta página es para negocios que no encajan en restaurantes, e-commerce o agencias.
              Ofrezco servicios de automatización de procesos de negocio a medida: primero
              entiendo cómo trabajas y después conecto las herramientas que ya usas.
            </p>
          </div>
        </section>

        {/* ── QUÉ HACE ── */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-6">
              Qué hace una empresa de automatización de procesos de negocio
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Conecta las aplicaciones de tu negocio para que las tareas repetitivas se hagan
              solas: pasar datos de un sitio a otro, enviar avisos, generar documentos o preparar
              informes. En RASTECH lo hago yo con n8n y Make, y trabajo en cinco pasos.
            </p>
            <ol className="space-y-4 my-8">
              {method.map(({ title, desc }, i) => (
                <li key={title} className="flex gap-4">
                  <span className="text-[#B8860B] font-bold text-sm mt-0.5 shrink-0">{i + 1}.</span>
                  <p className="text-white/60 text-base leading-relaxed">
                    <strong className="text-white">{title}.</strong> {desc}
                  </p>
                </li>
              ))}
            </ol>
            <p className="text-white/60 text-base leading-relaxed">
              No todo merece automatizarse. Si una tarea cambia cada vez o depende de tu criterio,
              te lo diré antes de empezar. Puedes revisar los{" "}
              <Link href="/precios" className="text-[#B8860B] hover:underline">
                precios de automatización de procesos
              </Link>{" "}
              o ver cómo se aplica en otros sectores en la página de{" "}
              <Link href="/automatizar" className="text-[#B8860B] hover:underline">
                automatización de procesos en Barcelona
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── EJEMPLOS ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
              Ejemplos por tipo de negocio
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              Cada bloque es un ejemplo ilustrativo de procesos habituales en ese tipo de negocio,
              no un caso de cliente.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {businessExamples.map(({ title, intro, items }) => (
                <div key={title} className="bg-[#111111] border border-white/5 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{intro}</p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2 text-white/60 text-sm leading-relaxed">
                        <span className="text-[#B8860B] shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUÉ PASA DESPUÉS ── */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-12 text-center">
              ¿Qué pasa después?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {steps.map(({ icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="inline-flex items-center justify-center bg-[#1A3A52]/30 border border-[#1A3A52]/60 w-14 h-14 mb-5">
                    {icon}
                  </div>
                  <h3 className="text-white font-bold text-[15px] mb-2">{title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1A3A52]/15 border border-[#1A3A52]/50 p-8 text-center">
              <p className="text-white/70 text-[15px] leading-relaxed">
                <span className="text-[#B8860B] font-bold">Cada empresa es diferente.</span>{" "}
                {OFFER.noHiddenCosts}
              </p>
            </div>
          </div>
        </section>

        <RelatedGuides guides={[GUIDES.facturas, GUIDES.cobros, GUIDES.n8n]} />

        {/* ── FORM ── */}
        <section className="py-20 bg-gradient-to-br from-[#1A3A52]/20 to-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <LandingContactForm
              title="Cuéntame tu caso"
              description={`Cuéntame tu sector y tus procesos. Te respondo en ${OFFER.responseTime}.`}
              fields={formFields}
              buttonText="Reserva tu llamada"
              sector="otros"
            />
          </div>
        </section>

        <Footer hubLabel="Ver todos los sectores" />
      </div>
    </>
  );
}
