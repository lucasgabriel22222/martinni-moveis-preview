import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FAQ: React.FC = () => {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>(siteData.faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Respostas diretas sobre prazos de entrega, fabricação sob medida, opções de pagamento e atendimento em Cuiabá.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteData.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-amber-500/40 shadow-sm'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-amber-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helper Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200/80">
          <p className="text-sm text-slate-700 mb-3">
            Tem alguma dúvida específica sobre dimensões ou tecidos que não encontrou aqui?
          </p>
          <a
            href={siteData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>Perguntar aos Especialistas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
