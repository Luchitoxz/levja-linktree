import React from 'react';

export default function EnviosCard({ onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      title="Información sobre envíos a todo el país"
      className="relative w-full h-[40px] sm:h-[46px] glass-card rounded-[11px] sm:rounded-[13px] flex items-center justify-center text-center cursor-pointer overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.3)] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/40 hover:bg-black/40 active:translate-y-0 active:scale-[0.99] outline-none shrink-0"
    >
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-sans text-[11.5px] sm:text-[13.5px] font-medium tracking-[2.5px] sm:tracking-[3px] text-white uppercase leading-tight">
          ENVÍOS
        </span>
        <span className="font-sans text-[7px] sm:text-[8.5px] font-normal tracking-[2px] sm:tracking-[2.5px] text-white/75 uppercase leading-none">
          A TODO EL PAÍS
        </span>
      </div>
    </div>
  );
}
