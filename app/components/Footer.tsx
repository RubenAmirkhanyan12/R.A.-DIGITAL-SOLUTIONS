import RastechLogo from "./RastechLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <RastechLogo size={40} />
              <span className="text-white font-bold text-lg tracking-[0.18em] uppercase">
                RASTECH
              </span>
            </div>
            <p className="text-[#F8F9FA]/50 text-xs leading-relaxed max-w-xs">
              Soluciones digitales premium para empresas que quieren escalar.
              Webs, apps y automatizaciones 100% personalizadas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {[
                ["Inicio", "#inicio"],
                ["Cómo Funciona", "#como-funciona"],
                ["Servicios", "#servicios"],
                ["Portafolio", "#portafolio"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/40 hover:text-[#B8860B] text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
              Contacto
            </p>
            <div className="space-y-2">
              <a
                href="mailto:info@rastech.es"
                className="block text-white/40 hover:text-[#B8860B] text-sm transition-colors"
              >
                info@rastech.es
              </a>
              <p className="text-white/40 text-sm">España · Servicios Nacionales</p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="text-white/30 hover:text-[#B8860B] text-xs uppercase tracking-widest transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-white/30 hover:text-[#B8860B] text-xs uppercase tracking-widest transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>© {year} Rubén Amirkhanyan Svazyan. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white/50 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
