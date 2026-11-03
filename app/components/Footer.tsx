import Link from "next/link";
import RastechLogo from "./RastechLogo";
import { CONTACT_HREF } from "../lib/seo";
import { getFooterPosts } from "../lib/blog-posts";
import { SITE } from "../lib/site-config";

export default function Footer({
  hubLabel = "Automatización de procesos en Barcelona",
}: {
  hubLabel?: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <RastechLogo size={38} />
              <div>
                <span className="text-white font-bold text-base tracking-[0.18em] uppercase block">
                  RASTECH
                </span>
                <span className="text-white/30 text-xs">Automatización de Procesos · Barcelona</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
              Automatizamos los procesos administrativos de empresas en Barcelona.
              Facturación, emails, reportes y seguimiento en automático.
              ROI documentado desde el mes 1.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/40 hover:text-[#B8860B] transition-colors"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.phoneHref}
                className="text-white/40 hover:text-[#B8860B] transition-colors"
              >
                {SITE.phone}
              </a>
              <span className="text-white/25 text-xs">Barcelona · España</span>
            </div>
          </div>

          {/* Páginas */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
              Páginas
            </p>
            <ul className="space-y-2.5">
              {[
                ["Inicio", "/"],
                ["Sobre Nosotros", "/sobre-nosotros"],
                ["Casos de uso", "/casos"],
                ["Precios", "/precios"],
                ["Blog", "/blog"],
                ["Contacto", CONTACT_HREF],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-[#B8860B] text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Automatizar */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
              Automatizar
            </p>
            <ul className="space-y-2.5">
              {[
                [hubLabel, "/automatizar"],
                ["Restaurantes", "/automatizar-restaurantes"],
                ["E-commerce", "/automatizar-ecommerce"],
                ["Agencias", "/automatizar-agencias"],
                ["Tu sector", "/automatizar-otros"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-[#B8860B] text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blog articles row */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
            Artículos del Blog
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {getFooterPosts().map(({ slug, title }) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="text-white/35 hover:text-[#B8860B] text-xs leading-relaxed transition-colors"
              >
                {title} →
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <p>© {year} Rubén Amirkhanyan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
