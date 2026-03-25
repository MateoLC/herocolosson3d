import React from 'react';

export default function SuccessCasesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-headline text-3xl font-bold mb-12 text-center md:text-left">Casos de Éxito Industrial</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Case 1 */}
        <div className="bg-surface-container rounded-md p-1 group hover:bg-primary transition-colors duration-300 overflow-hidden shadow-2xl">
          <div className="bg-background h-full flex flex-col rounded-sm overflow-hidden">
            <div className="w-full h-72 overflow-hidden relative">
              <img src="/images/1.jpeg" alt="Caso de Éxito NFC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
              <div className="text-primary font-black mb-4 group-hover:text-primary transition-colors text-xl">TECH-CORP</div>
              <p className="text-sm text-on-surface-variant mb-6 italic leading-relaxed">"Logramos un 40% más de retención en clientes clave gracias a los kits NFC de Colosson."</p>
              <div className="mt-auto pt-6 border-t border-outline-variant/15 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-tighter">NFC Onboarding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="bg-surface-container rounded-md p-1 group hover:bg-primary transition-colors duration-300 overflow-hidden shadow-2xl">
          <div className="bg-background h-full flex flex-col rounded-sm overflow-hidden">
            <div className="w-full h-72 overflow-hidden relative">
              <img src="/images/2.jpeg" alt="Caso de Éxito 3D Modeling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
              <div className="text-primary font-black mb-4 text-xl">LUXURY REALTY</div>
              <p className="text-sm text-on-surface-variant mb-6 italic leading-relaxed">"Las maquetas 3D paramétricas para nuestros cierres de venta son ahora un estándar de lujo."</p>
              <div className="mt-auto pt-6 border-t border-outline-variant/15 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-tighter">3D Modeling</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
