"use client";

import React from "react";
import Image from "next/image";
import { Eye, ShieldAlert, Award, ArrowUpRight } from "lucide-react";

export default function AboutLogos() {
  const pillars = [
    {
      icon: <Award className="h-6 w-6 text-gold-400" />,
      title: "Razão (Logos)",
      desc: "Do grego, representa a lógica estruturada, o pensamento ordenado e a clareza para discernir caminhos de sucesso empresarial.",
    },
    {
      icon: <Eye className="h-6 w-6 text-gold-400" />,
      title: "Visão & Sabedoria",
      desc: "A coruja como símbolo máximo: enxergar o que outros ignoram na escuridão do mercado e guiar equipes rumo ao conhecimento.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-gold-400" />,
      title: "Mentalidade Racional",
      desc: "Evitar o emocionalismo amador. Tomar decisões estratégicas orientadas a dados, foco mental e excelência de execução.",
    },
  ];

  return (
    <section id="sobre-logos" className="py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Logo Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer rotating decorative circular frame */}
              <div className="absolute inset-0 border border-gold-500/10 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute inset-4 border border-dashed border-gold-500/5 rounded-full pointer-events-none" />
              
              {/* Gold light burst behind */}
              <div className="absolute w-60 h-60 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
              
              {/* Glassmorphic Medallion */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-navy-900/80 backdrop-blur border border-gold-500/20 flex flex-col items-center justify-center p-8 shadow-2xl relative group">
                <div className="relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/logos-logo.png"
                    alt="Coruja do Grupo LOGOS"
                    width={150}
                    height={150}
                    className="object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-6">
                  <span className="text-[10px] tracking-widest uppercase text-gold-400 font-bold">
                    Símbolo de Razão
                  </span>
                </div>
              </div>
              
            </div>
          </div>

          {/* Description Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
              O Significado da Marca
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light">
              Por que o <span className="font-normal italic gold-text-gradient">Grupo LOGOS</span>?
            </h2>
            
            <p className="mt-6 text-slate-300 font-light leading-relaxed text-base md:text-lg">
              A palavra grega <strong>logos</strong> significa razão, lógica, palavra e discurso articulado. No mundo corporativo moderno, acreditamos que as empresas não sofrem por falta de ferramentas, mas por escassez de racionalidade e clareza mental estratégica.
            </p>
            <p className="mt-4 text-slate-400 font-light leading-relaxed text-sm md:text-base">
              Nosso símbolo é a coruja: o arquétipo ancestral da sabedoria, do ensino e da capacidade de enxergar através do ruído e da escuridão. Levamos esse rigor analítico para dentro de palestras memoráveis, ajudando executivos a tomarem decisões pautadas em clareza, inteligência e método.
            </p>

            {/* Pillars list */}
            <div className="mt-10 space-y-6">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2.5 rounded bg-navy-850 border border-gold-500/10 shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-gold-400 font-semibold">{p.title}</h4>
                    <p className="text-slate-400 text-sm mt-1 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
