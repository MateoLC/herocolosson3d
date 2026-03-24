import React from 'react';

export default function LeadFormSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-high border-t border-primary/20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline text-4xl font-bold mb-6 text-primary">Inicia tu Transformación</h2>
          <p className="text-on-surface-variant mb-8">Déjanos tus datos y un especialista industrial se contactará para una consultoría de diseño gratuita.</p>
          <div className="flex items-center gap-4 text-sm text-on-surface/60">
            <span className="material-symbols-outlined text-primary">verified</span>
            Garantía de calidad industrial ISO-9001
          </div>
        </div>
        
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Nombre Completo</label>
            <input 
              className="w-full bg-surface-container-lowest border-none border-b-2 border-transparent focus:ring-0 focus:border-primary text-on-surface p-4 rounded" 
              placeholder="Tu nombre..." 
              type="text" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Corporativo</label>
            <input 
              className="w-full bg-surface-container-lowest border-none border-b-2 border-transparent focus:ring-0 focus:border-primary text-on-surface p-4 rounded" 
              placeholder="correo@empresa.com" 
              type="email" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Requerimiento</label>
            <select className="w-full bg-surface-container-lowest border-none border-b-2 border-transparent focus:ring-0 focus:border-primary text-on-surface p-4 rounded appearance-none">
              <option>Impresión 3D Personalizada</option>
              <option>Tarjetas NFC Corporativas</option>
              <option>Welcome Kits</option>
              <option>Otros</option>
            </select>
          </div>
          <button className="w-full molten-gradient text-on-primary font-black py-5 mt-4 rounded shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all" type="button">
            QUIERO DESTACARME
          </button>
        </form>
      </div>
    </section>
  );
}
