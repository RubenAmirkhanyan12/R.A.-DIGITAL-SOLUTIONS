"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RastechLogo from "./RastechLogo";
import { Calculator } from "lucide-react";

interface NavLink {
  label: string;
  href: string; // hash like "#inicio" OR page like "/blog"
}

const links: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Por qué?", href: "#problemas" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Casos", href: "#casos" },
  { label: "Precios", href: "#precios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    if (!isHome) return; // let Link handle full navigation
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  const resolvedHref = (href: string): string => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[#0F0F0F]/96 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <RastechLogo size={36} />
          <span className="text-white font-bold text-base tracking-[0.18em] uppercase group-hover:text-[#B8860B] transition-colors">
            RASTECH
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map(({ label, href }) => {
            const resolved = resolvedHref(href);
            const isActive = href === "/blog" && pathname === "/blog";
            return (
              <li key={href}>
                <a
                  href={resolved}
                  onClick={
                    href.startsWith("#")
                      ? (e) => handleHashClick(e, href)
                      : undefined
                  }
                  className={`text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px after:bg-[#B8860B] after:transition-transform ${
                    isActive
                      ? "text-[#B8860B] after:scale-x-100"
                      : "text-white/65 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA + Mobile Menu button */}
        <div className="flex items-center gap-3">
          <a
            href={resolvedHref("#calculadora")}
            onClick={
              isHome
                ? (e) => handleHashClick(e, "#calculadora")
                : undefined
            }
            className="hidden sm:inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9A7009] text-white px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(184,134,11,0.35)]"
          >
            <Calculator size={14} />
            Calculadora ROI
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
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
          menuOpen ? "max-h-[540px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {links.map(({ label, href }) => {
            const resolved = resolvedHref(href);
            return (
              <li key={href}>
                <a
                  href={resolved}
                  onClick={
                    href.startsWith("#")
                      ? (e) => handleHashClick(e, href)
                      : () => setMenuOpen(false)
                  }
                  className="block py-3 text-white/80 hover:text-[#B8860B] text-base font-medium transition-colors border-b border-white/5"
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li className="pt-3">
            <a
              href={resolvedHref("#calculadora")}
              onClick={
                isHome
                  ? (e) => handleHashClick(e, "#calculadora")
                  : () => setMenuOpen(false)
              }
              className="flex items-center justify-center gap-2 bg-[#B8860B] text-white py-3 font-semibold text-sm tracking-wide hover:bg-[#9A7009] transition-all"
            >
              <Calculator size={14} />
              Calculadora ROI
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
