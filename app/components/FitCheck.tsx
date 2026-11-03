import { Check, X } from "lucide-react";

interface Props {
  yes: string[];
  no: string[];
}

function Column({ title, items, ok }: { title: string; items: string[]; ok: boolean }) {
  const Icon = ok ? Check : X;
  return (
    <div className={`min-w-0 border p-6 ${ok ? "border-[#10B981]/25 bg-[#10B981]/5" : "border-white/10 bg-white/[0.02]"}`}>
      <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-4">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-white/65 text-[15px] leading-relaxed">
            <Icon size={16} className={`shrink-0 mt-1 ${ok ? "text-[#10B981]" : "text-white/35"}`} />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FitCheck({ yes, no }: Props) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-6">
        <Column title="Para ti si…" items={yes} ok />
        <Column title="No es para ti si…" items={no} ok={false} />
      </div>
    </section>
  );
}
