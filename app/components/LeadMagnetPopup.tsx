"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Download, CheckCircle } from "lucide-react";

const STORAGE_KEY = "rastech_lm_until";
const SUPPRESS_DAYS = 30;

function isDismissed(): boolean {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return !!val && Date.now() < Number(val);
  } catch {
    return false;
  }
}

function setDismissed(): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      String(Date.now() + SUPPRESS_DAYS * 24 * 60 * 60 * 1000)
    );
  } catch {
    // storage unavailable — fine
  }
}

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const open = useCallback(() => {
    if (!isDismissed()) setIsOpen(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(open, 30_000);

    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0 && window.scrollY / total >= 0.5) {
        open();
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const dismiss = () => {
    setIsOpen(false);
    setDismissed();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
      setError("Introduce un email válido.");
      return;
    }
    setLoading(true);
    setError("");

    // Trigger PDF download
    const a = document.createElement("a");
    a.href = "/lead-magnet/rastech-checklist-automatizacion.pdf";
    a.download = "rastech-checklist-automatizacion.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSubmitted(true);
    setLoading(false);
    setDismissed();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lm-title"
        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
      >
        <div className="relative bg-[#141414] border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl">
          <button
            onClick={dismiss}
            aria-label="Cerrar popup"
            className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors p-1"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <>
              <div className="text-center mb-7">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/25 mb-4">
                  <Download size={20} className="text-[#B8860B]" />
                </div>
                <h2
                  id="lm-title"
                  className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2"
                >
                  ¿Cuánto podrías ahorrar?
                </h2>
                <p className="text-white/55 text-sm leading-relaxed">
                  Descarga gratis el{" "}
                  <strong className="text-white">
                    Checklist: 7 Pasos Para Automatizar Tu Empresa
                  </strong>{" "}
                  (PDF · validado en 20+ empresas Barcelona).
                </p>
              </div>

              <div className="flex items-center gap-3 bg-[#1A3A52]/30 border border-[#1A3A52]/50 rounded-xl px-4 py-3 mb-6">
                <CheckCircle size={14} className="text-[#10B981] shrink-0" />
                <p className="text-white/50 text-xs leading-snug">
                  Ahorro medio documentado:{" "}
                  <strong className="text-[#B8860B]">€51,840/año</strong> ·{" "}
                  <strong className="text-white">20+ empresas</strong>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="tucorreo@empresa.com"
                  required
                  className="w-full bg-white/5 border border-white/10 focus:border-[#B8860B]/50 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm outline-none transition-colors"
                />
                {error && (
                  <p role="alert" className="text-red-400 text-xs pl-1">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] disabled:opacity-60 text-[#0F0F0F] font-bold text-sm tracking-wide py-3.5 rounded-xl transition-colors"
                >
                  <Download size={14} />
                  {loading ? "Preparando…" : "Descargar PDF Gratis"}
                </button>
              </form>

              <p className="text-white/25 text-xs text-center mt-4">
                Sin spam. Solo el checklist.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 mb-5">
                <CheckCircle size={30} className="text-[#10B981]" />
              </div>
              <h2
                id="lm-title"
                className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2"
              >
                ¡Descargando!
              </h2>
              <p className="text-white/55 text-sm mb-6 leading-relaxed">
                Tu checklist se está descargando.{" "}
                <a
                  href="/lead-magnet/rastech-checklist-automatizacion.pdf"
                  download
                  className="text-[#B8860B] hover:underline"
                >
                  Click aquí
                </a>{" "}
                si no empieza automáticamente.
              </p>
              <button
                onClick={dismiss}
                className="text-white/35 hover:text-white text-sm transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
