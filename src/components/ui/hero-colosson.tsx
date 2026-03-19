"use client";

import React from "react";  
import { motion, Variants } from "framer-motion";  
import { cn } from "@/lib/utils";  
import { MessageCircle, Calendar } from "lucide-react"; 

interface AnimatedMarqueeHeroProps {  
  tagline: string;  
  title: React.ReactNode;  
  description: string;  
  images: string[];  
  className?: string;  
}

const ActionButton = ({ children, icon: Icon, primary, href }: { children: React.ReactNode, icon?: any, primary?: boolean, href?: string }) => {
  const MotionTag = href ? motion.a : motion.button;
  return (
    <MotionTag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.05 }}  
      whileTap={{ scale: 0.95 }}  
      className={cn(  
        "px-8 py-3 flex items-center justify-center gap-2 rounded-full font-bold shadow-lg transition-all focus:outline-none focus:ring-2 cursor-pointer",  
        primary   
          ? "bg-[#00a859] text-white hover:bg-[#008f4c] focus:ring-[#00a859]/50"   
          : "bg-white text-[#020617] border-2 border-[#020617] hover:bg-gray-50 focus:ring-[#020617]/50"  
      )}  
    >  
      {Icon && <Icon className="w-5 h-5" />}  
      {children}  
    </MotionTag>  
  );
};

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({  
  tagline,  
  title,  
  description,  
  images,  
  className,  
}) => {  
  const FADE_IN_ANIMATION_VARIANTS: Variants = {  
    hidden: { opacity: 0, y: 15 },  
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },  
  };

  const duplicatedImages = [...images, ...images, ...images];

  return (  
    <section className={cn("relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4", className)}>  
      {/* Brand Logo */}
      <div className="absolute top-8 left-8 z-30">
        <a className="flex items-center gap-2" href="#">
          <div className="bg-[#00a859] text-white rounded-lg p-2 font-bold flex items-center justify-center w-10 h-10">
            <span>3D</span>
          </div>
          <span className="font-bold text-xl text-white tracking-widest">Colosson</span>
        </a>
      </div>

      <div className="z-10 flex flex-col items-center mt-[-10vh]">  
        <motion.h1  
          initial="hidden"  
          animate="show"  
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}  
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl"  
        >  
          {typeof title === 'string' ? (  
            title.split(" ").map((word, i) => (  
              <motion.span key={i} variants={FADE_IN_ANIMATION_VARIANTS} className="inline-block">  
                {word}&nbsp;  
              </motion.span>  
            ))  
          ) : title}  
        </motion.h1>

        <motion.p  
          initial="hidden"  
          animate="show"  
          variants={FADE_IN_ANIMATION_VARIANTS}  
          transition={{ delay: 0.4 }}  
          className="mt-6 max-w-3xl text-xl text-gray-300"  
        >  
          {description}  
        </motion.p>

        <motion.div  
          initial="hidden"  
          animate="show"  
          variants={FADE_IN_ANIMATION_VARIANTS}  
          transition={{ delay: 0.6 }}  
          className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20 relative"  
        >  
          <ActionButton primary icon={MessageCircle} href="https://wa.me/573246580207">WhatsApp</ActionButton>  
          <ActionButton icon={Calendar} href="https://cal.com/mateo-lopez-carvajal-pj7eoq/30min">Agendar una cita</ActionButton>  
        </motion.div>  
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-[40%] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">  
        <motion.div  
          className="flex gap-6 items-center h-full"  
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >  
          {duplicatedImages.map((src, index) => (  
            <div key={index} className="relative aspect-[4/3] h-48 md:h-64 flex-shrink-0" style={{ rotate: `${(index % 2 === 0 ? -3 : 3)}deg` }}>  
              <img src={src} alt={`Colosson3D B2B Showcase ${index + 1}`} className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/10" />  
            </div>  
          ))}  
        </motion.div>  
      </div>  
    </section>  
  );  
};
