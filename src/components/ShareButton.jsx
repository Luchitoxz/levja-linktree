import React from 'react';
import { Share2 } from 'lucide-react';

export default function ShareButton({ onShare }) {
  return (
    <div className="fixed top-3.5 right-3.5 z-40">
      <button
        onClick={onShare}
        title="Compartir enlace"
        aria-label="Compartir enlace"
        className="w-9 h-9 rounded-full bg-[#101217]/70 border border-slate-300/30 flex items-center justify-center text-slate-100 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#1a1e27] hover:border-white hover:text-white hover:shadow-[0_0_14px_rgba(226,232,240,0.3)] active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]"
      >
        <Share2 size={16} strokeWidth={1.8} />
      </button>
    </div>
  );
}
