"use client";

import React from "react";
import { Landmark, Users, Calendar, Award } from "lucide-react";

export default function Metrics() {
  const stats = [
    {
      icon: <Landmark className="h-6 w-6 text-gold-400" />,
      number: "+XX",
      label: "Empresas Impactadas",
      description: "Organizações corporativas que reestruturaram sua cultura com a filosofia LOGOS.",
    },
    {
      icon: <Users className="h-6 w-6 text-gold-400" />,
      number: "+X.XXX",
      label: "Pessoas Alcançadas",
      description: "Colaboradores, gerentes e diretores que reconfiguraram sua mentalidade de trabalho.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-gold-400" />,
      number: "+XX",
      label: "Eventos Realizados",
      description: "Palestras presenciais, imersões executivas e convenções estratégicas de vendas.",
    },
    {
      icon: <Award className="h-6 w-6 text-gold-400" />,
      number: "+X",
      label: "Anos de Experiência",
      description: "Tempo refinando a oratória e o método lógico de liderança corporativa.",
    },
  ];

  return (
    <section className="py-20 bg-navy-950 border-b border-gold-500/10 relative overflow-hidden">
      
      {/* Background circular outline watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[600px] h-[600px] border border-gold-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mock data alert banner */}
        <div className="max-w-xl mx-auto mb-12 text-center p-3 bg-navy-900 border border-gold-500/10 rounded text-xs text-slate-400">
          <span className="block font-bold text-gold-400 uppercase tracking-widest mb-1">
            // MOCK DATA — substituir por dados reais do cliente
          </span>
          Os números abaixo são placeholders ilustrativos e serão atualizados com os dados reais de autoridade de Deryk.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded bg-navy-900 border border-gold-500/5 hover:border-gold-500/20 text-center flex flex-col items-center shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-navy-850 rounded border border-gold-500/10 mb-4">
                {stat.icon}
              </div>
              
              {/* Stat number with gold gradient and blur glow */}
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold-400 tracking-tight mb-2">
                {stat.number}
              </div>
              
              <h4 className="text-sm uppercase tracking-wider font-bold text-slate-200 mb-2">
                {stat.label}
              </h4>
              
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
