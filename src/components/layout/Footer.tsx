import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] w-full py-12 px-6 border-t border-[#4F4634]/15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <div className="text-lg font-black text-[#F5F5F0] mb-4 font-headline uppercase tracking-tighter">
            Colosson3D
          </div>
          <p className="text-sm text-[#F5F5F0]/60 leading-relaxed mb-6">
            Industrial Excellence Defined. Fabricación aditiva de lujo para el mercado B2B Latinoamericano.
          </p>

        </div>
        
        <div>
          <h5 className="font-headline uppercase text-xs font-bold text-[#F5F5F0] mb-6 tracking-widest">
            Soluciones
          </h5>
          <ul className="space-y-3 text-sm">
            <li><a className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors" href="#">Technology</a></li>
            <li><a className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors" href="#">Materials</a></li>
            <li><a className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors" href="#">Industrial Spec</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-headline uppercase text-xs font-bold text-[#F5F5F0] mb-6 tracking-widest">
            Empresa
          </h5>
          <ul className="space-y-3 text-sm">
            <li><a className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors" href="#">Case Studies</a></li>
            <li><a className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors" href="#">Contact</a></li>
            <li><a className="text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors" href="#">Privacy Policy</a></li>
          </ul>
        </div>
        

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#4F4634]/10 text-center text-xs text-[#F5F5F0]/30">
        © 2024 Colosson3D. Industrial Excellence Defined.
      </div>
    </footer>
  );
}
