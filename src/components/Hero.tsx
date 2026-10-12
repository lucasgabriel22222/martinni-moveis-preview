import React, { useEffect, useState } from 'react';
import { MessageCircle, ChevronDown, Sparkles, MapPin, Star, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Real parallax translation factor
      setOffsetY(window.scrollY * 0.35);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCatalog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with Real JS Parallax Effect */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        <img
          src="/src/assets/images/hero_luxury_sofa_living_room_1791831905577.jpg"
          alt="Sala de estar contemporânea com sofá sob medida de alto padrão Martinni Móveis em Cuiabá"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured dark gradient scrim for superior contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-16">
        <div className="max-w-3xl">
          {/* Superior Location & Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Loja de Sofás e Camas de Alto Padrão em Cuiabá - MT</span>
          </div>

          {/* Impactful H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-6 text-balance">
            Sofás Exclusivos, Camas e Móveis de Alto Padrão para o Seu Conforto
          </h1>

          {/* Objective Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl text-balance">
            Mobiliário de luxo fabricado com estruturas reforçadas, espumas de alta densidade e tecidos nobres. Modelos sob medida e pronta-entrega em nosso showroom no bairro Bela Vista, na Av. Oátomo Canavarros.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href={siteData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-amber-900/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>

            <a
              href="#produtos"
              onClick={scrollToCatalog}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Ver Catálogo de Produtos</span>
            </a>
          </div>

          {/* Quick Trust Highlights directly adjacent to Hero Action */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white ml-1">5.0 no Google</span>
              <span className="text-slate-400">(41 avaliações)</span>
            </div>
            <span className="text-white/30 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Fabricação sob medida</span>
            </div>
            <span className="text-white/30 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Showroom em Cuiabá</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator at Bottom of Hero */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
        <span className="text-[11px] uppercase tracking-widest text-slate-400 mb-1">Role para explorar</span>
        <ChevronDown className="w-5 h-5 text-amber-400 animate-bounce" />
      </div>
    </section>
  );
};
