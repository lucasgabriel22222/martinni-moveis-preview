import React from 'react';
import { Armchair, MapPin, Phone, Clock, Instagram, MessageCircle, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand & Address Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500">
                <Armchair className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight block">
                  {siteData.shortName}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                  Sofás & Camas de Alto Padrão em Cuiabá
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              {siteData.tagline}. Estruturas reforçadas, acabamentos nobres e fabricação sob medida para projetos de interiores modernos.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-semibold">Nota 5.0 no Google</span>
              <span className="text-slate-400">(41 avaliações de clientes)</span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleScrollTo(e, 'inicio')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  onClick={(e) => handleScrollTo(e, 'produtos')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Nossa Linha de Produtos
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  onClick={(e) => handleScrollTo(e, 'diferenciais')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Diferenciais Construtivos
                </a>
              </li>
              <li>
                <a
                  href="#avaliacoes"
                  onClick={(e) => handleScrollTo(e, 'avaliacoes')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Avaliações do Google (5.0)
                </a>
              </li>
              <li>
                <a
                  href="#localizacao"
                  onClick={(e) => handleScrollTo(e, 'localizacao')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Localização da Loja
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScrollTo(e, 'faq')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contato & Showroom
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{siteData.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a
                  href={siteData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-white font-medium"
                >
                  {siteData.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p>{siteData.openingHoursDetail.weekdays}</p>
                  <p>{siteData.openingHoursDetail.saturday}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-amber-500" />
                  <span>{siteData.instagramHandle}</span>
                </a>
                <a
                  href={siteData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-xs font-medium text-emerald-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            &copy; {currentYear} {siteData.name}. Todos os direitos reservados.
          </p>
          <p className="text-slate-600">
            Av. Oátomo Canavarros, 160 - Bela Vista, Cuiabá - MT · CEP: 78050-568
          </p>
        </div>
      </div>
    </footer>
  );
};
