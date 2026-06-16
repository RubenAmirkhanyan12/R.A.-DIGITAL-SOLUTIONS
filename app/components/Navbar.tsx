"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastScrollY.current || y < 80);
      setScrolled(y > 40);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex items-center gap-2 group"
        >
          <span className="text-[#B8860B] font-bold text-2xl font-[family-name:var(--font-playfair)] group-hover:text-[#D4A017] transition-colors">
            R.A.
          </span>
          <span className="hidden sm:inline text-white text-sm font-light tracking-widest uppercase">
            Soluciones Digitales
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-[#B8860B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="hidden sm:inline-flex items-center gap-2 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200"
          >
            Consulta Gratuita
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#0F0F0F]/98 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="block py-3 text-white/80 hover:text-[#B8860B] text-base font-medium transition-colors border-b border-white/5"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="block text-center border border-[#B8860B] text-[#B8860B] py-3 font-semibold text-sm tracking-wide hover:bg-[#B8860B] hover:text-white transition-all"
            >
              Consulta Gratuita
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
