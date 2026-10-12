import React, { useEffect, useState } from 'react';
import { Star, Award, Ruler, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const StatsBanner: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      value: "5.0 / 5.0",
      label: "Nota Máxima no Google",
      detail: "41+ avaliações verificadas de clientes de Cuiabá",
      icon: Star,
      iconColor: "text-amber-500 fill-amber-500",
    },
    {
      value: "Alto Padrão",
      label: "Conforto & Acabamento",
      detail: "Molas ensacadas, espumas D33 e madeiras nobres",
      icon: Award,
      iconColor: "text-amber-600",
    },
    {
      value: "Sob Medida",
      label: "Projeto Personalizado",
      detail: "Medidas milimétricas e 120+ tecidos exclusivos",
      icon: Ruler,
      iconColor: "text-amber-600",
    },
    {
      value: "Atendimento Direto",
      label: "Orçamento Ágil",
      detail: "Consultoria rápida e transparente via WhatsApp",
      icon: MessageCircle,
      iconColor: "text-amber-600",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-900 text-white overflow-hidden">
      {/* Background with Parallax Subtle Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] will-change-transform"
        style={{
          transform: `translateY(${(scrollY * 0.12) % 40}px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
                    <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
