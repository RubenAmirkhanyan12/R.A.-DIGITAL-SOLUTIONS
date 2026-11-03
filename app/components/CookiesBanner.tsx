"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = "cookies-accepted";

type Choice = "true" | "false" | null;

function readChoice(): Choice {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "true" || value === "false" ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(value: "true" | "false") {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // sin almacenamiento, la decisión dura solo esta visita
  }
}

export default function CookiesBanner() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChoice(readChoice());
    setReady(true);
  }, []);

  if (!GA_ID) return null;

  const decide = (value: "true" | "false") => {
    saveChoice(value);
    setChoice(value);
  };

  const buttonCls =
    "border border-[#B8860B] text-white text-xs font-bold px-5 py-2 transition-colors hover:bg-[#B8860B]";

  return (
    <>
      {choice === "true" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {ready && choice === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
          <div className="max-w-3xl mx-auto bg-[#141414] border border-white/10 shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="flex-1 text-white/80 text-sm">
              Uso cookies de analítica (Google Analytics) para saber cómo se usa la web, solo si las aceptas.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button onClick={() => decide("false")} className={buttonCls}>
                Rechazar
              </button>
              <button onClick={() => decide("true")} className={buttonCls}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
