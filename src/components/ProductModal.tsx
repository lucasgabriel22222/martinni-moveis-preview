import React from 'react';
import { X, MessageCircle, CheckCircle2, Ruler, Sparkles, ShieldCheck } from 'lucide-react';
import { Product, buildWhatsAppLink } from '../data/siteData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappUrl = buildWhatsAppLink(product.name);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div
          className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-2xl transition-all border border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Column */}
            <div className="relative h-64 md:h-full bg-slate-100 min-h-[300px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-xs font-semibold bg-amber-600 text-white shadow-xs">
                  {product.badge}
                </span>
              </div>
            </div>

            {/* Details Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-700">
                  {product.categoryLabel}
                </span>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mt-1 mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Diferenciais do Modelo:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dimensions and Fabric */}
                <div className="space-y-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-6 text-xs text-slate-700">
                  {product.dimensions && (
                    <div className="flex items-start gap-2">
                      <Ruler className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-semibold">Medidas: </strong>
                        <span>{product.dimensions}</span>
                      </div>
                    </div>
                  )}
                  {product.fabricOptions && (
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-semibold">Tecidos: </strong>
                        <span>{product.fabricOptions}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all shadow-md shadow-amber-900/20"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Consultar Preço no WhatsApp</span>
                </a>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Resposta rápida com catálogo de cores e prazos de entrega
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
