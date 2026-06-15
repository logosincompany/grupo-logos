"use client";

import React from "react";
import Image from "next/image";
import { Mic, ShieldCheck, Cpu } from "lucide-react";

export default function AboutDeryk() {
  return (
    <section id="sobre-deryk" className="py-24 bg-navy-900 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
              O Palestrante Principal
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light">
              Deryk | <span className="font-normal italic gold-text-gradient">Pensamento Estratégico</span>
            </h2>

            {/* MOCK DATA — substituir por dados reais do cliente */}
            <div className="mt-6 space-y-4 text-slate-300 font-light leading-relaxed text-base">
              <p>
                <strong>Deryk</strong> é o idealizador e palestrante principal do Grupo LOGOS. Com uma formação pautada na análise lógica, ciência comportamental e estruturação de processos de alto rendimento, ele desenvolveu um método de oratória corporativa focado em desconstruir ilusões motivacionais passageiras e construir inteligência de execução duradoura.
              </p>
              <p>
                Suas apresentações misturam elementos de neurociência, economia comportamental, estoicismo clássico e estratégias práticas de grandes corporações mundiais. Deryk se apresenta com luz cinematográfica e impacto retórico premium, proporcionando uma experiência de imersão que prende a atenção da primeira à última frase.
              </p>
              <p className="text-slate-400 text-sm italic">
                // MOCK DATA — Os parágrafos acima são provisórios e devem ser substituídos pelo perfil e conquistas oficiais do palestrante Deryk.
              </p>
            </div>

            {/* Speaker Stats/Credentials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              <div className="p-4 rounded bg-navy-950/40 border border-gold-500/5">
                <Mic className="h-6 w-6 text-gold-400 mb-2" />
                <h4 className="font-serif text-sm font-semibold text-white">Retórica Impecável</h4>
                <p className="text-xs text-slate-400 mt-1">Oratória magnética estruturada em argumentos lógicos.</p>
              </div>

              <div className="p-4 rounded bg-navy-950/40 border border-gold-500/5">
                <ShieldCheck className="h-6 w-6 text-gold-400 mb-2" />
                <h4 className="font-serif text-sm font-semibold text-white">Base em Fatos</h4>
                <p className="text-xs text-slate-400 mt-1">Livre de teorias motivacionais superficiais ou coachings vazios.</p>
              </div>

              <div className="p-4 rounded bg-navy-950/40 border border-gold-500/5">
                <Cpu className="h-6 w-6 text-gold-400 mb-2" />
                <h4 className="font-serif text-sm font-semibold text-white">Método Prático</h4>
                <p className="text-xs text-slate-400 mt-1">Conceitos aplicáveis no dia a dia da governança e vendas.</p>
              </div>

            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-96 md:w-96 md:h-[460px]">
              
              {/* Elegant Gold Framing Details */}
              <div className="absolute inset-0 border border-gold-500/20 rounded-lg translate-x-4 translate-y-4 -z-10 pointer-events-none" />
              
              {/* Image Container */}
              <div className="w-full h-full overflow-hidden rounded-lg border border-gold-500/20 bg-navy-950 relative shadow-2xl">
                <Image
                  src="/images/perfil02-HD.png"
                  alt="Deryk Palestrante"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover object-center filter saturate-75 contrast-105"
                />
                
                {/* Visual Accent Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
