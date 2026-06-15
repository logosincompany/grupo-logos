"use client";

import React from "react";
import Image from "next/image";
import { Compass, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenProposal: () => void;
}

export default function Footer({ onOpenProposal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-gold-500/10 overflow-hidden">
      
      {/* -------------------- SECTION 10: FINAL CTA -------------------- */}
      <div className="relative py-24 border-b border-slate-800/40 z-10">
        
        {/* Background Logic Watermark */}
        <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border border-gold-500" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-gold-500" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Eleve o Nível do Evento
          </span>
          
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight font-light">
            Sua equipe está preparada para <br />
            <span className="italic font-normal gold-text-gradient">enxergar o próximo nível</span>?
          </h2>
          
          <p className="mt-6 text-slate-300 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Leve o Grupo LOGOS para o seu próximo evento corporativo e prepare seus líderes para enxergar o mundo através da razão e da clareza estratégica.
          </p>
          
          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenProposal}
              className="glow-btn px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-semibold uppercase tracking-widest rounded shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Solicitar Proposta Comercial
            </button>
          </div>
        </div>
      </div>

      {/* -------------------- MAIN INSTITUTIONAL FOOTER -------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative w-9 h-9 bg-navy-900 rounded border border-gold-500/20 p-1 flex items-center justify-center">
                <Image
                  src="/images/logos-logo.png"
                  alt="Logo Grupo LOGOS"
                  width={30}
                  height={30}
                  className="object-contain filter invert opacity-80"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base tracking-wider font-bold text-white">
                  Grupo <span className="gold-text-gradient">LOGOS</span>
                </span>
                <span className="text-[8px] uppercase tracking-widest text-slate-400 font-semibold leading-tight">
                  Razão &amp; Sabedoria
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm mt-2">
              Transformação corporativa pautada na lógica, em dados, na sabedoria comportamental e na clareza de foco mental. Substituímos a emoção passageira por resultados duradouros.
            </p>

            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="p-2 rounded bg-navy-900 border border-gold-500/10 hover:border-gold-500 text-slate-400 hover:text-gold-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gold-400 mb-6">
              Menu Institucional
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Manifesto Racional", href: "#manifesto" },
                { name: "Sobre a Logos", href: "#sobre-logos" },
                { name: "Sobre o Deryk", href: "#sobre-deryk" },
                { name: "Público-Alvo", href: "#para-quem" },
                { name: "Temas de Palestras", href: "#temas" },
                { name: "Depoimentos", href: "#depoimentos" },
                { name: "Galeria de Mídia", href: "#galeria" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gold-400 mb-6">
              Contato Comercial
            </h4>
            
            {/* MOCK DATA — substituir por dados reais do cliente */}
            <ul className="space-y-4 text-xs text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-500/60 shrink-0" />
                <span>contato@grupologos.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-500/60 shrink-0" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold-500/60 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Av. das Nações Unidas, 12901 - Brooklin Novo, São Paulo - SP, 04578-000
                </span>
              </li>
              <li className="text-[9px] italic text-slate-500 mt-2">
                // MOCK DATA — Os contatos acima são fictícios e devem ser substituídos pelos canais reais da empresa.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] text-slate-500 font-light">
            © {new Date().getFullYear()} Grupo LOGOS. Todos os direitos reservados.
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-slate-500 hover:text-gold-400 transition-colors duration-200 cursor-pointer"
          >
            Voltar ao topo
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
}
