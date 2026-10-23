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
      className="relative w-full h-[58px] sm:h-[62px] glass-card rounded-[13px] flex items-center justify-center text-center cursor-pointer overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.3)] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/40 hover:bg-black/40 active:translate-y-0 active:scale-[0.99] outline-none"
    >
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-sans text-[13px] sm:text-[15px] font-medium tracking-[3px] text-white uppercase">
          ENVÍOS
        </span>
        <span className="font-sans text-[8.5px] sm:text-[10px] font-normal tracking-[2.5px] text-white/75 uppercase">
          A TODO EL PAÍS
        </span>
      </div>
    </div>
  );
}
