"use client";

import React, { useState } from "react";
import { X, Calendar, Users, Briefcase, Mail, Phone, User, CheckCircle2 } from "lucide-react";

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    audienceSize: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // MOCK DATA — Simular envio de proposta para o servidor
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        date: "",
        audienceSize: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl rounded-xl border border-gold-500/20 bg-navy-900 p-6 md:p-8 shadow-2xl transition-all duration-300 md:my-8">
        
        {/* Subtle geometric background watermark */}
        <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none overflow-hidden rounded-xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-gold-500" />
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full border border-gold-500" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-gold-500 transition-colors duration-200"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>

        {status !== "success" ? (
          <>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-serif text-gold-400">Solicitar Proposta</h3>
              <p className="mt-2 text-slate-400 text-sm md:text-base">
                Leve o Grupo LOGOS para o seu próximo evento corporativo e prepare seus líderes para enxergarem o próximo nível.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Seu Nome</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      placeholder="Ex: Roberto Silva"
                      className="w-full rounded-md border border-slate-700 bg-navy-850 py-2.5 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 disabled:opacity-50 text-sm"
                    />
                  </div>
                </div>

                {/* Empresa */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Empresa</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      placeholder="Ex: Tech Solutions"
                      className="w-full rounded-md border border-slate-700 bg-navy-850 py-2.5 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 disabled:opacity-50 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">E-mail Corporativo</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      placeholder="Ex: roberto@empresa.com"
                      className="w-full rounded-md border border-slate-700 bg-navy-850 py-2.5 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 disabled:opacity-50 text-sm"
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Telefone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      placeholder="Ex: (11) 99999-9999"
                      className="w-full rounded-md border border-slate-700 bg-navy-850 py-2.5 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 disabled:opacity-50 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Data Estimada */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Data Prevista</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="w-full rounded-md border border-slate-700 bg-navy-850 py-2.5 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 disabled:opacity-50 text-sm"
                    />
                  </div>
                </div>

                {/* Tamanho da Audiência */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Público Estimado</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    <select
                      name="audienceSize"
                      value={formData.audienceSize}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="w-full appearance-none rounded-md border border-slate-700 bg-navy-850 py-2.5 pl-10 pr-4 text-slate-200 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 disabled:opacity-50 text-sm font-sans"
                    >
                      <option value="" className="text-slate-500">Selecione...</option>
                      <option value="under-50">Até 50 pessoas</option>
                      <option value="50-150">50 a 150 pessoas</option>
                      <option value="150-300">150 a 300 pessoas</option>
                      <option value="300-500">300 a 500 pessoas</option>
                      <option value="above-500">Mais de 500 pessoas</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Detalhes do Evento */}
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Mensagem / Observações</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="Conte-nos brevemente sobre os objetivos do seu evento..."
                  className="w-full rounded-md border border-slate-700 bg-navy-850 py-2.5 px-4 text-slate-200 placeholder-slate-500 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 disabled:opacity-50 text-sm"
                />
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="glow-btn w-full rounded-md gold-gradient py-3 text-center text-sm font-semibold uppercase tracking-widest text-navy-950 transition-all duration-300 hover:brightness-110 disabled:opacity-50 cursor-pointer"
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-950 border-t-transparent" />
                    Processando Solicitação...
                  </span>
                ) : (
                  "Enviar Proposta"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-gold-500 animate-bounce mb-4" />
            <h3 className="text-2xl md:text-3xl font-serif text-gold-400 mb-2">Solicitação Recebida</h3>
            <p className="text-slate-300 max-w-sm mb-6 text-sm md:text-base">
              Sua solicitação de proposta comercial foi registrada com sucesso sob a nossa filosofia racional.
            </p>
            <div className="p-4 rounded-lg bg-navy-850 border border-gold-500/10 text-xs text-slate-400 max-w-sm mb-6">
              <span className="block font-semibold text-gold-500 mb-1">MOCK DATA — Lead Simulado</span>
              As informações foram capturadas com sucesso. Em um cenário real, estas informações seriam enviadas para o seu CRM ou caixa de entrada comercial.
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 transition-colors duration-200 text-sm font-semibold uppercase tracking-wider rounded-md cursor-pointer"
            >
              Fechar Janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
