import React from 'react';

export default function LinkCard({ href, icon, title, subtitle, thumbSrc, thumbAlt, id }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      className="group relative w-full h-[58px] sm:h-[62px] glass-card glass-card-hover rounded-[13px] flex items-center justify-between overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.3)] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
    >
      {/* Lado izquierdo: Icono y Textos */}
      <div className="flex items-center gap-5 sm:gap-7 pl-5 sm:pl-[26px] z-10 flex-1">
        <div className="flex items-center justify-center text-white/95 shrink-0 transition-transform duration-250 group-hover:scale-105 group-hover:text-white">
          {icon}
        </div>
        <div className="flex flex-col justify-center gap-0.5">
          <span className="font-sans text-[13px] sm:text-[15px] font-medium tracking-[3px] text-white uppercase leading-tight">
            {title}
          </span>
          <span className="font-sans text-[8.5px] sm:text-[10px] font-normal tracking-[2.5px] text-white/75 uppercase leading-none">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Lado derecho: Thumbnail del producto/app con transición suave */}
      <div
        className="absolute top-0 right-0 h-full w-[46%] max-w-[275px] flex items-center justify-end pointer-events-none overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 38%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 38%)',
        }}
      >
        <img
          src={thumbSrc}
          alt={thumbAlt || title}
          className="h-full w-full object-cover object-right opacity-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
          loading="eager"
        />
      </div>
    </a>
  );
}
