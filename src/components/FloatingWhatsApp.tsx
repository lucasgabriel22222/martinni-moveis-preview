import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip on Hover */}
      <div
        className={`absolute right-16 mr-3 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-700 whitespace-nowrap transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Tire suas dúvidas no WhatsApp!</span>
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
      </div>

      {/* Floating Action Button with subtle pulse */}
      <a
        href={siteData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/30 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Falar com a Martinni Móveis no WhatsApp"
      >
        {/* Subtle pulsating halo */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />
        <MessageCircle className="w-7 h-7 text-white fill-white relative z-10 transition-transform group-hover:rotate-12 duration-200" />
      </a>
    </div>
  );
};
