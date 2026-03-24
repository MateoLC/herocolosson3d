import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-md shadow-[0_40px_60px_-10px_rgba(245,245,240,0.06)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#F6BE39]" data-icon="precision_manufacturing">
            precision_manufacturing
          </span>
          <span className="text-xl font-bold tracking-tighter text-[#F5F5F0] font-headline">Colosson3D</span>
        </div>
        <button className="bg-[#F6BE39] text-[#402D00] px-4 py-2 rounded text-sm font-bold tracking-tight hover:scale-95 transition-transform">
          GET STARTED
        </button>
      </div>
    </nav>
  );
}
