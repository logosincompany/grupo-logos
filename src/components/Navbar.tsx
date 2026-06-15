"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenProposal: () => void;
}

export default function Navbar({ onOpenProposal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Manifesto", href: "#manifesto" },
    { name: "Sobre", href: "#sobre-logos" },
    { name: "Deryk", href: "#sobre-deryk" },
    { name: "Público", href: "#para-quem" },
    { name: "Temas", href: "#temas" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Galeria", href: "#galeria" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md py-4 border-gold-500/10 shadow-lg"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden bg-navy-850 rounded-lg border border-gold-500/20 p-1 flex items-center justify-center transition-all duration-300 group-hover:border-gold-500">
              <Image
                src="/images/logos-logo.png"
                alt="Logo Grupo LOGOS"
                width={36}
                height={36}
                className="object-contain filter invert opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                Grupo <span className="gold-text-gradient">LOGOS</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-tight">
                Razão &amp; Sabedoria
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-gold-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button
              onClick={onOpenProposal}
              className="glow-btn px-5 py-2.5 rounded border border-gold-500/30 bg-gold-500/5 hover:bg-gold-500 hover:text-navy-950 text-xs font-semibold uppercase tracking-widest text-gold-400 transition-all duration-300 cursor-pointer"
            >
              Solicitar Proposta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-gold-500 transition-colors duration-200"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-navy-950/95 backdrop-blur-xl border-l border-gold-500/10 shadow-2xl p-6 transition-all duration-500 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-serif text-lg font-bold text-white">
            Grupo <span className="gold-text-gradient">LOGOS</span>
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-400 hover:text-gold-500 transition-colors duration-200"
            aria-label="Fechar Menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors duration-200 border-b border-slate-800/40 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenProposal();
            }}
            className="glow-btn w-full mt-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-navy-950 gold-gradient rounded transition-all duration-300 cursor-pointer"
          >
            Solicitar Proposta
          </button>
        </div>
      </div>
    </nav>
  );
}
