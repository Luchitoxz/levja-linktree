import React from 'react';

export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div 
      role="status" 
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#16181e]/95 border border-white/25 px-5 py-2.5 rounded-full text-white text-[10.5px] tracking-wider backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.7)] whitespace-nowrap animate-slideUp"
    >
      {message}
    </div>
  );
}
