import Link from "next/link";
import type { Guide } from "../../lib/guides";

interface Props {
  guides: Guide[];
  hubLabel?: string;
}

export default function RelatedGuides({ guides, hubLabel }: Props) {
  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-8">
          Guías relacionadas
        </h2>
        <ul className="space-y-5">
          {guides.map(({ href, title, description }) => (
            <li key={href}>
              <Link href={href} className="text-[#B8860B] hover:underline font-semibold text-base">
                {title}
              </Link>
              <p className="text-white/50 text-sm mt-1">{description}</p>
            </li>
          ))}
        </ul>
        {hubLabel && (
          <Link href="/automatizar" className="inline-block mt-8 text-white/60 hover:text-[#B8860B] text-sm transition-colors">
            {hubLabel} →
          </Link>
        )}
      </div>
    </section>
  );
}
