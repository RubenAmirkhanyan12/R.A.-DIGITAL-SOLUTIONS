"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookies-accepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-[#141414] border border-white/10 shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-white/80 text-sm">
            Usamos cookies para mejorar tu experiencia.{" "}
            <a href="#" className="text-[#B8860B] hover:underline">
              Política de privacidad
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-white/40 hover:text-white/70 text-xs px-3 py-2 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="bg-[#B8860B] hover:bg-[#D4A017] text-white text-xs font-bold px-5 py-2 transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={decline}
            className="text-white/30 hover:text-white/60 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
