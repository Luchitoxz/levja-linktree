import React from 'react';

export default function Header() {
  return (
    <header className="text-center mb-[30px] sm:mb-[60px] select-none">
      <h1 
        className="font-serif text-[40px] sm:text-[50px] font-normal tracking-[0.3em] -mr-[0.3em] text-white uppercase leading-[1.1]"
        style={{
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 255, 255, 0.18)'
        }}
      >
        LEVJA
      </h1>
      
      <div className="flex items-center justify-center gap-3 mt-2.5">
        <span className="inline-block h-[1px] w-11 bg-gradient-to-r from-transparent via-white/65 to-transparent" />
        <span className="font-sans text-[9.5px] font-medium tracking-[0.22em] text-white/85 uppercase whitespace-nowrap">
          PERFUMES · TECNOLOGÍA · ACCESORIOS
        </span>
        <span className="inline-block h-[1px] w-11 bg-gradient-to-r from-transparent via-white/65 to-transparent" />
      </div>
    </header>
  );
}
