import { OFFER } from "../lib/site-config";

const steps = [
  `Te respondo en ${OFFER.responseTime}.`,
  `Hablamos ${OFFER.freeCallMinutes} minutos, sin compromiso.`,
  "Si encaja, recibes una propuesta con precio cerrado por escrito.",
];

export default function NextSteps({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#111111] border border-white/5 p-6 ${className}`}>
      <h3 className="text-white font-bold text-base mb-4">Qué pasa cuando me escribes</h3>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
            <span className="shrink-0 w-6 h-6 rounded-full border border-[#B8860B]/40 text-[#B8860B] text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <span className="min-w-0">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
