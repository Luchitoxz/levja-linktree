import React from 'react';
import { Share2 } from 'lucide-react';

export default function ShareButton({ onShare }) {
  return (
    <div className="fixed top-3.5 right-3.5 z-40">
      <button
        onClick={onShare}
        title="Compartir enlace"
        aria-label="Compartir enlace"
        className="w-9 h-9 rounded-full bg-[#121317]/65 border border-white/15 flex items-center justify-center text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#1e2026]/90 hover:border-white/35 active:scale-95"
      >
        <Share2 size={16} strokeWidth={1.8} />
      </button>
    </div>
  );
}
