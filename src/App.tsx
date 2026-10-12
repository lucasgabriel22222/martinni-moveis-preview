import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { Differentials } from './components/Differentials';
import { SocialProof } from './components/SocialProof';
import { LocationHours } from './components/LocationHours';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-body selection:bg-amber-600 selection:text-white">
      {/* 1. NAVBAR (Header Fixo com barra de progresso de scroll) */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. HERO (Seção Principal com Parallax Real) */}
        <Hero />

        {/* 3. SEÇÃO DE ESTATÍSTICAS E DESTAQUES (BANNER PARALLAX) */}
        <StatsBanner />

        {/* 4. SEÇÃO PRODUTOS & CATEGORIAS */}
        <ProductCatalog />

        {/* 5. SEÇÃO DIFERENCIAIS */}
        <Differentials />

        {/* 6. SEÇÃO DE PROVA SOCIAL (AVALIAÇÕES DO GOOGLE) */}
        <SocialProof />

        {/* 7. SEÇÃO DE LOCALIZAÇÃO & HORÁRIOS */}
        <LocationHours />

        {/* 8. SEÇÃO FAQ (PERGUNTAS FREQUENTES) */}
        <FAQ />

        {/* 9. CTA FINAL (CHAMADA PARA AÇÃO DIRETA) */}
        <FinalCTA />
      </main>

      {/* 10. FOOTER (RODAPÉ) */}
      <Footer />

      {/* 11. BOTÃO FLUTUANTE DO WHATSAPP */}
      <FloatingWhatsApp />
    </div>
  );
}
