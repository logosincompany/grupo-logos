"use client";

import React from "react";
import { Play, Image as ImageIcon, Camera } from "lucide-react";

export default function Gallery() {
  const mediaItems = [
    {
      type: "video",
      title: "Convenção de Vendas Anual",
      event: "Keynote para +500 executivos",
      aspectRatio: "aspect-video",
    },
    {
      type: "photo",
      title: "Imersão de Liderança C-Level",
      event: "Treinamento intensivo de visão estratégica",
      aspectRatio: "aspect-square",
    },
    {
      type: "photo",
      title: "Palestra Magna - Zenith Tech",
      event: "Transformação comportamental de equipes",
      aspectRatio: "aspect-square",
    },
    {
      type: "video",
      title: "Fórum de Governança e Logística",
      event: "Análise analítica de performance de mercado",
      aspectRatio: "aspect-video",
    },
    {
      type: "photo",
      title: "Workshop de Execução Racional",
      event: "Cultura de crescimento e autogestão",
      aspectRatio: "aspect-video",
    },
    {
      type: "photo",
      title: "Congresso Nacional de Diretores",
      event: "Mudando a lógica de decisão sob crise",
      aspectRatio: "aspect-square",
    },
  ];

  return (
    <section id="galeria" className="py-24 bg-navy-950 border-t border-gold-500/10 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Registros de Eventos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light">
            Deryk no <span className="italic font-normal gold-text-gradient">palco corporativo</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light leading-relaxed text-sm md:text-base">
            Uma prévia dos registros em vídeo e fotos das palestras de alta governança aplicadas no país.
          </p>
        </div>

        {/* Mock comment banner */}
        <div className="max-w-xl mx-auto mb-12 text-center p-3 bg-navy-900 border border-gold-500/10 rounded text-xs text-slate-400">
          <span className="block font-bold text-gold-400 uppercase tracking-widest mb-1">
            // MOCK DATA — substituir por fotos e vídeos reais do cliente
          </span>
          Os blocos abaixo são placeholders premium indicando onde serão adicionados os arquivos de mídia oficiais.
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-lg border border-gold-500/10 bg-navy-900 group hover:border-gold-500/30 transition-all duration-500 shadow-xl cursor-pointer ${
                item.aspectRatio === "aspect-video" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              
              {/* Premium Placeholder Canvas */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-850 to-navy-900 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:scale-[1.02] min-h-[260px]">
                
                {/* Geometrics */}
                <div className="absolute inset-4 border border-dashed border-slate-800/40 rounded pointer-events-none" />
                
                <div className="p-4 rounded-full bg-navy-950 border border-gold-500/10 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 text-gold-400 transition-all duration-300 mb-4 shadow-inner">
                  {item.type === "video" ? (
                    <Play className="h-6 w-6 fill-gold-500/10 group-hover:fill-gold-500/30" />
                  ) : (
                    <Camera className="h-6 w-6" />
                  )}
                </div>

                <span className="text-[10px] font-bold text-gold-500 uppercase tracking-wider mb-2">
                  Placeholder de {item.type === "video" ? "Vídeo" : "Foto"}
                </span>
                
                <span className="text-xs text-slate-400 max-w-[200px] leading-relaxed italic">
                  Foto real será adicionada aqui.
                </span>

              </div>

              {/* Bottom Info Banner */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-navy-950/90 backdrop-blur-sm border-t border-slate-800/60 flex items-center justify-between z-10">
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-white group-hover:text-gold-400 transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-light mt-0.5">
                    {item.event}
                  </span>
                </div>
                <div className="text-[9px] px-2 py-0.5 rounded border border-gold-500/20 text-gold-400 bg-gold-500/5 font-semibold">
                  {item.type === "video" ? "PLAY PREVIEW" : "AMP"}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
