import React from 'react';
import {
  ShieldCheck,
  Armchair,
  Bed,
  ThumbsUp,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { siteData } from '../data/siteData';

export const Differentials: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Armchair,
    Bed,
    ThumbsUp,
    MapPin,
    Clock,
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            <span>Padrão Martinni</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Diferenciais de Construção e Atendimento
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Cada detalhe dos nossos sofás e camas é concebido para oferecer durabilidade estrutural e bem-estar para famílias cuiabanas que não abrem mão de qualidade.
          </p>
        </div>

        {/* Grid of 6 practical differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.differentials.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-500/40 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Differentials */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Quer avaliar tecidos e acabamentos pessoalmente?
            </h4>
            <p className="text-sm text-slate-300">
              Venha visitar nosso showroom na Av. Oátomo Canavarros, 160 - Bela Vista, Cuiabá.
            </p>
          </div>

          <a
            href={siteData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm whitespace-nowrap shrink-0 transition-all shadow-md shadow-amber-950/20"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};
