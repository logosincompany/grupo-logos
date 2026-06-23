"use client";

import React from "react";
import { GraduationCap, ArrowRight, BookOpen, Clock, FileText } from "lucide-react";

export default function StudentPortal() {
  const benefits = [
    {
      icon: <BookOpen className="h-5 w-5 text-gold-400" />,
      title: "Cursos Complementares",
      desc: "Videoaulas e aprofundamentos dos conceitos abordados no nosso encontro.",
    },
    {
      icon: <FileText className="h-5 w-5 text-gold-400" />,
      title: "Materiais de Apoio",
      desc: "Slides da palestra, resumos de apoio e PDFs para consolidação de conteúdo.",
    },
    {
      icon: <Clock className="h-5 w-5 text-gold-400" />,
      title: "Desenvolvimento Contínuo",
      desc: "Revise os conceitos e as metodologias no seu tempo, com total flexibilidade.",
    },
  ];

  return (
    <section id="portal-aluno" className="py-24 bg-navy-900 relative overflow-hidden border-b border-gold-500/10">
      {/* Cinematic lighting effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-20 top-10 w-96 h-96 rounded-full border border-gold-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context / Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
              PORTAL DO ALUNO
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light font-cormorant">
              Sua evolução intelectual <span className="font-normal italic gold-text-gradient">continua</span>.
            </h2>
            <p className="mt-6 text-slate-300 font-light leading-relaxed text-base md:text-lg">
              A palestra foi apenas o início de uma reconfiguração racional. Para consolidar as ferramentas e reflexões apresentadas, disponibilizamos uma área exclusiva onde você pode acessar todos os conteúdos vinculados ao seu evento.
            </p>
            
            {/* Features/Benefits list */}
            <div className="mt-10 space-y-6">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2 rounded bg-navy-850 border border-gold-500/10 shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-gold-300 font-semibold">{b.title}</h4>
                    <p className="text-slate-400 text-sm mt-0.5 font-light leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Portal Access Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-navy-950/80 backdrop-blur-md border border-gold-500/20 rounded-lg p-8 md:p-10 shadow-2xl relative group hover:border-gold-500/35 transition-all duration-300">
              
              {/* Corner accent decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-500/40 -translate-x-px -translate-y-px" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-500/40 translate-x-px -translate-y-px" />
              
              <div className="flex flex-col items-center text-center">
                {/* Shield / Graduation Cap Circle */}
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-gold-400" />
                </div>

                <h3 className="text-2xl font-serif text-white font-light font-cormorant">
                  Acesso aos Conteúdos
                </h3>
                
                <p className="mt-3 text-slate-400 text-xs leading-relaxed max-w-xs font-light">
                  Insira as credenciais recebidas após a palestra para visualizar seus slides, vídeos e materiais de apoio.
                </p>

                {/* Styled placeholder forms to look like a premium portal preview */}
                <div className="w-full mt-6 space-y-3 pointer-events-none opacity-40">
                  <div className="text-left">
                    <div className="h-8 w-full bg-navy-900/60 border border-slate-800 rounded px-3 flex items-center text-[10px] text-slate-500">
                      e-mail cadastrado
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="h-8 w-full bg-navy-900/60 border border-slate-800 rounded px-3 flex items-center justify-between text-[10px] text-slate-500">
                      ••••••••••••
                    </div>
                  </div>
                </div>

                {/* Main Action Button */}
                <a
                  href="https://academylogos.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn mt-8 w-full py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-semibold uppercase tracking-widest rounded shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center font-sans"
                >
                  Entrar no Portal
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Subtext info */}
                <span className="mt-4 text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
                  Redirecionamento seguro para Logos Academy
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
