import React from 'react';
import { ChevronRight } from 'lucide-react';

function PerfumeInfo({ line1, line2, brand, desc, onClick, label }) {
  return (
    <div className="relative z-10 flex flex-col items-start text-left">
      <span className="font-sans text-[12px] sm:text-[17px] font-semibold tracking-[1.5px] sm:tracking-[2px] text-white leading-[1.22] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
        {line1}
        <br />
        {line2}
      </span>
      <span className="font-sans text-[8px] sm:text-[9.5px] tracking-[2px] sm:tracking-[2.5px] text-white/75 uppercase mt-1 sm:mt-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
        {brand}
      </span>
      <span className="block w-5 sm:w-6 h-px bg-white/55 mt-2 sm:mt-3" />
      <p className="font-sans text-[8.5px] sm:text-[11px] leading-[1.4] sm:leading-[1.45] tracking-[0.3px] sm:tracking-[0.5px] text-white/85 mt-2 sm:mt-3 mb-3 sm:mb-5 max-w-[92px] sm:max-w-[118px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
        {desc}
      </p>
      <button
        onClick={onClick}
        aria-label={label}
        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-black/45 border border-white/65 rounded-full text-white font-sans text-[7.5px] sm:text-[9px] font-medium tracking-[1.5px] sm:tracking-[2px] uppercase whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white hover:shadow-[0_0_14px_rgba(255,255,255,0.25)] hover:-translate-y-0.5"
      >
        VER MÁS <ChevronRight size={10} strokeWidth={2} className="sm:w-[11px] sm:h-[11px]" />
      </button>
    </div>
  );
}

export default function FeaturedSection({ onOpenModal }) {
  return (
    <section className="w-full select-none" aria-label="Fragancias destacadas">
      <div className="relative w-full h-[290px] sm:h-[330px] overflow-hidden rounded-[14px] border border-white/35 bg-black/20 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">

        {/* Escena de fondo: perfumes sobre las rocas volcánicas */}
        <img
          src="/assets/featured_scene.webp"
          alt="Afnan 9PM Night Out y Montale Arabians Tonka sobre rocas volcánicas"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          loading="eager"
        />

        {/* Viñetas laterales suaves para máxima legibilidad del texto como en el mockup */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,11,14,0.72) 0%, rgba(10,11,14,0.38) 24%, transparent 36%, transparent 64%, rgba(10,11,14,0.38) 76%, rgba(10,11,14,0.72) 100%)',
          }}
        />

        {/* Cabecera */}
        <div className="relative z-10 text-center pt-3 sm:pt-3.5">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="h-px w-12 sm:w-[76px] bg-gradient-to-r from-transparent to-white/60" />
            <h2 className="font-sans text-[9.5px] sm:text-[11px] font-normal tracking-[2.5px] sm:tracking-[3px] text-white/95 uppercase">
              Fragancias destacadas
            </h2>
            <span className="h-px w-12 sm:w-[76px] bg-gradient-to-l from-transparent to-white/60" />
          </div>
          <span className="block font-sans text-[8px] sm:text-[9px] tracking-[2px] sm:tracking-[2.5px] text-white/65 uppercase mt-1">
            Dos íconos, un estilo
          </span>
        </div>

        {/* Contenido en 3 columnas (Info Izquierda | Frascos Centro | Info Derecha) */}
        <div className="relative z-10 grid grid-cols-[1fr_175px_1fr] sm:grid-cols-[1fr_270px_1fr] px-3.5 sm:px-6 h-[calc(100%-44px)] sm:h-[calc(100%-48px)] items-center">
          <PerfumeInfo
            line1="9PM"
            line2="Night Out"
            brand="Afnan"
            desc="Una fragancia moderna, intensa y envolvente."
            onClick={() => onOpenModal('9pm')}
            label="Ver más sobre 9PM Night Out"
          />

          {/* Hotspots interactivos sobre ambos frascos */}
          <div className="flex h-full">
            <button
              onClick={() => onOpenModal('9pm')}
              aria-label="Ver detalles de 9PM Night Out"
              className="group relative w-1/2 h-full cursor-pointer"
            >
              <span className="absolute inset-x-2 top-[20%] h-[55%] rounded-full opacity-0 blur-2xl bg-white/15 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => onOpenModal('montale')}
              aria-label="Ver detalles de Arabians Tonka"
              className="group relative w-1/2 h-full cursor-pointer"
            >
              <span className="absolute inset-x-2 top-[20%] h-[55%] rounded-full opacity-0 blur-2xl bg-[#d4af37]/20 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>

          <div className="justify-self-end sm:pr-1">
            <PerfumeInfo
              line1="Arabians"
              line2="Tonka"
              brand="Montale"
              desc="Un aroma exótico, elegante y sofisticado."
              onClick={() => onOpenModal('montale')}
              label="Ver más sobre Arabians Tonka"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
