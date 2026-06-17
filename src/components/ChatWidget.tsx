"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  RefreshCw,
  X,
  Send,
  ArrowDown,
  Copy,
  Check,
  Sparkles,
  Bot
} from "lucide-react";

// Configurable defaults for easy brand customization
const CONFIG = {
  name: "Deryk Rodrigues",
  title: "Deryk Rodrigues",
  subtitle: "Assistente Virtual | Grupo LOGOS",
  statusTag: "Online",
  avatarIcon: "/images/logos-logo.png",
  initialGreeting: "Olá! Sou o assistente virtual do **Deryk Rodrigues** e do **Grupo LOGOS**. Com base em nossa filosofia de tomada de decisões orientada à razão e alta performance, como posso auxiliar sua empresa hoje?",
  suggestionChips: [
    { label: "Entenda o Método Racional", question: "Qual é a filosofia do Grupo LOGOS e por que ela é baseada na razão e não em motivação passageira?" },
    { label: "Sobre Deryk Rodrigues", question: "Quem é Deryk Rodrigues e qual o seu método de oratória e formação?" },
    { label: "Temas das Palestras", question: "Quais são os 6 módulos de palestras oferecidos por Deryk?" }
  ],
  apiEndpoint: "/api/chat"
};

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  isGreeting?: boolean;
}

