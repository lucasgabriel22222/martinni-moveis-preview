import React, { useState } from 'react';
import { MessageCircle, Eye, Check, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { siteData, Product, buildWhatsAppLink } from '../data/siteData';
import { ProductModal } from './ProductModal';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'todos'
    ? siteData.products
    : siteData.products.filter(p => p.category === selectedCategory);

  return (
    <section id="produtos" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            <span>Mobiliário Selecionado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Nossa Linha de Sofás e Camas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Peças projetadas com ergonomia precisa, espumas de alta densidade e revestimentos nobres para transformar salas de estar e quartos com máxima durabilidade e sofisticação.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control Buttons) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {siteData.categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const whatsappUrl = buildWhatsAppLink(product.name);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-slate-900/90 backdrop-blur-xs text-amber-300 shadow-xs">
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick View overlay button */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <button
                      type="button"
                      onClick={() => setSelectedProductForModal(product)}
                      className="pointer-events-auto px-4 py-2 rounded-lg bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-semibold shadow-md flex items-center gap-1.5 hover:bg-white transition-all transform scale-95 group-hover:scale-100"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-700" />
                      <span>Ver Detalhes</span>
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="uppercase tracking-wider font-semibold text-amber-700">
                        {product.categoryLabel}
                      </span>
                      {product.dimensions && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{product.dimensions}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2.5">
                      {product.name}
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Features snippet */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                      {product.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 group-hover:bg-amber-600 group-hover:hover:bg-amber-500"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Consultar Preço</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProductForModal(product)}
                      className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                      title="Ver mais especificações"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog Footer Helper */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Precisa de um modelo com medidas ou modulações específicas para sua planta?
          </p>
          <a
            href={siteData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors group"
          >
            <span>Fale com nossos consultores de sofás sob medida em Cuiabá</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />
    </section>
  );
};
