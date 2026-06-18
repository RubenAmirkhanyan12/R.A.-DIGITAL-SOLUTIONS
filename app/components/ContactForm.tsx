"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  hours: string;
  message: string;
};

const services = [
  "Facturación automática",
  "Emails y seguimiento de clientes",
  "Reportes y dashboards",
  "Gestión de cobros y pagos",
  "Sistema completo (varios procesos)",
  "No sé por dónde empezar",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-5">
          <CheckCircle size={28} className="text-[#10B981]" />
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
          ¡Análisis agendado!
        </h3>
        <p className="text-white/55 text-sm max-w-sm leading-relaxed">
          Te contactaré en menos de 24 horas para confirmar la videollamada
          de análisis gratuita. Revisa tu email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">
            Tu nombre *
          </label>
          <input
            {...register("name", { required: "Campo obligatorio" })}
            placeholder="Javier García"
            className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-[#EF4444] text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">
            Empresa
          </label>
          <input
            {...register("company")}
            placeholder="Mi Empresa S.L."
            className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">
            Email *
          </label>
          <input
            {...register("email", {
              required: "Campo obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
            type="email"
            placeholder="javier@empresa.com"
            className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-[#EF4444] text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">
            Teléfono
          </label>
          <input
            {...register("phone")}
            placeholder="+34 600 000 000"
            className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">
          ¿Qué proceso quieres automatizar? *
        </label>
        <select
          {...register("service", { required: "Selecciona una opción" })}
          className="w-full bg-[#141414] border border-white/10 focus:border-[#B8860B]/60 text-white/80 px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="">Selecciona un proceso</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-[#EF4444] text-xs mt-1">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">
          ¿Cuántas horas/semana en tareas manuales?
        </label>
        <select
          {...register("hours")}
          className="w-full bg-[#141414] border border-white/10 focus:border-[#B8860B]/60 text-white/80 px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="">Selecciona rango</option>
          <option value="<10">Menos de 10h/semana</option>
          <option value="10-20">10-20h/semana</option>
          <option value="20-40">20-40h/semana</option>
          <option value="40-60">40-60h/semana</option>
          <option value=">60">Más de 60h/semana</option>
        </select>
      </div>

      <div>
        <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">
          Cuéntame tu situación
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="¿Qué tarea te roba más tiempo? ¿Cuántas personas involucradas? ¿Qué herramientas usas?"
          className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 bg-[#B8860B] hover:bg-[#9A7009] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(184,134,11,0.3)] active:scale-[0.99]"
      >
        {isSubmitting ? (
          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Send size={14} />
        )}
        {isSubmitting ? "Enviando..." : "Agendar Análisis Gratuito"}
      </button>

      <p className="text-white/20 text-xs text-center">
        Respondo en menos de 24h · Sin spam · Sin compromisos
      </p>
    </form>
  );
}
