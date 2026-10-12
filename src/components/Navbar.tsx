import React, { useState, useEffect } from 'react';
import { Armchair, MessageCircle, Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollRatio = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scrollRatio);
      setIsScrolled(totalScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sofás', href: '#produtos?cat=sofas' },
    { name: 'Camas', href: '#produtos?cat=camas' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href.startsWith('#produtos?cat=')) {
      const element = document.getElementById('produtos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the absolute top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200/50">
        <div
          className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Left Zone: Brand Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-amber-500 transition-transform group-hover:scale-105 duration-200 shadow-xs">
                <Armchair className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-tight">
                  MARTINNI MÓVEIS
                </span>
                <span className="text-[10px] uppercase tracking-wider text-amber-700 font-semibold leading-none">
                  Sofás & Camas Cuiabá
                </span>
              </div>
            </a>

            {/* Center Zone: Clean single-line text links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-amber-700 transition-colors whitespace-nowrap shrink-0 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Zone: Primary CTA Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={siteData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-amber-400 sm:hidden hover:bg-slate-800 transition-colors"
                aria-label="Orçamento WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1 divide-y divide-slate-100">
              <div className="py-2 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:text-amber-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-600 px-3">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>Av. Oátomo Canavarros, 160 - Bela Vista</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 px-3">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Seg a Sáb: 09h às 18h</span>
                </div>

                <a
                  href={siteData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-amber-400" />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
