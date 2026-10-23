import React from 'react';

export default function Header() {
  return (
    <header className="text-center select-none pt-1 sm:pt-2 mb-1 sm:mb-2 shrink-0">
      <h1 
        className="font-serif text-[30px] sm:text-[40px] font-normal tracking-[0.3em] -mr-[0.3em] text-white uppercase leading-tight"
        style={{
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 255, 255, 0.18)'
        }}
      >
        LEVJA
      </h1>
      
      <div className="flex items-center justify-center gap-2.5 mt-1 sm:mt-1.5">
        <span className="inline-block h-[1px] w-8 sm:w-11 bg-gradient-to-r from-transparent via-white/65 to-transparent" />
        <span className="font-sans text-[8px] sm:text-[9.5px] font-medium tracking-[0.22em] text-white/85 uppercase whitespace-nowrap">
          PERFUMES · TECNOLOGÍA · ACCESORIOS
        </span>
        <span className="inline-block h-[1px] w-8 sm:w-11 bg-gradient-to-r from-transparent via-white/65 to-transparent" />
      </div>
    </header>
  );
}
