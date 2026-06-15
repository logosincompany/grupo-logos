"use client";

import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo Medeiros",
      role: "Diretor Comercial",
      company: "Innova Group",
      content: "A palestra do Grupo LOGOS mudou a forma como encaramos a nossa operação. Saímos de um modelo dependente de discursos motivacionais diários e estabelecemos uma cultura de responsabilidade individual orientada a números. O retorno sobre investimento foi imediato.",
    },
    {
      name: "Letícia Vasconcelos",
      role: "Head de DHO",
      company: "Nexa Capital",
      content: "Deryk tem uma presença de palco incomparável. Ele não entrega chavões comuns. Ele constrói raciocínios lógicos que expõem as ineficiências comportamentais da liderança. Foi o divisor de águas da nossa convenção anual de diretores.",
    },
    {
      name: "Gustavo Alencar",
      role: "VP de Tecnologia",
      company: "Zenith Systems",
      content: "A clareza mental e a sobriedade transmitidas na palestra LOGOS ajudaram nossa equipe técnica a focar em soluções estruturadas sob alta pressão. Altamente recomendado para empresas que buscam rigor analítico e seriedade.",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-navy-900 border-t border-gold-500/10 relative overflow-hidden">
      
      {/* Background vectors */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Depoimentos de Clientes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light">
            O impacto real nos <span className="italic font-normal gold-text-gradient">líderes e equipes</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light leading-relaxed text-sm md:text-base">
            Opiniões provisórias de contratantes simulados que ilustram a percepção da proposta de valor do Grupo LOGOS.
          </p>
        </div>

        {/* Mock comment banner */}
        <div className="max-w-xl mx-auto mb-12 text-center p-3 bg-navy-950 border border-gold-500/10 rounded text-xs text-slate-400">
          <span className="block font-bold text-gold-400 uppercase tracking-widest mb-1">
            // MOCK DATA — substituir por depoimentos reais do cliente
          </span>
          Os depoimentos abaixo são mockados e servem para validar a estrutura visual de depoimentos premium da marca.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-navy-950 border border-gold-500/5 hover:border-gold-500/20 shadow-xl flex flex-col justify-between relative group transition-all duration-300"
            >
              
              {/* Gold Quote badge */}
              <div className="absolute top-6 right-8 text-gold-500/10 group-hover:text-gold-500/25 transition-colors duration-300">
                <Quote className="h-12 w-12 rotate-180" />
              </div>

              <div>
                {/* Executive Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm font-light leading-relaxed italic relative z-10">
                  “{t.content}”
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-slate-800/60 pt-6 mt-8 flex flex-col">
                <span className="font-serif font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">
                  {t.name}
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  {t.role} — <strong className="text-slate-300 font-normal">{t.company}</strong>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
