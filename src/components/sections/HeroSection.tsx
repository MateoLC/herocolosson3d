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
      
      {/* Floating Mockup Placeholder */}
      <div className="relative mt-12 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-72 h-48 glass-card rounded-xl border border-outline-variant/20 shadow-2xl rotate-12 flex flex-col p-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl"></div>
          <span className="material-symbols-outlined text-primary mb-auto" data-icon="nfc">nfc</span>
          <div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">Industrial Series</div>
            <div className="font-headline text-xl font-bold">METAL-PLATE NFC</div>
          </div>
        </div>
        
        <div className="absolute -z-10 w-full h-full">
          <img 
            className="w-full h-full object-contain opacity-30 mix-blend-screen" 
            alt="Abstract 3D golden mesh flowing pattern" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA59ZSwL-r3rI5nC3sR2LoNHOpw5SY7gJYd4s8bP-_ibdH0xathvooGDWGcW53FzGI1F0IYewqb0UFlUllkNpv1tSELTgYQN5jMAG4ctEsti6pBNmZggwoPJ7Zb8C1ze8EQDPC52fs8hLDn4vVLemXP8ZygBh_izB3S9kXivSHuj-KJodU000ipPeHAz1MAat578IaB933EfnHNX0-vMZrbe561n4qcUab7ipVjr6mMuRG6MS8DNTs9wDWsU3VWN3xALl7sQI7Sa2sq"
          />
        </div>
      </div>
    </section>
  );
}
