import React from 'react';

export default function ProblemSection() {
  return (
    <section className="bg-surface-container-lowest py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
          El Status Quo
        </span>
        <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-6">
          ¿Tu empresa da el mismo lapicero de siempre?
        </h2>
        <p className="text-on-surface-variant">
          El merchandising genérico termina en la basura. Colosson3D crea activos que se quedan en el escritorio de por vida.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="p-8 rounded-lg bg-surface-container-low border border-outline-variant/10">
          <div className="text-error mb-6 flex items-center gap-2">
            <span className="font-bold text-sm uppercase tracking-wider">Lo Genérico</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-on-surface-variant text-sm">
              Plástico inyectado de baja calidad.
            </li>
            <li className="flex items-start gap-3 text-on-surface-variant text-sm">
              Logo impreso que se borra con el uso.
            </li>
            <li className="flex items-start gap-3 text-on-surface-variant text-sm">
              Cero valor percibido por el cliente.
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-lg bg-surface-container-high border-l-4 border-primary shadow-xl">
          <div className="text-primary mb-6 flex items-center gap-2">
            <span className="font-bold text-sm uppercase tracking-wider">Colosson3D</span>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-on-surface text-sm">
              Resinas industriales y filamentos metálicos.
            </li>
            <li className="flex items-start gap-3 text-on-surface text-sm">
              Grabado láser e integración tecnológica NFC.
            </li>
            <li className="flex items-start gap-3 text-on-surface text-sm">
              Piezas de colección que refuerzan tu marca.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
