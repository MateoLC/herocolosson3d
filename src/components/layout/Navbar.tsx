import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-md shadow-[0_40px_60px_-10px_rgba(245,245,240,0.06)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-[#F5F5F0] font-headline">Colosson3D</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-[#F5F5F0] uppercase">Servicio</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
