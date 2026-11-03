"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { CONSENT_ERROR, ConsentCheckbox, ConsentNotice } from "./Consent";
import { OFFER, SITE } from "../lib/site-config";
import { CONTACT_LIMITS, HOURS_OPTIONS, isValidContact, SECTOR_OPTIONS } from "../lib/contact";

type FormValues = {
  nombre: string;
  contacto: string;
  mensaje: string;
  empresa: string;
  horas: string;
  sector: string;
  consent: boolean;
};

interface Props {
  // En las landings el sector ya va elegido
  sector?: string;
}

const inputCls =
  "w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/60 text-white placeholder-white/20 px-4 py-3 text-sm outline-none transition-colors";
const selectCls =
  "w-full bg-[#141414] border border-white/10 focus:border-[#B8860B]/60 text-white/80 px-4 py-3 text-sm outline-none transition-colors cursor-pointer";
const labelCls = "block text-white/55 text-xs uppercase tracking-wider mb-1.5";

function FieldError({ message }: { message?: string }) {
  return message ? (
    <p role="alert" className="text-[#EF4444] text-xs mt-1">
      {message}
    </p>
  ) : null;
}

export default function ContactForm({ sector }: Props) {
  const id = sector ?? "home";
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setSendError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, sector: sector ?? (data.sector || "home") }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
    } catch {
      setSendError(true);
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center justify-center py-14 text-center">
        <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-5">
          <CheckCircle size={28} className="text-[#10B981]" />
        </div>
        <p className="text-white text-lg font-semibold">Recibido. Te respondo en {OFFER.responseTime}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor={`${id}-nombre`} className={labelCls}>
          Tu nombre *
        </label>
        <input
          id={`${id}-nombre`}
          {...register("nombre", { required: "Escribe tu nombre", validate: (v) => v.trim() !== "" || "Escribe tu nombre" })}
          maxLength={CONTACT_LIMITS.nombre}
          autoComplete="name"
          placeholder="Tu nombre"
          className={inputCls}
        />
        <FieldError message={errors.nombre?.message} />
      </div>

      <div>
        <label htmlFor={`${id}-contacto`} className={labelCls}>
          Correo o teléfono *
        </label>
        <input
          id={`${id}-contacto`}
          {...register("contacto", {
            required: "Escribe un correo o un teléfono",
            validate: (v) => isValidContact(v) || "Escribe un correo válido o un teléfono de 9 cifras",
          })}
          maxLength={CONTACT_LIMITS.contacto}
          placeholder="tu@empresa.com o 600 000 000"
          className={inputCls}
        />
        <FieldError message={errors.contacto?.message} />
      </div>

      <div>
        <label htmlFor={`${id}-mensaje`} className={labelCls}>
          ¿Qué quieres automatizar? *
        </label>
        <textarea
          id={`${id}-mensaje`}
          {...register("mensaje", {
            required: "Cuéntame en una frase qué quieres automatizar",
            validate: (v) => v.trim() !== "" || "Cuéntame en una frase qué quieres automatizar",
          })}
          maxLength={CONTACT_LIMITS.mensaje}
          rows={3}
          placeholder="Por ejemplo: paso las facturas a mano cada semana"
          className={`${inputCls} resize-none`}
        />
        <FieldError message={errors.mensaje?.message} />
      </div>

      <details className="group border border-white/10 px-4 py-3">
        <summary className="cursor-pointer list-none text-white/55 text-sm flex items-center justify-between">
          Añadir más detalles (opcional)
          <span className="text-white/40 group-open:text-[#B8860B]">+</span>
        </summary>
        <div className="space-y-4 pt-4">
          <div>
            <label htmlFor={`${id}-empresa`} className={labelCls}>
              Empresa
            </label>
            <input
              id={`${id}-empresa`}
              {...register("empresa")}
              maxLength={CONTACT_LIMITS.extra}
              autoComplete="organization"
              placeholder="Nombre de tu negocio"
              className={inputCls}
            />
          </div>
          {!sector && (
            <div>
              <label htmlFor={`${id}-sector`} className={labelCls}>
                Sector
              </label>
              <select id={`${id}-sector`} {...register("sector")} className={selectCls}>
                <option value="">Elige tu sector</option>
                {SECTOR_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label htmlFor={`${id}-horas`} className={labelCls}>
              Horas por semana en tareas manuales
            </label>
            <select id={`${id}-horas`} {...register("horas")} className={selectCls}>
              <option value="">Elige un rango</option>
              {HOURS_OPTIONS.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
        </div>
      </details>

      <ConsentCheckbox
        id={`consent-${id}`}
        error={errors.consent?.message}
        {...register("consent", { required: CONSENT_ERROR })}
      />

      {sendError && (
        <p role="alert" className="text-[#EF4444] text-xs">
          No se ha podido enviar. Escríbeme a {SITE.email} o llama al {SITE.phone}.
        </p>
      )}

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
        {isSubmitting ? "Enviando..." : "Reserva tu llamada"}
      </button>

      <ConsentNotice />
    </form>
  );
}
