"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import StudentPortal from "@/components/StudentPortal";
import AboutLogos from "@/components/AboutLogos";
import AboutDeryk from "@/components/AboutDeryk";
import TargetAudience from "@/components/TargetAudience";
import Themes from "@/components/Themes";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ProposalModal from "@/components/ProposalModal";

export default function Home() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Main content flow */}
      <main className="flex-grow">
        
        {/* Section 1: Hero */}
        <Hero onOpenProposal={() => setIsProposalOpen(true)} />

        {/* Section 2: Manifesto */}
        <Manifesto />

        {/* Section 3: Portal do Aluno (Acesso a Cursos e Conteúdo) */}
        <StudentPortal />

        {/* Section 4: Sobre o Grupo LOGOS */}
        <AboutLogos />

        {/* Section 4: Sobre Deryk */}
        <AboutDeryk />

        {/* Section 5: Para quem é */}
        <TargetAudience />

        {/* Section 6: Temas abordados */}
        <Themes />

        {/* Section 9: Números de autoridade */}
        <Metrics />

        {/* Section 7: Depoimentos */}
        <Testimonials />

        {/* Section 8: Galeria */}
        <Gallery />

      </main>

      {/* Section 10 & 11: Final CTA & Footer */}
      <Footer onOpenProposal={() => setIsProposalOpen(true)} />

      {/* Lead capture proposal form (Floating modal) */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </>
  );
}
