"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";

interface HeroProps {
  onOpenProposal: () => void;
}

export default function Hero({ onOpenProposal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-navy-950">
      
      {/* Premium Logic Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(212, 175, 55, 0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Background gradients for cinematic lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-700/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6 px-3 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 max-w-fit mx-auto lg:mx-0">
              <Compass className="h-4 w-4 text-gold-400 animate-spin-slow" />
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-300 uppercase">
                Razão • Lógica • Transformação
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight font-light">
              Te mostro uma <br />
              <span className="font-normal italic gold-text-gradient">nova forma</span> de <br />
              enxergar o mundo.
            </h1>
            
            <p className="mt-6 text-slate-300 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Palestras corporativas para líderes, empresários e equipes que desejam transformar mentalidade em resultado real. Mude a perspectiva da sua empresa através da razão.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenProposal}
                className="glow-btn w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-semibold uppercase tracking-widest rounded shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Solicitar proposta
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <a
                href="#manifesto"
                className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-gold-500 hover:bg-gold-500/5 text-slate-300 hover:text-gold-400 text-xs font-semibold uppercase tracking-widest rounded transition-all duration-300 text-center cursor-pointer"
              >
                Conhecer a filosofia LOGOS
              </a>
            </div>

            {/* Micro details */}
            <div className="mt-12 pt-8 border-t border-slate-800/40 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block text-xl font-serif text-gold-400 font-semibold">100%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Conteúdo Racional</span>
              </div>
              <div className="border-x border-slate-800/60 px-4">
                <span className="block text-xl font-serif text-gold-400 font-semibold">Fatos</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Base Científica</span>
              </div>
              <div>
                <span className="block text-xl font-serif text-gold-400 font-semibold">Prático</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Foco em Resultado</span>
              </div>
            </div>
          </div>

          {/* Deryk Portrait Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Elegant Outer Frames */}
            <div className="relative w-72 h-[450px] md:w-80 md:h-[500px] lg:w-96 lg:h-[560px]">
              
              {/* Back Gold Border */}
              <div className="absolute -inset-3 border border-gold-500/20 rounded transition-all duration-500 hover:-inset-4 pointer-events-none" />
              
              {/* Corner brackets simulating mathematical grid */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold-500/60 -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold-500/60 translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold-500/60 -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold-500/60 translate-x-1 translate-y-1" />
              
              {/* Main Image Wrapper */}
              <div className="w-full h-full overflow-hidden rounded border border-gold-500/30 bg-navy-900 shadow-2xl relative">
                <Image
                  src="/images/deryk.jpg"
                  alt="Deryk - Palestrante Grupo LOGOS"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover object-top filter contrast-105 brightness-95 grayscale-[20%] transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                
                {/* Floating Speaker Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-navy-950/80 backdrop-blur border border-gold-500/20">
                  <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold">Palestrante Principal</span>
                  <span className="block font-serif text-lg font-semibold text-white mt-1">Deryk</span>
                  <span className="text-xs text-slate-400">Especialista em Mentalidade e Performance Racional</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Down mouse */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#manifesto" className="flex flex-col items-center gap-2 group">
          <span className="text-[9px] uppercase tracking-widest text-slate-500 group-hover:text-gold-400 transition-colors duration-200">
            Role para explorar
          </span>
          <div className="w-6 h-10 rounded-full border border-slate-700 p-1 flex justify-center">
            <div className="w-1.5 h-2 bg-gold-500 rounded-full animate-bounce mt-1" />
          </div>
        </a>
      </div>
    </section>
  );
}
