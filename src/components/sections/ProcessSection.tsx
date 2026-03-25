import React from 'react';

export default function ProcessSection() {
  return (
    <section className="py-24 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-4xl font-bold mb-20 text-center">Protocolo de Producción</h2>
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="relative group">
            <div className="text-6xl font-black text-white font-headline absolute -top-8 -left-4 transition-all">01</div>
            <div className="relative pt-4">
              <h4 className="font-bold text-primary mb-3 text-lg">Briefing</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Analizamos tu ADN de marca para definir el concepto del objeto.</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="text-6xl font-black text-white font-headline absolute -top-8 -left-4 transition-all">02</div>
            <div className="relative pt-4">
              <h4 className="font-bold text-primary mb-3 text-lg">Prototipo</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Modelado 3D y muestra física para validación de texturas.</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="text-6xl font-black text-white font-headline absolute -top-8 -left-4 transition-all">03</div>
            <div className="relative pt-4">
              <h4 className="font-bold text-primary mb-3 text-lg">Producción</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Impresión industrial con supervisión técnica CNC paso a paso.</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="text-6xl font-black text-white font-headline absolute -top-8 -left-4 transition-all">04</div>
            <div className="relative pt-4">
              <h4 className="font-bold text-primary mb-3 text-lg">Entrega</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Logística asegurada con empaque de lujo personalizado.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
