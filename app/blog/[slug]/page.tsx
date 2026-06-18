import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked, Renderer } from "marked";
import {
  getAllPublishedPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "../../lib/blog-posts";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, ExternalLink, Mail } from "lucide-react";

const BASE_URL = "https://rastech.es";

/* ── Heading slug helper ─────────────────────────────── */
function headingSlug(rawText: string): string {
  return rawText
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/gi, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* ── Markdown → HTML (server-side, with heading IDs) ─── */
function renderMarkdown(content: string): string {
  const renderer = new Renderer();

  renderer.heading = function ({
    text,
    depth,
  }: {
    text: string;
    depth: number;
  }) {
    const id = headingSlug(text);
    return `<h${depth} id="${id}">${text}</h${depth}>\n`;
  };

  marked.use({ renderer, gfm: true, breaks: false });
  return marked(content) as string;
}

/* ── TOC extraction from raw markdown ───────────────── */
interface TocItem {
  text: string;
  anchor: string;
  level: number;
}

function extractTOC(content: string): TocItem[] {
  const lines = content.split("\n");
  const toc: TocItem[] = [];

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    const match = h2 || h3;
    if (!match) continue;
    const raw = match[1].replace(/\*\*/g, "").trim();
    toc.push({
      text: raw,
      anchor: headingSlug(raw),
      level: h2 ? 2 : 3,
    });
  }
  return toc;
}

