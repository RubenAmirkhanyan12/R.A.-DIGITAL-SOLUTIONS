"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RastechLogo from "./RastechLogo";
import { Calculator, Mail, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio",         href: "#inicio" },
  { label: "Sobre Mí",      href: "/sobre-nosotros" },
  { label: "¿Por qué?",     href: "#problemas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Blog",           href: "/blog" },
  { label: "Casos",          href: "#casos" },
  { label: "Precios",        href: "#precios" },
  { label: "Contacto",       href: "#contacto" },
];

export default function Navbar() {
  const [visible,  setVisible]  = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY    = useRef(0);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 90);
      setScrolled(y > 40);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHome) return;
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  const resolveHref = (h: string) =>
    h.startsWith("/") ? h : isHome ? h : `/${h}`;

  const navItemCls = (h: string) =>
    `whitespace-nowrap font-normal transition-colors ${
      (h === "/blog" && pathname === "/blog") ||
      (h === "/sobre-nosotros" && pathname === "/sobre-nosotros")
        ? "text-[#B8860B]"
        : "text-[#F8F9FA] hover:text-[#B8860B]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#1A3A52] transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.3)]" : ""}`}
    >
      <div className="max-w-[1400px] mx-auto px-5 h-[90px] flex items-center justify-between gap-6">

        {/* ── 1. LOGO ───────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <RastechLogo size={44} />
          <span className="font-[family-name:var(--font-playfair)] text-[24px] font-bold text-[#F8F9FA] group-hover:text-[#B8860B] transition-colors">
            RASTECH
          </span>
        </Link>

        {/* ── 2. NAV — 1 sola línea horizontal ─────────────── */}
        {/* Desktop ≥1024px: font 15px, gap 25px */}
        <nav className="hidden lg:flex items-center gap-[25px]">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={resolveHref(href)}
              onClick={href.startsWith("#") ? (e) => handleScroll(e, href) : undefined}
              className={`text-[15px] ${navItemCls(href)}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Tablet 768–1023px: font 12px, gap 14px, sin contacto */}
        <nav className="hidden md:flex lg:hidden items-center gap-[14px]">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={resolveHref(href)}
              onClick={href.startsWith("#") ? (e) => handleScroll(e, href) : undefined}
              className={`text-[12px] ${navItemCls(href)}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── 3. DERECHA: Botón + Contacto ─────────────────── */}

        {/* Desktop ≥1024px: botón + stack email/tel */}
        <div className="hidden lg:flex items-center gap-[20px] shrink-0">
          <a
            href={resolveHref("#calculadora")}
            onClick={isHome ? (e) => handleScroll(e, "#calculadora") : undefined}
            className="flex items-center gap-2 bg-[#B8860B] hover:opacity-90 text-[#1A3A52] px-6 py-3 text-[15px] font-bold rounded-[6px] transition-opacity whitespace-nowrap"
          >
            <Calculator size={15} />
            Calculadora ROI
          </a>

          <div className="flex flex-col gap-[8px]">
            <a
              href="mailto:rubenamirkhanyan12@gmail.com"
              className="flex items-center gap-[6px] text-[13px] text-[#F8F9FA] hover:text-[#B8860B] transition-colors whitespace-nowrap"
            >
              <Mail size={13} />
              rubenamirkhanyan12@gmail.com
            </a>
            <a
              href="tel:+34613361115"
              className="flex items-center gap-[6px] text-[13px] text-[#F8F9FA] hover:text-[#B8860B] transition-colors whitespace-nowrap"
            >
              <Phone size={13} />
              +34 613 361 115
            </a>
          </div>
        </div>

        {/* Tablet 768–1023px: solo botón compacto */}
        <a
          href={resolveHref("#calculadora")}
          onClick={isHome ? (e) => handleScroll(e, "#calculadora") : undefined}
          className="hidden md:flex lg:hidden items-center gap-1.5 bg-[#B8860B] hover:opacity-90 text-[#1A3A52] px-4 py-2 text-[12px] font-bold rounded-[6px] transition-opacity whitespace-nowrap shrink-0"
        >
          <Calculator size={13} />
          Calculadora ROI
        </a>

        {/* Mobile <768px: hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden p-2 text-[#F8F9FA] hover:text-[#B8860B] transition-colors shrink-0"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile dropdown (<768px) ──────────────────────── */}
      <div
        className={`md:hidden bg-[#1A3A52] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 py-5 flex flex-col">

          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={resolveHref(href)}
              onClick={
                href.startsWith("#")
                  ? (e) => handleScroll(e, href)
                  : () => setMenuOpen(false)
              }
              className="py-3 text-[15px] text-[#F8F9FA] hover:text-[#B8860B] border-b border-white/10 transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-5">
            <a
              href="mailto:rubenamirkhanyan12@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-[14px] text-[#F8F9FA] hover:text-[#B8860B] transition-colors"
            >
              <Mail size={14} /> rubenamirkhanyan12@gmail.com
            </a>
            <a
              href="tel:+34613361115"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-[14px] text-[#F8F9FA] hover:text-[#B8860B] transition-colors"
            >
              <Phone size={14} /> +34 613 361 115
            </a>
          </div>

          <div className="pt-4 pb-2">
            <a
              href={resolveHref("#calculadora")}
              onClick={
                isHome
                  ? (e) => handleScroll(e, "#calculadora")
                  : () => setMenuOpen(false)
              }
              className="flex items-center justify-center gap-2 bg-[#B8860B] hover:opacity-90 text-[#1A3A52] py-3 text-[15px] font-bold rounded-[6px] transition-opacity"
            >
              <Calculator size={15} /> Calculadora ROI
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
