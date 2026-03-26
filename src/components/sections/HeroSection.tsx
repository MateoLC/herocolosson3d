import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[795px] flex flex-col justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-xl mx-auto md:mx-0">
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-primary mb-8">
          Tu empresa, impresa en el mundo
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-md mb-10 leading-relaxed">
          Transformamos la identidad corporativa en objetos físicos de alta precisión. Ingeniería industrial de lujo para marcas que no aceptan lo común.
        </p>
        <div className="flex flex-col gap-4">
          <button className="molten-gradient text-on-primary font-bold py-5 px-8 rounded text-center shadow-lg hover:brightness-110 transition-all">
            Solicitar Presupuesto
          </button>
          
          <div className="flex items-center gap-4 py-6 border-t border-outline-variant/15 mt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-high flex items-center justify-center text-[10px] font-bold">C3D</div>
              <div className="w-10 h-10 rounded-full border-2 border-background bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary">500+</div>
            </div>
            <span className="text-sm font-medium text-on-surface-variant">Empresas atendidas con éxito industrial.</span>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="relative mt-12 md:absolute md:top-1/2 md:right-4 md:-translate-y-[45%] w-full md:w-1/2 flex justify-center items-center z-20">
        <div className="relative w-full max-w-[280px] md:max-w-md flex justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-1000 -z-10"></div>
          <img 
            src="/tarjeta.png" 
            alt="Tarjeta NFC Colosson" 
            className="w-[130%] md:w-[150%] max-w-none h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-4 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