/* ── Static paths ─────────────────────────────────────── */
export async function generateStaticParams() {
  const posts = getAllPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata ─────────────────────────────────── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post no encontrado" };

  const url = `${BASE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | RASTECH Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      locale: "es_ES",
      siteName: "RASTECH",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: url },
  };
}

/* ── Page component ───────────────────────────────────── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = renderMarkdown(post.content);
  const toc = extractTOC(post.content);
  const relatedPosts = getRelatedPosts(slug, post.internalLinks);
  const postUrl = `${BASE_URL}/blog/${post.slug}`;
  const shareEmail = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Te puede interesar este artículo: ${postUrl}`)}`;
  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;

  /* ── JSON-LD ── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${postUrl}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.publishDate,
        dateModified: post.publishDate,
        author: {
          "@type": "Person",
          name: post.author.name,
          description: post.author.bio,
          url: BASE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "RASTECH",
          url: BASE_URL,
        },
        url: postUrl,
        inLanguage: "es-ES",
        keywords: post.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${BASE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#0F0F0F]">
        {/* ── Post hero ── */}
        <section className="relative bg-gradient-to-br from-[#1A3A52] via-[#0F1F2E] to-[#0F0F0F] pt-36 pb-14 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#B8860B]/4 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/35 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#B8860B] transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#B8860B] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white/55 truncate max-w-xs">{post.title}</span>
            </nav>

            {/* Category + ReadTime */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase border border-[#B8860B]/30 px-3 py-1">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/40 text-xs">
                <Clock size={11} />
                {post.readTime} min lectura
              </span>
              <span className="flex items-center gap-1.5 text-white/40 text-xs">
                <Calendar size={11} />
                {formatDate(post.publishDate)}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
              {post.description}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A3A52] border-2 border-[#B8860B]/40 flex items-center justify-center text-[#B8860B] font-bold text-sm shrink-0">
                RA
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{post.author.name}</p>
                <p className="text-white/40 text-xs">{post.author.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main content layout ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16">
            {/* ── Article content ── */}
            <article>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* ── Share buttons ── */}
              <div className="mt-14 pt-8 border-t border-white/8">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 text-white/40 text-sm">
                    <Share2 size={14} />
                    Compartir:
                  </span>
                  <a
                    href={shareLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-[#B8860B]/50 text-white/60 hover:text-[#B8860B] text-sm px-4 py-2 transition-all"
                  >
                    <ExternalLink size={14} />
                    LinkedIn
                  </a>
                  <a
                    href={shareEmail}
                    className="inline-flex items-center gap-2 border border-white/10 hover:border-[#B8860B]/50 text-white/60 hover:text-[#B8860B] text-sm px-4 py-2 transition-all"
                  >
                    <Mail size={14} />
                    Email
                  </a>
                </div>
              </div>

              {/* ── Related posts ── */}
              {relatedPosts.length > 0 && (
                <div className="mt-14">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-6">
                    Artículos relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="group flex items-start gap-5 bg-[#111111] border border-white/5 hover:border-[#B8860B]/20 p-5 transition-all"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="text-[#B8860B] text-xs font-bold tracking-widest uppercase">
                            {rp.category}
                          </span>
                          <p className="text-white group-hover:text-[#B8860B] font-semibold text-sm mt-1 mb-1 transition-colors leading-snug">
                            {rp.title}
                          </p>
                          <p className="text-white/40 text-xs">
                            {rp.readTime} min · {formatDate(rp.publishDate)}
                          </p>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-white/20 group-hover:text-[#B8860B] group-hover:translate-x-1 transition-all mt-1 shrink-0"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ── CTA Final ── */}
              <div className="mt-14 bg-gradient-to-br from-[#1A3A52]/40 to-[#1A3A52]/10 border border-[#1A3A52]/50 p-8 md:p-10">
                <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-3">
                  ¿Listo para implementarlo?
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
                  Análisis gratuito de 30 minutos
                </h3>
                <p className="text-white/55 text-base leading-relaxed mb-6">
                  Calculamos exactamente cuántas horas y cuánto dinero puedes ahorrar
                  en tu empresa específica. Sin compromiso.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-sm tracking-wide px-7 py-3.5 transition-all hover:shadow-[0_0_25px_rgba(184,134,11,0.35)]"
                  >
                    Agendar análisis
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="/#calculadora"
                    className="inline-flex items-center gap-2 border border-white/20 hover:border-[#B8860B]/50 text-white/70 hover:text-[#B8860B] font-semibold text-sm px-7 py-3.5 transition-all"
                  >
                    Calcular mi ahorro →
                  </a>
                </div>
              </div>

              {/* ── Back link ── */}
              <div className="mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white/35 hover:text-[#B8860B] text-sm transition-colors"
                >
                  <ArrowLeft size={14} />
                  Volver al blog
                </Link>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {/* TOC */}
                {toc.length > 0 && (
                  <div className="bg-[#111111] border border-white/5 p-6">
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-bold">
                      Contenido
                    </p>
                    <nav aria-label="Tabla de contenidos">
                      <ul className="space-y-1">
                        {toc.map((item) => (
                          <li key={item.anchor}>
                            <a
                              href={`#${item.anchor}`}
                              className={`block text-xs leading-relaxed py-1 transition-colors hover:text-[#B8860B] ${
                                item.level === 2
                                  ? "text-white/55"
                                  : "text-white/35 pl-3"
                              }`}
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}

                {/* Author card */}
                <div className="bg-[#111111] border border-white/5 p-6">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-bold">
                    Autor
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#1A3A52] border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] font-bold text-sm shrink-0">
                      RA
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{post.author.name}</p>
                      <p className="text-white/40 text-xs">{post.author.role}</p>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{post.author.bio}</p>
                </div>

                {/* Keywords */}
                <div className="bg-[#111111] border border-white/5 p-6">
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-3 font-bold">
                    Temas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs text-white/35 bg-white/[0.04] border border-white/8 px-2 py-1"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini CTA */}
                <div className="bg-[#B8860B]/8 border border-[#B8860B]/25 p-6">
                  <p className="text-[#B8860B] text-xs font-bold tracking-widest uppercase mb-2">
                    ¿Preguntas?
                  </p>
                  <p className="text-white/55 text-xs leading-relaxed mb-4">
                    Análisis gratuito de 30 min. Calculamos tu ROI específico.
                  </p>
                  <Link
                    href="/#contacto"
                    className="block text-center bg-[#B8860B] hover:bg-[#9A7009] text-white font-bold text-xs tracking-wide px-4 py-3 transition-all"
                  >
                    Análisis gratuito →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
