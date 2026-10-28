import React from 'react';

export default function Header() {
  return (
    <header className="text-center select-none pt-[1.8vh] sm:pt-[2.6vh] mb-[1.4vh] sm:mb-[1.8vh] shrink-0">
      <h1 
        className="font-serif text-[32px] sm:text-[42px] font-normal tracking-[0.3em] -mr-[0.3em] text-white uppercase leading-tight"
        style={{
          textShadow: '0 4px 25px rgba(0, 0, 0, 0.95), 0 0 30px rgba(226, 232, 240, 0.25)'
        }}
      >
        LEVJA
      </h1>
      
      <div className="flex items-center justify-center gap-2.5 mt-1 sm:mt-1.5">
        <span className="inline-block h-[1px] w-8 sm:w-11 bg-gradient-to-r from-transparent via-slate-300/75 to-transparent" />
        <span className="font-sans text-[8px] sm:text-[9.5px] font-medium tracking-[0.22em] text-slate-200 uppercase whitespace-nowrap drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          PERFUMES · TECNOLOGÍA · ACCESORIOS
        </span>
        <span className="inline-block h-[1px] w-8 sm:w-11 bg-gradient-to-r from-transparent via-slate-300/75 to-transparent" />
      </div>
    </header>
  );
}
