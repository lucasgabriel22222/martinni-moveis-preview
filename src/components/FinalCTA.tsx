import React from 'react';
import { MessageCircle, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-slate-800">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Superior Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <span>Atendimento Direto & Personalizado</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto text-balance">
          Quer renovar sua sala ou quarto com sofás e camas de alto padrão?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Fale diretamente com a Martinni Móveis pelo WhatsApp, tire suas dúvidas e solicite um orçamento exclusivo.
        </p>

        {/* Large pulsing CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={siteData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white text-base sm:text-lg font-bold tracking-wide transition-all duration-300 shadow-xl shadow-amber-950/40 hover:-translate-y-1 active:translate-y-0"
          >
            {/* Subtle glow ring effect */}
            <span className="absolute -inset-1 rounded-2xl bg-amber-400/20 blur-sm group-hover:bg-amber-400/30 transition-all pointer-events-none" />
            <MessageCircle className="w-6 h-6 text-white shrink-0" />
            <span className="relative">Falar no WhatsApp Agora</span>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-400 pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Garantia de fábrica e assistência local</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Atendimento comercial: 09h às 18h</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Entrega e montagem em Cuiabá e região</span>
          </div>
        </div>
      </div>
    </section>
  );
};
