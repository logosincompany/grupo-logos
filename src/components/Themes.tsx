"use client";

import React from "react";
import { BookOpen, Target, Activity, Eye, ShieldAlert, Award } from "lucide-react";

export default function Themes() {
  const themes = [
    {
      icon: <ShieldAlert className="h-6 w-6 text-gold-400" />,
      title: "Mudança de Mentalidade Racional",
      sub: "Reconfigurando a Lógica de Decisão",
      desc: "Como quebrar os vícios intelectuais de liderados e recondicionar a base de tomada de decisões para focar na verdade prática, e não no conforto emocional.",
      syllabus: ["Desconstrução de crenças limitantes reais", "O viés da inércia corporativa", "Autoimagem racional vs. vitimismo"],
    },
    {
      icon: <Award className="h-6 w-6 text-gold-400" />,
      title: "Liderança de Alta Performance",
      sub: "Liderar pela Competência e Métodos",
      desc: "Ferramentas práticas para guiar e cobrar equipes com base em dados de processos transparentes, promovendo o respeito por meritocracia de resultados.",
      syllabus: ["Desenvolvimento de rituais de feedback lógico", "Gestão sem microgerenciamento", "Fidelização de talentos por propósito"],
    },
    {
      icon: <Activity className="h-6 w-6 text-gold-400" />,
      title: "Consistência e Alta Performance",
      sub: "A Disciplina Racional de Execução",
      desc: "Substituir a busca ingênua por 'motivação' (sentimento flutuante) por um método estruturado de rotinas e blocos de trabalho inegociáveis.",
      syllabus: ["Gestão de energia diária corporativa", "A anatomia da autodisciplina estoica", "Eliminação sistemática de distrações"],
    },
    {
      icon: <Eye className="h-6 w-6 text-gold-400" />,
      title: "Visão Estratégica do Amanhã",
      sub: "Antecipação de Gargalos do Mercado",
      desc: "Como posicionar a marca e a operação um passo à frente dos concorrentes, analisando tendências e estruturando planos de contigência matemáticos.",
      syllabus: ["Planejamento de cenários mercadológicos", "Tomada de decisão sob incerteza", "Pivotagem lógica de processos"],
    },
    {
      icon: <Target className="h-6 w-6 text-gold-400" />,
      title: "Escapando da Mediocridade",
      sub: "O Padrão Ouro de Entrega",
      desc: "Uma análise direta sobre o perigo do conformismo no trabalho e como reestabelecer o padrão de orgulho e primor profissional na equipe.",
      syllabus: ["Combate à procrastinação justificada", "Alinhamento com o Padrão Ouro LOGOS", "Cultura de intolerância ao retrabalho"],
    },
    {
      icon: <BookOpen className="h-6 w-6 text-gold-400" />,
      title: "Cultura de Crescimento Perene",
      sub: "Adaptação de Mentalidade Operacional",
      desc: "Como estruturar uma empresa ágil que aprende com os erros operacionais diários sem punição emocional, otimizando fluxos constantemente.",
      syllabus: ["Post-mortem racional de falhas", "Ambiente de segurança psicológica lógica", "Velocidade de aprendizado organizacional"],
    },
  ];

  return (
    <section id="temas" className="py-24 bg-navy-900 border-y border-gold-500/10 relative">
      
      {/* Glow highlight */}
      <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold-400 uppercase">
            Palestras &amp; Workshops
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif text-white font-light">
            Temas abordados nas <span className="italic font-normal gold-text-gradient">palestras de Deryk</span>
          </h2>
          <p className="mt-4 text-slate-300 font-light leading-relaxed text-sm md:text-base">
            Cada tema é customizado para as dores do seu setor. Abordagens baseadas em lógica, cases reais e sem discursos prontos de autoajuda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-lg bg-navy-950/60 border border-gold-500/10 hover:border-gold-500/35 transition-all duration-300 flex flex-col justify-between hover:shadow-xl group"
            >
              <div>
                {/* Title & Icon Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 rounded bg-navy-900 border border-gold-500/20 group-hover:border-gold-500/60 transition-colors duration-300">
                    {theme.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                    MÓDULO 0{idx + 1}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                    {theme.title}
                  </h3>
                  <span className="block text-xs italic text-gold-500/80 mt-1">
                    {theme.sub}
                  </span>
                </div>

                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {theme.desc}
                </p>
              </div>

              {/* Syllabus/Topics details */}
              <div className="border-t border-slate-800/60 pt-4 mt-auto">
                <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Tópicos do Conteúdo:
                </span>
                <ul className="space-y-1.5">
                  {theme.syllabus.map((item, sIdx) => (
                    <li key={sIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 shrink-0" />
                      <span className="truncate">{item}</span>
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
