import React, { useEffect } from 'react';
import { X, MessageCircle, Truck } from 'lucide-react';
import { LEVJA_CONFIG } from '../config';

export default function Modal({ isOpen, onClose, modalType }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Modal para Fragancias
  if (modalType === '9pm' || modalType === 'montale') {
    const data = LEVJA_CONFIG.fragrances[modalType];
    const orderUrl = `https://wa.me/${LEVJA_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      modalType === '9pm' ? LEVJA_CONFIG.msg9pm : LEVJA_CONFIG.msgMontale
    )}`;

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-[440px] bg-gradient-to-br from-[#13161c] via-[#0d0f14] to-[#07080a] border border-slate-300/35 rounded-[20px] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.22)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón Cerrar */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/10 border border-slate-300/25 flex items-center justify-center text-white transition-all hover:bg-white/25 hover:border-white hover:scale-105"
          >
            <X size={18} />
          </button>

          {/* Cabecera del Producto */}
          <div className="flex items-center gap-4 mb-4.5">
            <div className="w-20 h-[105px] bg-white/[0.04] border border-slate-300/20 rounded-xl flex items-center justify-center p-1.5 shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <img
                src={data.image}
                alt={data.name}
                className="max-h-full max-w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] tracking-[2px] uppercase text-slate-300 font-medium">
                {data.brand}
              </span>
              <h3 className="font-sans text-[16px] font-bold tracking-[1.5px] text-white my-1">
                {data.name}
              </h3>
              <span className="self-start text-[8.5px] tracking-wider px-2 py-0.5 rounded-md border bg-slate-800/60 border-slate-400/30 text-slate-200">
                {data.subtitle}
              </span>
            </div>
          </div>

          {/* Descripción y Pirámide Olfativa */}
          <div className="mb-5">
            <p className="text-[10.5px] leading-relaxed text-slate-200/85 mb-3.5">
              {data.description}
            </p>

            <div className="flex flex-col gap-2">
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-slate-400/20 flex flex-col gap-0.5">
                <span className="text-[8px] font-bold tracking-[1.5px] text-slate-400 uppercase">SALIDA</span>
                <span className="text-[10px] text-white font-medium">{data.notes.salida}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-slate-400/20 flex flex-col gap-0.5">
                <span className="text-[8px] font-bold tracking-[1.5px] text-slate-400 uppercase">CORAZÓN</span>
                <span className="text-[10px] text-white font-medium">{data.notes.corazon}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-slate-400/20 flex flex-col gap-0.5">
                <span className="text-[8px] font-bold tracking-[1.5px] text-slate-400 uppercase">FONDO</span>
                <span className="text-[10px] text-white font-medium">{data.notes.fondo}</span>
              </div>
            </div>
          </div>

          {/* Botón Pedir por WhatsApp: Platino Líquido Cromado */}
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl font-sans text-[11px] font-bold tracking-[1.8px] flex items-center justify-center gap-2 uppercase transition-all bg-gradient-to-r from-white via-slate-100 to-slate-200 text-black hover:from-white hover:to-white hover:shadow-[0_0_24px_rgba(255,255,255,0.45)] hover:scale-[1.01] active:scale-[0.99]"
          >
            <MessageCircle size={18} />
            <span>PEDIR POR WHATSAPP</span>
          </a>
        </div>
      </div>
    );
  }

  // Modal para Información de Envíos
  if (modalType === 'envios') {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-[440px] bg-gradient-to-br from-[#13161c] via-[#0d0f14] to-[#07080a] border border-slate-300/35 rounded-[20px] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.22)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/10 border border-slate-300/25 flex items-center justify-center text-white transition-all hover:bg-white/25 hover:border-white hover:scale-105"
          >
            <X size={18} />
          </button>

          <div className="text-center mb-4">
            <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-slate-300/25 flex items-center justify-center mx-auto text-white shadow-[0_0_16px_rgba(255,255,255,0.15)]">
              <Truck size={24} />
            </div>
            <h3 className="font-sans text-[16px] font-bold tracking-[1.5px] text-white mt-2 mb-1">
              ENVÍOS A TODO EL PAÍS
            </h3>
            <span className="inline-block text-[8.5px] tracking-wider px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-400/30 text-slate-200">
              Cobertura Nacional Garantizada
            </span>
          </div>

          <div className="flex flex-col gap-3 mb-5 text-[10px] leading-relaxed text-slate-200/90">
            <div className="flex gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
              <div>
                <strong className="text-white">Logística Segura:</strong>
                <p className="text-slate-300/85">Despachos a través de Correo Argentino y Andreani a domicilio o sucursal.</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
              <div>
                <strong className="text-white">Embalaje de Alta Protección:</strong>
                <p className="text-slate-300/85">Fragancias aseguradas con triple capa de protección antichoque para máxima tranquilidad.</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
              <div>
                <strong className="text-white">Seguimiento en Tiempo Real:</strong>
                <p className="text-slate-300/85">Te enviamos el código de rastreo tan pronto tu paquete es despachado (24 a 48 hs hábiles).</p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-slate-400/30 bg-white/[0.04] text-slate-200 font-sans text-[10px] font-semibold tracking-wider hover:bg-white/10 hover:border-white hover:text-white transition-all uppercase"
          >
            ENTENDIDO
          </button>
        </div>
      </div>
    );
  }

  return null;
}
