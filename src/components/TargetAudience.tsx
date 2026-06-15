"use client";

import React from "react";
import { Landmark, Compass, Users, CheckCircle } from "lucide-react";

export default function TargetAudience() {
  const targets = [
    {
      icon: <Landmark className="h-8 w-8 text-gold-400" />,
      title: "Empresários",
      desc: "Para donos de negócios que precisam liderar a empresa através de crises de mercado, tomar decisões difíceis de portfólio e estabelecer uma cultura voltada ao lucro e eficiência.",
      outcomes: [
        "Enxergar o negócio com frieza analítica.",
        "Mapear gargalos culturais que drenam lucros.",
        "Estruturar governança e delegação lógica.",
      ],
    },
    {
      icon: <Compass className="h-8 w-8 text-gold-400" />,
      title: "Líderes & Diretores",
      desc: "Para gestores e C-levels que precisam coordenar departamentos complexos, inspirar pelo exemplo e obter resultados sem recorrer a incentivos motivacionais superficiais.",
      outcomes: [
        "Liderar com clareza mental e autoridade real.",
        "Reduzir conflitos baseando metas em métricas claras.",
        "Desenvolver novos líderes autônomos.",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-gold-400" />,
      title: "Equipes Corporativas",
      desc: "Para colaboradores, equipes de vendas e de execução técnica que precisam elevar sua produtividade diária, eliminando desculpas emocionais e focando na excelência operacional.",
      outcomes: [
        "Substituir o ciclo de euforia/apatia pela consistência.",
        "Cultura de auto-responsabilidade (ownership).",
        "Alta performance orientada a metas reais.",
      ],
    },
  ];

  return (
    <section id="para-quem" className="py-24 bg-navy-950 overflow-hidden relative">
      
      {/* Background design elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full border border-gold-500/5 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Público-Alvo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light">
            Alinhamento Racional para <span className="italic font-normal gold-text-gradient">toda a empresa</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light leading-relaxed text-sm md:text-base">
            O método LOGOS é moldado para atender às dores e potencialidades de quem carrega a responsabilidade pelos resultados, da alta governança ao time executor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-navy-900 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-500 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Icon */}
                <div className="p-3 bg-navy-850 border border-gold-500/20 rounded-md w-fit mb-6 transition-all duration-300 group-hover:border-gold-500/60">
                  {target.icon}
                </div>
                
                <h3 className="text-2xl font-serif text-white font-semibold mb-4 group-hover:text-gold-400 transition-colors duration-300">
                  {target.title}
                </h3>
                
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {target.desc}
                </p>
              </div>

              {/* Outcomes list */}
              <div className="border-t border-slate-800/60 pt-6">
                <span className="block text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-4">
                  Transformações Racionais:
                </span>
                <ul className="space-y-3">
                  {target.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex gap-3 items-start text-xs text-slate-300">
                      <CheckCircle className="h-4 w-4 text-gold-500/70 shrink-0 mt-0.5" />
                      <span className="leading-tight">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
