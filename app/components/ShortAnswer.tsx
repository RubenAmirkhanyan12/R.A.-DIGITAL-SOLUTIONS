export default function ShortAnswer({ text }: { text: string }) {
  return (
    <aside aria-label="Respuesta corta" className="border-l-2 border-[#B8860B]/60 bg-white/[0.03] px-5 py-4 mb-8 max-w-2xl">
      <p className="text-[#B8860B]/80 text-xs font-bold tracking-widest uppercase mb-2">Respuesta corta</p>
      <p className="text-white/80 text-base leading-relaxed">{text}</p>
    </aside>
  );
}
