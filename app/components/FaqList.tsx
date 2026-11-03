import Link from "next/link";
import type { Faq } from "../lib/faqs";

function Answer({ a, link }: Faq) {
  if (!link || !a.includes(link.text)) return <>{a}</>;
  const [before, after] = a.split(link.text);
  return (
    <>
      {before}
      <Link href={link.href} className="text-[#B8860B] hover:underline">
        {link.text}
      </Link>
      {after}
    </>
  );
}

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="max-w-2xl">
      {faqs.map((faq, i) => (
        <div key={faq.q} className={`py-5 border-b border-white/6 ${i === 0 ? "border-t" : ""}`}>
          <h3 className="text-white font-semibold text-[15px] mb-2">{faq.q}</h3>
          <p className="text-white/55 text-[15px] leading-relaxed">
            <Answer {...faq} />
          </p>
        </div>
      ))}
    </div>
  );
}
