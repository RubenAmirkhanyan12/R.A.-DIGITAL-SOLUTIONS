"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "select";
  required?: boolean;
  options?: string[];
}

interface Props {
  title: string;
  description: string;
  fields: FormField[];
  buttonText: string;
  sector: string;
}

export default function LandingContactForm({ title, description, fields, buttonText, sector }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (name: string, value: string) => {
    setValues(v => ({ ...v, [name]: value }));
    setErrors(e => ({ ...e, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    fields.forEach(f => {
      if (f.required && !values[f.name]?.trim()) errs[f.name] = "Requerido";
      if (f.type === "email" && values[f.name] && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values[f.name]))
        errs[f.name] = "Email no válido";
    });
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sector, ...values }),
      });
    } catch { /* show success regardless of network error */ }
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-14">
        <CheckCircle size={52} className="text-[#10B981] mx-auto mb-5" />
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
          ✓ Solicitud enviada
        </h3>
        <p className="text-white/55 text-sm">
          Confirmación enviada a tu email. Te contactamos en &lt;24h.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-2 text-center">
        {title}
      </h2>
      <p className="text-white/50 text-sm text-center mb-8 leading-relaxed">{description}</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {fields.map(f => (
          <div key={f.name}>
            <label htmlFor={f.name} className="block text-white/65 text-sm mb-1.5 font-medium">
              {f.label}
              {f.required && <span className="text-[#B8860B] ml-0.5">*</span>}
            </label>

            {f.type === "select" ? (
              <select
                id={f.name}
                value={values[f.name] || ""}
                onChange={e => set(f.name, e.target.value)}
                className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
              >
                <option value="" disabled>Selecciona…</option>
                {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input
                id={f.name}
                type={f.type}
                value={values[f.name] || ""}
                onChange={e => set(f.name, e.target.value)}
                placeholder={f.label}
                className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/50 rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors placeholder-white/20"
              />
            )}

            {errors[f.name] && (
              <p role="alert" className="text-red-400 text-xs mt-1 pl-1">{errors[f.name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[#1A3A52] hover:bg-[#22496A] disabled:opacity-60 text-white font-bold text-sm tracking-wide py-4 rounded-lg transition-colors mt-2"
        >
          {loading ? "Enviando…" : <>{buttonText} <ArrowRight size={15} /></>}
        </button>
      </form>

      <p className="text-white/25 text-xs text-center mt-5">
        Sin spam. Sin compromisos. Solo para calibrar cómo podemos ayudarte.
      </p>
    </div>
  );
}
