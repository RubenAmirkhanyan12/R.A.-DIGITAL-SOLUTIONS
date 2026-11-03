import AnimateOnScroll from "./AnimateOnScroll";
import { REAL_REVIEWS } from "../lib/site-config";

export default function TestimonialsSection() {
  if (REAL_REVIEWS.length === 0) return null;

  return (
    <section className="bg-[#0F0F0F] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-white">
            Opiniones de clientes
          </h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-6">
          {REAL_REVIEWS.map((review) => (
            <figure key={`${review.author}-${review.company}`} className="bg-[#111111] border border-white/5 p-7">
              <blockquote className="text-white/70 text-sm leading-relaxed mb-5">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="text-white/40 text-xs">
                {review.author} · {review.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
