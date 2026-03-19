import { AnimatedMarqueeHero } from "@/components/ui/hero-colosson";

const ATTACHED_PORTFOLIO_IMAGES = [  
  "/3.png",  
  "/4.jpeg",  
  "/5.png",  
  "/8.png",  
  "/9.png",  
];

const AnimatedHeroDemo = () => {  
  return (  
    <AnimatedMarqueeHero  
      tagline="Soluciones B2B de Alta Tecnología"  
      title={  
        <>  
          Innovación Tangible.<br/>  
          <span style={{ color: '#00a859' }}>Conectividad Real.</span>  
        </>  
      }  
      description="No es solo impresión 3D. Es la evolución de tu producto. Fusionamos diseño de vanguardia, manufactura aditiva y tecnología NFC para crear herramientas interactivas que hacen destacar a tu empresa."  
      images={ATTACHED_PORTFOLIO_IMAGES}  
    />  
  );  
};

export default AnimatedHeroDemo;
