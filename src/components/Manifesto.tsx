"use client";

import React from "react";
import { Quote, Sparkles, AlertCircle } from "lucide-react";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 bg-navy-900 border-y border-gold-500/10 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-20 bottom-1/4 w-80 h-80 rounded-full border border-gold-500/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Large Decorative Quote Icon */}
        <div className="flex justify-center mb-8">
          <Quote className="h-12 w-12 text-gold-500/40 rotate-180" />
        </div>

        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
          Manifesto Grupo LOGOS
        </span>
        
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light">
          A verdadeira mudança é <span className="italic font-normal gold-text-gradient">racional</span>.
        </h2>

        <p className="mt-8 text-xl sm:text-2xl font-serif text-slate-200 leading-relaxed font-light italic">
          “Não acreditamos em motivação passageira. Acreditamos em transformação através da razão, da clareza e da mudança de perspectiva. Porque resultados extraordinários exigem uma nova forma de pensar.”
        </p>

        {/* Comparison: Emotional vs Rational */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          
          {/* Emotional Box */}
          <div className="p-6 rounded bg-navy-950/40 border border-red-500/10 hover:border-red-500/20 transition-all duration-300">
            <div className="flex items-center gap-3 text-red-400 mb-4">
              <AlertCircle className="h-5 w-5" />
              <h4 className="text-xs uppercase tracking-wider font-bold">O Paradigma Comum: Emoção Passageira</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Coachings motivacionais tradicionais inflam o ego e elevam a energia temporariamente com gritos e promessas mágicas. O efeito dura poucas horas, e as equipes retornam à mesma inércia produtiva.
            </p>
          </div>

          {/* Rational Box */}
          <div className="p-6 rounded bg-navy-950/60 border border-gold-500/25 hover:border-gold-500/40 transition-all duration-300 shadow-lg relative">
            <div className="absolute top-3 right-3">
              <span className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-gold-500/10 text-gold-400">
                LOGOS
              </span>
            </div>
            <div className="flex items-center gap-3 text-gold-400 mb-4">
              <Sparkles className="h-5 w-5" />
              <h4 className="text-xs uppercase tracking-wider font-bold">A Filosofia LOGOS: Razão Estruturada</h4>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Trabalhamos com fatos, números, análise de comportamento e reconfiguração racional de visão. Mudamos a base lógica sob a qual a equipe toma decisões cotidianas, gerando resultados perenes.
            </p>
          </div>

        </div>

        {/* Small branding label */}
        <div className="mt-12 text-slate-500 text-xs tracking-wider">
          ESTRATÉGIA • CLAREZA MENTAL • SABEDORIA CORPORATIVA
        </div>
      </div>
    </section>
  );
}
