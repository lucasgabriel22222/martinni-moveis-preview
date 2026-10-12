import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, CheckCircle2 } from 'lucide-react';
import { siteData } from '../data/siteData';

export const LocationHours: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [cuiabaTimeStr, setCuiabaTimeStr] = useState<string>('');

  useEffect(() => {
    const checkCuiabaHours = () => {
      try {
        // Cuiabá is in America/Cuiaba (UTC-4)
        const now = new Date();
        const cuiabaDateStr = now.toLocaleString("en-US", { timeZone: "America/Cuiaba" });
        const cuiabaDate = new Date(cuiabaDateStr);
        const day = cuiabaDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
        const hour = cuiabaDate.getHours();
        const minute = cuiabaDate.getMinutes();

        // Mon-Sat: 09:00 - 18:00
        const isWorkingDay = day >= 1 && day <= 6;
        const isWorkingHours = hour >= 9 && hour < 18;

        setIsOpenNow(isWorkingDay && isWorkingHours);

        const formattedTime = cuiabaDate.toLocaleTimeString("pt-BR", {
          hour: '2-digit',
          minute: '2-digit',
        });
        setCuiabaTimeStr(formattedTime);
      } catch (err) {
        // Fallback default
        setIsOpenNow(true);
      }
    };

    checkCuiabaHours();
    const interval = setInterval(checkCuiabaHours, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            <span>Visite Nosso Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-4">
            Nossa Loja em Cuiabá
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ambiente aconchegante, estacionamento facilitado e equipe de consultoria pronta para auxiliar na escolha de tecidos, espumas e dimensões ideais.
          </p>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          {/* Column 1: Practical Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="space-y-6">
              {/* Real-time open/closed status badge */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isOpenNow ? 'bg-emerald-500' : 'bg-slate-400'
                    }`}
                  />
                  <span className="text-xs font-bold text-slate-800">
                    {isOpenNow ? 'Loja Aberta Agora' : 'Loja Fechada no Momento'}
                  </span>
                </div>
                {cuiabaTimeStr && (
                  <span className="text-xs text-slate-500">
                    Cuiabá: {cuiabaTimeStr}
                  </span>
                )}
              </div>

              {/* Address card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Endereço Completo
                  </h3>
                  <p className="text-sm text-slate-700 font-medium">
                    {siteData.street}
                  </p>
                  <p className="text-xs text-slate-600">
                    Bairro {siteData.neighborhood}, {siteData.city} - {siteData.state}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    CEP: {siteData.cep}
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Telefone & WhatsApp
                  </h3>
                  <a
                    href={siteData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-slate-900 font-bold hover:text-amber-700 transition-colors"
                  >
                    {siteData.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Atendimento comercial rápido e envio de fotos
                  </p>
                </div>
              </div>

              {/* Working Hours card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-sm text-slate-800 font-medium">
                    {siteData.openingHoursDetail.weekdays}
                  </p>
                  <p className="text-sm text-slate-800 font-medium">
                    {siteData.openingHoursDetail.saturday}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {siteData.openingHoursDetail.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-3">
              <a
                href={siteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Como Chegar via Google Maps</span>
              </a>

              <a
                href={siteData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Falar com Atendente no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Google Maps Iframe (7 cols) */}
          <div className="lg:col-span-7 h-full min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs relative bg-slate-100">
            <iframe
              title="Localização da Martinni Móveis em Cuiabá - Av. Oátomo Canavarros, 160"
              src="https://maps.google.com/maps?q=Av.+O%C3%A1tomo+Canavarros,+160+-+Bela+Vista,+Cuiab%C3%A1+-+MT,+78050-568&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] lg:min-h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
