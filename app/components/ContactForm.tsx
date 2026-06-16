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
  message: string;
};

const services = [
  "Transformación Digital",
  "Web de Conversión",
  "Automatización de Procesos",
  "App Personalizada",
  "No lo tengo claro todavía",
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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-[#B8860B]" />
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
          ¡Mensaje recibido!
        </h3>
        <p className="text-white/60 max-w-sm">
          Te contactaré en menos de 24 horas para agendar tu auditoría
          gratuita. Revisa tu bandeja de entrada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">
            Tu Nombre *
          </label>
          <input
            {...register("name", { required: "Campo obligatorio" })}
            placeholder="Juan García"
            className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-[#8B0000] text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">
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
          <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">
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
            placeholder="juan@empresa.com"
            className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-[#8B0000] text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">
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
        <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">
          ¿Qué necesitas? *
        </label>
        <select
          {...register("service", { required: "Selecciona una opción" })}
          className="w-full bg-[#141414] border border-white/10 focus:border-[#B8860B]/60 text-white/80 px-4 py-3 text-sm outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="">Selecciona un servicio</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-[#8B0000] text-xs mt-1">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">
          Cuéntame tu situación
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Describe brevemente tu empresa, el problema principal que quieres resolver y cualquier contexto relevante..."
          className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 bg-[#B8860B] hover:bg-[#D4A017] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(184,134,11,0.3)] active:scale-[0.99]"
      >
        {isSubmitting ? (
          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {isSubmitting ? "Enviando..." : "Agendar Auditoría Gratuita"}
      </button>

      <p className="text-white/25 text-xs text-center">
        Respondo en menos de 24 horas. Sin spam, sin compromisos.
      </p>
    </form>
  );
}
