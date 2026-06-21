import RastechLogo from "./RastechLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
                href="mailto:rubenamirkhanyan12@gmail.com"
                className="text-white/40 hover:text-[#B8860B] transition-colors"
              >
                rubenamirkhanyan12@gmail.com
              </a>
              <a
                href="tel:+34613361175"
                className="text-white/40 hover:text-[#B8860B] transition-colors"
              >
                +34 613 361 175
              </a>
              <span className="text-white/25 text-xs">Barcelona · España</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {[
                ["Inicio", "#inicio"],
                ["¿Por qué automatizar?", "#problemas"],
                ["Cómo funciona", "#como-funciona"],
                ["Casos de éxito", "#casos"],
                ["Precios", "#precios"],
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

          {/* Resources */}
          <div>
            <p className="text-white/25 text-xs uppercase tracking-widest mb-5">
              Recursos
            </p>
            <ul className="space-y-2.5">
              {[
                ["Calculadora ROI", "#calculadora"],
                ["FAQ", "#problemas"],
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

            <p className="text-white/25 text-xs uppercase tracking-widest mt-8 mb-5">
              Social
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/30 hover:text-[#B8860B] text-xs uppercase tracking-widest transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <p>© {year} Rubén Amirkhanyan. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/40 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-white/40 transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-white/40 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
