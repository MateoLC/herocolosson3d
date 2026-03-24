import React from 'react';

export default function SuccessCasesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-headline text-3xl font-bold mb-12 text-center md:text-left">Casos de Éxito Industrial</h2>
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Case 1 */}
        <div className="bg-surface-container rounded-md p-1 group hover:bg-primary transition-colors duration-300">
          <div className="bg-background p-6 h-full flex flex-col">
            <div className="text-primary font-black mb-4 group-hover:text-primary transition-colors">TECH-CORP</div>
            <p className="text-sm text-on-surface-variant mb-6 italic">"Logramos un 40% más de retención en clientes clave gracias a los kits NFC de Colosson."</p>
            <div className="mt-auto pt-6 border-t border-outline-variant/15 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-tighter">NFC Onboarding</span>
              <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
            </div>
          </div>
        </div>

        {/* Case 2 */}
        <div className="bg-surface-container rounded-md p-1 group hover:bg-primary transition-colors duration-300">
          <div className="bg-background p-6 h-full flex flex-col">
            <div className="text-primary font-black mb-4">LUXURY REALTY</div>
            <p className="text-sm text-on-surface-variant mb-6 italic">"Las maquetas 3D paramétricas para nuestros cierres de venta son ahora un estándar de lujo."</p>
            <div className="mt-auto pt-6 border-t border-outline-variant/15 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-tighter">3D Modeling</span>
              <span className="material-symbols-outlined text-primary text-sm">diamond</span>
            </div>
          </div>
        </div>

        {/* Case 3 */}
        <div className="bg-surface-container rounded-md p-1 group hover:bg-primary transition-colors duration-300">
          <div className="bg-background p-6 h-full flex flex-col">
            <div className="text-primary font-black mb-4">GLOBAL LOGISTICS</div>
            <p className="text-sm text-on-surface-variant mb-6 italic">"Redefinimos nuestra identidad visual física con piezas que parecen extraídas de una galería."</p>
            <div className="mt-auto pt-6 border-t border-outline-variant/15 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-tighter">Brand Sculpture</span>
              <span className="material-symbols-outlined text-primary text-sm">token</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
