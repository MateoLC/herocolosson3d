You are given a task to integrate an existing React component for a B2B company called "Colosson3D". I have attached several images to this prompt (3.jpg, 4.jpg, 5.jpg, 8.jpg, 9.jpg). Please use these exact attached images in the marquee animation.

The codebase should support:  
\- shadcn project structure    
\- Tailwind CSS  
\- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.   
If default path for components is not /components/ui, provide instructions on why it's important to create this folder.  
Copy-paste this component to /components/ui folder:

\`\`\`tsx  
// hero-colosson.tsx  
"use client";

import React from "react";  
import { motion } from "framer-motion";  
import { cn } from "@/lib/utils";  
import { MessageCircle, Calendar } from "lucide-react"; 

interface AnimatedMarqueeHeroProps {  
  tagline: string;  
  title: React.ReactNode;  
  description: string;  
  images: string\[\];  
  className?: string;  
}

const ActionButton \= ({ children, icon: Icon, primary }: { children: React.ReactNode, icon?: any, primary?: boolean }) \=\> (  
  \<motion.button  
    whileHover={{ scale: 1.05 }}  
    whileTap={{ scale: 0.95 }}  
    className={cn(  
      "px-8 py-3 flex items-center justify-center gap-2 rounded-full font-bold shadow-lg transition-all focus:outline-none focus:ring-2",  
      primary   
        ? "bg-\[\#00B4D8\] text-white hover:bg-\[\#0096B4\] focus:ring-\[\#00B4D8\]/50"   
        : "bg-white text-\[\#0F262B\] border-2 border-\[\#0F262B\] hover:bg-gray-50 focus:ring-\[\#0F262B\]/50"  
    )}  
  \>  
    {Icon && \<Icon className="w-5 h-5" /\>}  
    {children}  
  \</motion.button\>  
);

export const AnimatedMarqueeHero: React.FC\<AnimatedMarqueeHeroProps\> \= ({  
  tagline,  
  title,  
  description,  
  images,  
  className,  
}) \=\> {  
  const FADE\_IN\_ANIMATION\_VARIANTS \= {  
    hidden: { opacity: 0, y: 15 },  
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },  
  };

  const duplicatedImages \= \[...images, ...images, ...images\];

  return (  
    \<section className={cn("relative w-full h-screen overflow-hidden bg-\[\#0F262B\] flex flex-col items-center justify-center text-center px-4", className)}\>  
      \<div className="z-10 flex flex-col items-center mt-\[-10vh\]"\>  
        \<motion.div  
          initial="hidden"  
          animate="show"  
          variants={FADE\_IN\_ANIMATION\_VARIANTS}  
          className="mb-6 inline-block rounded-full border border-\[\#00B4D8\]/30 bg-\[\#0F262B\]/80 px-5 py-2 text-sm font-bold text-\[\#00B4D8\] backdrop-blur-md uppercase tracking-widest"  
        \>  
          {tagline}  
        \</motion.div\>

        \<motion.h1  
          initial="hidden"  
          animate="show"  
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}  
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl"  
        \>  
          {typeof title \=== 'string' ? (  
            title.split(" ").map((word, i) \=\> (  
              \<motion.span key={i} variants={FADE\_IN\_ANIMATION\_VARIANTS} className="inline-block"\>  
                {word}\&nbsp;  
              \</motion.span\>  
            ))  
          ) : title}  
        \</motion.h1\>

        \<motion.p  
          initial="hidden"  
          animate="show"  
          variants={FADE\_IN\_ANIMATION\_VARIANTS}  
          transition={{ delay: 0.4 }}  
          className="mt-6 max-w-3xl text-xl text-gray-300"  
        \>  
          {description}  
        \</motion.p\>

        \<motion.div  
          initial="hidden"  
          animate="show"  
          variants={FADE\_IN\_ANIMATION\_VARIANTS}  
          transition={{ delay: 0.6 }}  
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"  
        \>  
          \<ActionButton primary icon={MessageCircle}\>WhatsApp\</ActionButton\>  
          \<ActionButton icon={Calendar}\>Agendar una cita\</ActionButton\>  
        \</motion.div\>  
      \</div\>

      \<div className="absolute bottom-0 left-0 w-full h-1/3 md:h-\[40%\] \[mask-image:linear-gradient(to\_bottom,transparent,black\_10%,black\_90%,transparent)\]"\>  
        \<motion.div  
          className="flex gap-6 items-center h-full"  
          animate={{ x: \["0%", "-50%"\], transition: { ease: "linear", duration: 35, repeat: Infinity } }}  
        \>  
          {duplicatedImages.map((src, index) \=\> (  
            \<div key={index} className="relative aspect-\[4/3\] h-48 md:h-64 flex-shrink-0" style={{ rotate: \`${(index % 2 \=== 0 ? \-3 : 3)}deg\` }}\>  
              \<img src={src} alt={\`Colosson3D B2B Showcase ${index \+ 1}\`} className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/10" /\>  
            \</div\>  
          ))}  
        \</motion.div\>  
      \</div\>  
    \</section\>  
  );  
};

// demo.tsx  
import { AnimatedMarqueeHero } from "@/components/ui/hero-colosson";

const ATTACHED\_PORTFOLIO\_IMAGES \= \[  
  "3.jpg",  
  "4.jpg",  
  "5.jpg",  
  "8.jpg",  
  "9.jpg",  
\];

const AnimatedHeroDemo \= () \=\> {  
  return (  
    \<AnimatedMarqueeHero  
      tagline="Soluciones B2B de Alta Tecnología"  
      title={  
        \<\>  
          Innovación Tangible.\<br/\>  
          \<span style={{ color: '\#00B4D8' }}\>Conectividad Real.\</span\>  
        \</\>  
      }  
      description="No es solo impresión 3D. Es la evolución de tu producto. Fusionamos diseño de vanguardia, manufactura aditiva y tecnología NFC para crear herramientas interactivas que hacen destacar a tu empresa."  
      images={ATTACHED\_PORTFOLIO\_IMAGES}  
    /\>  
  );  
};

export default AnimatedHeroDemo;  
