import type { Metadata } from "next";
import Link from "next/link";
import { getAllPublishedPosts, formatDate } from "../lib/blog-posts";
import { Clock, Calendar, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | RASTECH · Automatización de Procesos Barcelona",
  description:
    "Guías prácticas sobre automatización de procesos para empresas en Barcelona. Casos reales, ROI calculado, herramientas sin código.",
  openGraph: {
    title: "Blog RASTECH | Automatización de Procesos Barcelona",
    description:
      "Guías prácticas sobre automatización de procesos para empresas en Barcelona.",
    type: "website",
    locale: "es_ES",
  },
};

export default function BlogPage() {
  const posts = getAllPublishedPosts();

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#B8860B]/5 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#B8860B]" />
            <span className="text-[#B8860B] text-xs font-bold tracking-[0.25em] uppercase">
              Recursos RASTECH
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Blog de Automatización
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Guías prácticas sobre automatización de procesos para empresas en Barcelona.
            Casos reales, ROI calculado, sin teoría vacía.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-white/40">
            <p className="text-lg">No hay posts publicados todavía.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="group bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 transition-all duration-300 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="grid md:grid-cols-[1fr_auto] gap-0">
                    <div className="p-8 md:p-10">
                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-[#B8860B] text-xs font-bold tracking-widest uppercase">
                          <Tag size={10} />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/30 text-xs">
                          <Calendar size={11} />
                          {formatDate(post.publishDate)}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/30 text-xs">
                          <Clock size={11} />
                          {post.readTime} min lectura
                        </span>
                        {post.featured && (
                          <span className="text-xs font-bold bg-[#B8860B]/15 border border-[#B8860B]/30 text-[#B8860B] px-2 py-0.5">
                            Destacado
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white group-hover:text-[#B8860B] transition-colors leading-snug mb-3">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-white/55 text-base leading-relaxed mb-5 max-w-2xl">
                        {post.description}
                      </p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {post.keywords.slice(0, 4).map((kw) => (
                          <span
                            key={kw}
                            className="text-xs text-white/30 bg-white/[0.04] border border-white/8 px-2.5 py-1"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        <div className="w-8 h-8 rounded-full bg-[#1A3A52] border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] font-bold text-xs shrink-0">
                          RA
                        </div>
                        <div>
                          <p className="text-white/70 text-sm font-medium">{post.author.name}</p>
                          <p className="text-white/30 text-xs">{post.author.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA panel */}
                    <div className="hidden md:flex flex-col items-center justify-center p-10 bg-[#1A3A52]/10 border-l border-white/5 group-hover:bg-[#1A3A52]/20 transition-colors min-w-[140px]">
                      <ArrowRight
                        size={24}
                        className="text-white/20 group-hover:text-[#B8860B] group-hover:translate-x-1 transition-all"
                      />
                      <p className="text-white/25 text-xs mt-3 text-center group-hover:text-white/50 transition-colors">
                        Leer artículo
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter / CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#1A3A52]/30 to-[#1A3A52]/10 border border-[#1A3A52]/50 p-10 text-center">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
            ¿Listo para automatizar tu empresa?
          </h3>
          <p className="text-white/50 text-base mb-6 max-w-xl mx-auto">
            Análisis gratuito de 30 minutos. Calculamos exactamente cuánto puedes
            ahorrar con tu empresa específica.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-sm tracking-wide px-8 py-4 transition-all hover:shadow-[0_0_25px_rgba(184,134,11,0.35)]"
          >
            Agendar análisis gratuito
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
