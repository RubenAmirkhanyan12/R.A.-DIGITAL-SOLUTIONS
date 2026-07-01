import Navbar from "../Navbar";
import Footer from "../Footer";
import LandingContactForm, { type FormField } from "./LandingContactForm";
import { Search, Phone, FileText } from "lucide-react";

const formFields: FormField[] = [
  { name: "nombre", label: "Tu nombre", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "empresa", label: "Nombre de tu empresa", type: "text", required: true },
  { name: "sector", label: "Sector / Industria (ej: Abogacía, Veterinaria, Gym…)", type: "text", required: true },
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
    title: "Analizamos",
    desc: "Leemos tu solicitud y analizamos tu empresa en detalle.",
  },
  {
    icon: <Phone size={24} className="text-[#B8860B]" />,
    title: "Te Contactamos",
    desc: "Te llamamos para entender mejor tus necesidades y procesos.",
  },
  {
    icon: <FileText size={24} className="text-[#B8860B]" />,
    title: "Propuesta",
    desc: "Te enviamos propuesta personalizada con presupuesto cerrado.",
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
              Cuéntanos Tu Empresa
            </h1>

            <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
              ¿Tu sector no está en nuestras opciones? Describe exactamente qué necesitas automatizar. Te enviamos propuesta personalizada.
            </p>
          </div>
        </section>

        {/* ── FORM ── */}
        <section className="py-20 bg-gradient-to-br from-[#1A3A52]/20 to-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <LandingContactForm
              title="Tu Propuesta Personalizada"
              description="Cuéntanos tu sector y procesos. Te respondemos en 24-48 horas con un análisis concreto."
              fields={formFields}
              buttonText="Enviar Mi Información"
              sector="otros"
            />
          </div>
        </section>

        {/* ── QUÉ PASA DESPUÉS ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-12 text-center">
              ¿Qué Pasa Después?
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
                <span className="text-[#B8860B] font-bold">Presupuesto flexible.</span>{" "}
                Cada empresa es diferente. Hablamos, analizamos y llegamos a un acuerdo que sea justo para ambos.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
