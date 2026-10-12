import React from 'react';
import { Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export const SocialProof: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-semibold mb-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span>Nota 5.0 no Google Avaliações</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Transparência e satisfação real de quem comprou sofás e camas sob medida para suas casas em Cuiabá e região.
          </p>
        </div>

        {/* Aggregate Google rating summary card */}
        <div className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 flex flex-col items-center justify-center font-heading font-black text-2xl shrink-0">
              5.0
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-900">
                Classificação Máxima no Perfil da Empresa
              </p>
              <p className="text-xs text-slate-500">
                Baseado em 41 avaliações públicas no Google
              </p>
            </div>
          </div>

          <a
            href={siteData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header with stars & verification badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Avaliação Verificada no Google</span>
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-sm">
                    {item.name}
                  </h4>
                  {item.role && (
                    <span className="text-xs text-slate-500">
                      {item.role}
                    </span>
                  )}
                </div>
                <Quote className="w-6 h-6 text-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
