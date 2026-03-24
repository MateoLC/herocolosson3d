import React from 'react';

export default function ShowcaseSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="font-headline text-4xl font-bold mb-16 text-center md:text-left">
        Soluciones de Ingeniería Visual
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        
        {/* Large Feature */}
        <div className="md:col-span-4 h-[400px] relative group overflow-hidden rounded-md bg-surface-container">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" 
            alt="High precision 3D printer head creating a complex gold geometry" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAENOGOjn20shf3ctA2qxBkizx9ojHqK6Cb4H0awRKfprOe3YeeaAdF4PwOQO31kElGiDs_EjmU7GOz6MDtY7rhpArul6CLRwYlTf5Gf8gzb-z9NnZ5RauQy1Eq-aBVC6ELrAV79xkb5EJfLouZULUGzeQ1llirFjP5z08r8zqeE3XUrs5VG3PGPfOC-zR4dgN3fCICjPVFOyd5-dHI-AieeIASRkBYl70IL4ijVC72uuGYLaezCbp4QnUf11GmnmVJVFwVMIbZstBL"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-0 p-8">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
              MÁXIMA PRECISIÓN
            </span>
            <h3 className="font-headline text-2xl font-bold mb-2">Impresión 3D de Alta Fidelidad</h3>
            <p className="text-on-surface-variant max-w-md">Prototipado y producción final con acabados industriales de lujo.</p>
          </div>
        </div>

        {/* NFC Cards */}
        <div className="md:col-span-2 h-[400px] relative group overflow-hidden rounded-md bg-surface-container-high border border-outline-variant/10">
          <div className="p-8 h-full flex flex-col">
            <h3 className="font-headline text-2xl font-bold mb-4">NFC Business Cards</h3>
            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
              Tu contacto en el móvil de tu cliente con un solo toque. Metal, madera o polímero premium.
            </p>
            <div className="mt-auto">
              <img 
                className="w-full h-32 object-cover rounded shadow-inner" 
                alt="Premium metallic business cards with laser etching" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdTrw-w1tM3dEL3GkvQtdYxCTnkfOBgft6-aYfbk_M-VIU74GF8cFcxA6vaZHu3iyh397ae4IqQJWusF8msMqGebXKmklRCm35HNJAbySfkaatSI8E37QPdKkCYAmoDEqvoJlKO8BPm9_A2lnJ2dRwlmva_c22arT_4_qLeQSCe4teSE1Vsids_FWoYtfhieqmC68wAmbQAorKY1lK_odCyPenYTn9bdg7qIwjBMjnyK1orEjBDBzz7QbuwBtZ7uk5qRMqi3DvmwQJ"
              />
            </div>
          </div>
        </div>

        {/* Welcome Kits */}
        <div className="md:col-span-3 h-[300px] relative group overflow-hidden rounded-md bg-surface-container-low">
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-70" 
            alt="Elegant corporate gift box with black and gold items" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU_seFBFQHszkgm7re6365tRDIWxee8UeFzfKPMneP8eJGg13iZ8Pxilfp3-6spxaSibN-pT6NXwRpBIinsWSZjT_rJmh2NSbU1-NeIc7-OoSblZngN0smKm08us10Yovzd2kDPrMnipk2IzjGdir_kkCFcgjZr2L-Tt1wYwu58Fq6YIbE1_c0FsemE9NHr1KM5N1sA_uA-5a85UvaUvrJC_4WJze-aEPrUb1kpChtWObAtNoRAmOqShvCM6-4j21jVubaQOIKh4hC"
          />
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h3 className="font-headline text-xl font-bold">Welcome Kits Corporativos</h3>
            <p className="text-sm text-on-surface-variant mt-2">Experiencias de unboxing que elevan el employer branding.</p>
          </div>
        </div>

        {/* Custom Parts */}
        <div className="md:col-span-3 h-[300px] relative group overflow-hidden rounded-md bg-surface-container-highest">
          <div className="p-8 h-full flex flex-col justify-center">
            <h3 className="font-headline text-xl font-bold text-primary mb-2">Diseño Paramétrico</h3>
            <p className="text-sm text-on-surface-variant mb-6">Creamos formas imposibles para métodos de fabricación tradicionales.</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