// ---------------------------------------------------------
// Custom JSX Code Block Renderer
// ---------------------------------------------------------
const CodeBlock = ({ code, language }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar código:", err);
    }
  };

  return (
    <div className="relative my-4 group rounded-lg border border-gold-500/15 overflow-hidden font-sans">
      <div className="flex items-center justify-between bg-navy-950 px-4 py-2 border-b border-gold-500/10">
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
          {language || "código"}
        </span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-green-400" />
              <span className="text-[9px] font-mono text-green-400">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span className="text-[9px] font-mono">Copiar</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 bg-navy-900/40 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed select-text">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ---------------------------------------------------------
// Custom Inline Markdown Renderer
// ---------------------------------------------------------
const renderInlineMarkdown = (text: string) => {
  let parts: (string | React.ReactNode)[] = [text];

  // 1. Bold: **text**
  parts = parts.flatMap((p) => {
    if (typeof p !== "string") return p;
    const split = p.split(/\*\*([^*]+)\*\*/g);
    return split.map((chunk, idx) =>
      idx % 2 === 1 ? (
        <strong key={`bold-${idx}`} className="font-bold text-gold-400">
          {chunk}
        </strong>
      ) : (
        chunk
      )
    );
  });

  // 2. Links: [text](url)
  parts = parts.flatMap((p) => {
    if (typeof p !== "string") return p;
    const split = p.split(/\[([^\]]+)\]\(([^)]+)\)/g);
    const result = [];
    for (let i = 0; i < split.length; i++) {
      if (i % 3 === 0) {
        result.push(split[i]);
      } else if (i % 3 === 1) {
        const linkText = split[i];
        const linkUrl = split[i + 1];
        result.push(
          <a
            key={`link-${i}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 underline underline-offset-4 font-semibold transition-all duration-200 decoration-gold-500/30 hover:decoration-gold-400"
          >
            {linkText}
          </a>
        );
        i++;
      }
    }
    return result;
  });

  // 3. Inline code: `code`
  parts = parts.flatMap((p) => {
    if (typeof p !== "string") return p;
    const split = p.split(/`([^`]+)`/g);
    return split.map((chunk, idx) =>
      idx % 2 === 1 ? (
        <code
          key={`code-${idx}`}
          className="px-1.5 py-0.5 rounded bg-navy-950 border border-gold-500/15 text-gold-300 font-mono text-xs"
        >
          {chunk}
        </code>
      ) : (
        chunk
      )
    );
  });

  return parts;
};

// ---------------------------------------------------------
// Custom Block Markdown & Table Parser
// ---------------------------------------------------------
const parseMarkdownBlocks = (text: string): React.ReactNode[] => {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    // Headers
    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${i}`}
          className="text-xl font-serif text-white border-b border-gold-500/20 pb-1.5 mb-3 mt-4"
        >
          {renderInlineMarkdown(line.slice(2))}
        </h1>
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-lg font-serif text-gold-400 border-b border-gold-500/10 pb-1 mb-2.5 mt-3"
        >
          {renderInlineMarkdown(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-base font-serif text-slate-200 mb-2 mt-2.5">
          {renderInlineMarkdown(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Code blocks
    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      let codeContent = "";
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeContent += lines[i] + "\n";
        i++;
      }
      i++;
      elements.push(
        <CodeBlock key={`cb-${i}`} code={codeContent.trim()} language={language} />
      );
      continue;
    }

    // Unordered lists
    if (line.startsWith("- ") || line.startsWith("* ") || line.startsWith("➜ ")) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].startsWith("- ") || lines[i].startsWith("* ") || lines[i].startsWith("➜ "))
      ) {
        listItems.push(lines[i].replace(/^[-*➜]\s+/, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-1.5 my-3 pl-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-gold-400 select-none mt-1 shrink-0 text-xs">➜</span>
              <span className="leading-relaxed font-light">{renderInlineMarkdown(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered lists
    if (line.match(/^\d+\.\s/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        listItems.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-1.5 my-3 pl-1 list-decimal list-inside text-slate-300">
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className="text-sm leading-relaxed marker:text-gold-400 marker:font-bold font-light"
            >
              <span className="pl-1">{renderInlineMarkdown(item)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Tables
    if (line.startsWith("|")) {
      const tableRows: string[][] = [];
      let headerRow: string[] = [];
      let isHeader = true;

      while (i < lines.length && lines[i].startsWith("|")) {
        const rowContent = lines[i]
          .split("|")
          .map((cell) => cell.trim())
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

        if (lines[i].match(/^\|[\s-|-]*\|$/)) {
          i++;
          continue;
        }

        if (isHeader) {
          headerRow = rowContent;
          isHeader = false;
        } else {
          tableRows.push(rowContent);
        }
        i++;
      }

      if (headerRow.length > 0) {
        elements.push(
          <div
            key={`tbl-${i}`}
            className="overflow-x-auto my-4 border border-gold-500/10 rounded-lg font-sans"
          >
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-navy-950 border-b border-gold-500/20">
                  {headerRow.map((cell, idx) => (
                    <th
                      key={idx}
                      className="p-2.5 font-sans font-bold text-gold-400 uppercase tracking-wider text-[10px]"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-navy-900/40">
                {tableRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-navy-850/50 transition-colors duration-150">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-2.5 text-slate-300 font-light">
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // Paragraph
    elements.push(
      <p key={`p-${i}`} className="text-sm text-slate-300 leading-relaxed mb-3 font-light">
        {renderInlineMarkdown(line)}
      </p>
    );
    i++;
  }

  return elements;
};

// ---------------------------------------------------------
// Individual Message Balloon Component
// ---------------------------------------------------------
interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar mensagem:", err);
    }
  };

  const isBot = message.sender === "bot";

  return (
    <div className={`flex flex-col mb-4 max-w-[85%] ${isBot ? "self-start" : "self-end"}`}>
      {/* Sender Header Name (Clean, Premium, Corporate style) */}
      <div className="flex justify-between items-center px-1 mb-1 text-xs">
        <span
          className={
            isBot
              ? "font-serif font-semibold text-gold-400 tracking-wide"
              : "font-sans font-medium text-slate-400"
          }
        >
          {isBot ? CONFIG.name : "Você"}
        </span>
        {isBot && !message.isGreeting && (
          <button
            onClick={handleCopy}
            className="text-slate-500 hover:text-gold-400 transition-colors duration-200 flex items-center gap-1 cursor-pointer font-sans text-[10px]"
            title="Copiar mensagem"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-green-400" />
                <span className="text-green-400 font-medium">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copiar</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Message Balloon */}
      <div
        className={`p-4 rounded-xl border select-text ${
          isBot
            ? "bg-navy-900/90 text-slate-200 border-gold-500/10 rounded-tl-none shadow-lg"
            : "bg-navy-850/95 text-gold-300 border-gold-500/20 rounded-tr-none shadow-md"
        }`}
      >
        {isBot ? (
          <div>{parseMarkdownBlocks(message.text)}</div>
        ) : (
          <p className="text-sm leading-relaxed font-light break-words">{message.text}</p>
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// Main ChatWidget Component
// ---------------------------------------------------------
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Body Scroll Lock logic using data-scroll-locks
  useEffect(() => {
    if (isOpen) {
      const currentLocks = parseInt(document.body.getAttribute("data-scroll-locks") || "0", 10);
      document.body.setAttribute("data-scroll-locks", (currentLocks + 1).toString());
      document.body.style.overflow = "hidden";

      if (window.innerWidth > 768) {
        inputRef.current?.focus();
      }
    } else {
      const currentLocks = parseInt(document.body.getAttribute("data-scroll-locks") || "0", 10);
      const newLocks = Math.max(0, currentLocks - 1);
      document.body.setAttribute("data-scroll-locks", newLocks.toString());

      if (newLocks === 0) {
        document.body.style.overflow = "";
      }
    }

    return () => {
      const currentLocks = parseInt(document.body.getAttribute("data-scroll-locks") || "0", 10);
      const newLocks = Math.max(0, currentLocks - 1);
      if (newLocks === 0) {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  // Load greeting immediately when chat opens for the first time
  const handleOpenChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          id: "greeting",
          sender: "bot",
          text: CONFIG.initialGreeting,
          isGreeting: true,
        },
      ]);
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "greeting",
        sender: "bot",
        text: CONFIG.initialGreeting,
        isGreeting: true,
      },
    ]);
  };

  // Scroll logic
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    setShowScrollBtn(distanceFromBottom > 150);
  };

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({
      top: scrollContainerRef.current.scrollHeight,
      behavior,
    });
  };

  // Auto scroll
  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages, isLoading]);

  // Submit handler
  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      const res = await fetch(CONFIG.apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: textToSend,
          history: historyPayload,
        }),
      });

      if (!res.ok) throw new Error("Erro na requisição.");

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: data.response || "Sem resposta do servidor.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Desculpe, ocorreu um erro de conexão ao tentar se comunicar com o assistente virtual. Por favor, tente novamente em instantes.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* A. FLOATING TRIGGER BUTTON */}
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end ${isOpen ? "hidden md:flex" : "flex"}`}>
        {/* Banner Indicativo / Balão de Ativação Corporativo */}
        {!isOpen && (
          <div className="mb-2.5 bg-navy-950/95 border border-gold-500/30 rounded-lg px-3 py-1.5 text-xs font-sans tracking-wide shadow-xl flex items-center gap-2 select-none">
            <span className="text-gold-400 font-semibold">Fale com Deryk AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          </div>
        )}

        {/* Main trigger button */}
        <button
          onClick={isOpen ? handleCloseChat : handleOpenChat}
          className="w-14 h-14 rounded-full bg-navy-950 border border-gold-500/25 hover:border-gold-500/60 shadow-2xl flex items-center justify-center text-gold-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_22px_rgba(212,175,55,0.25)] cursor-pointer group"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Bot className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* B. BACKDROP BLUR (Mobile Only) */}
      {isOpen && (
        <div
          onClick={handleCloseChat}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden transition-all duration-300"
        />
      )}

      {/* C. CHAT CONTAINER WINDOW */}
      {isOpen && (
        <div
          className={`fixed z-50 bg-navy-950/95 border border-gold-500/20 shadow-2xl flex flex-col font-sans overflow-hidden transition-all duration-300
            ${
              /* Desktop state styles */
              "md:bottom-24 md:right-6 md:left-auto md:w-[450px] md:h-[600px] md:rounded-2xl"
            }
            ${
              /* Mobile state styles (Bottom Sheet style) */
              "bottom-0 left-0 right-0 h-[88dvh] rounded-t-2xl md:rounded-b-2xl border-b-0 md:border-b"
            }
          `}
          style={{
            paddingBottom: "env(safe-area-inset-bottom, 0px)"
          }}
        >
          {/* 1. Header (Premium Style) */}
          <div className="flex items-center justify-between bg-navy-900 px-5 py-4 border-b border-gold-500/15 shrink-0 select-none">
            {/* Logo/Icon & Title */}
            <div className="flex items-center gap-3">
              {/* Logo do Site */}
              <div className="w-10 h-10 rounded-full border border-gold-500/35 bg-navy-950 flex items-center justify-center overflow-hidden shadow-md shrink-0 select-none">
                <img
                  src={CONFIG.avatarIcon}
                  alt="Logo Grupo LOGOS"
                  className="w-6.5 h-6.5 object-contain opacity-90 filter invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-serif font-semibold text-white tracking-wide">
                  {CONFIG.title}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-slate-400 font-sans tracking-wide">
                    {CONFIG.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1.5">
              {/* Reset Chat */}
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:bg-navy-850 border border-transparent hover:border-gold-500/10 text-slate-400 hover:text-gold-400 transition-all duration-200 cursor-pointer"
                title="Reiniciar Conversa"
              >
                <RefreshCw className="h-4 w-4" />
              </button>

              {/* Close Widget */}
              <button
                onClick={handleCloseChat}
                className="p-1.5 rounded-lg hover:bg-navy-850 border border-transparent hover:border-gold-500/10 text-slate-400 hover:text-red-400 transition-all duration-200 cursor-pointer"
                title="Fechar Chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Drag/Close Indicator Bar */}
          <div
            onClick={handleCloseChat}
            className="w-full flex justify-center py-2.5 bg-navy-900 border-b border-gold-500/5 cursor-pointer md:hidden active:bg-navy-850/50 shrink-0"
          >
            <div className="w-12 h-1 bg-slate-700/60 rounded-full" />
          </div>

          {/* 2. Scrollable Messages Area */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex-grow overflow-y-auto px-5 py-5 flex flex-col bg-linear-to-b from-navy-950 via-navy-950 to-navy-900"
          >
            {/* Render Messages */}
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}

            {/* Bouncing Dots Loader (Premium Corporate Aesthetic) */}
            {isLoading && (
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-navy-900/60 border border-gold-500/10 my-2 self-start max-w-[85%] animate-pulse">
                <div className="flex items-center gap-1 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2.5 h-2.5 rounded-full bg-gold-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span className="text-xs font-serif italic text-gold-400/90 select-none">
                  Deryk está formulando uma resposta...
                </span>
              </div>
            )}

            {/* Elegant Suggestion Chips (Corporate Pill style) */}
            {messages.length === 1 && (
              <div className="mt-4 shrink-0 select-none">
                <span className="block text-[10px] font-sans text-slate-500 uppercase tracking-widest mb-3 font-semibold">
                  Tópicos de Interesse:
                </span>
                <div className="flex flex-col gap-2.5">
                  {CONFIG.suggestionChips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.question)}
                      className="text-left px-4 py-3 rounded-lg bg-navy-900/80 border border-gold-500/10 hover:border-gold-500/40 text-slate-300 hover:text-gold-400 text-xs transition-all duration-300 font-light hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] cursor-pointer flex items-center justify-between group"
                    >
                      <span className="font-sans font-medium">{chip.label}</span>
                      <Sparkles className="h-3.5 w-3.5 text-gold-500/30 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Floating Scroll to Bottom helper */}
          {showScrollBtn && (
            <button
              onClick={() => scrollToBottom("smooth")}
              className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 font-semibold px-4 py-2 rounded-full text-xs shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-1.5 z-40 select-none font-sans"
            >
              <ArrowDown className="h-3.5 w-3.5" />
              Ver novas mensagens
            </button>
          )}

          {/* 3. Input Form (Elegant borderless corporate input) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="bg-navy-900 p-4 border-t border-gold-500/15 shrink-0 flex items-center gap-3"
          >
            {/* Input Wrapper */}
            <div className="flex-grow flex items-center bg-navy-950 border border-gold-500/10 focus-within:border-gold-500/35 rounded-xl px-4 py-2.5 transition-all duration-300">
              <Sparkles className="h-4 w-4 text-gold-500/40 shrink-0 mr-2.5" />
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={isLoading ? "Aguarde..." : "Como posso ajudar sua empresa hoje?"}
                disabled={isLoading}
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-hidden font-sans disabled:opacity-50 select-text"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-3 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-600 disabled:bg-slate-800 disabled:text-slate-500 transition-all duration-300 shadow-md cursor-pointer shrink-0 disabled:cursor-not-allowed hover:scale-102 flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
