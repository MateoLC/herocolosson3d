You are given a task to integrate an existing React component for a B2B company called "Colosson3D". I have attached 5 images to this prompt (3.jpg, 4.jpg, 5.jpg, 8.jpg, 9.jpg). Please use these exact attached images in the component.

The codebase should support:  
\- shadcn project structure    
\- Tailwind CSS  
\- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.   
If default path for components is not /components/ui, provide instructions on why it's important to create this folder  
Copy-paste this component to /components/ui folder:

\`\`\`tsx  
// interactive-selector.tsx  
"use client";

import React, { useState, useEffect } from 'react';  
import { FaLink, FaIdCard, FaTrophy, FaUserAstronaut, FaBoxOpen } from 'react-icons/fa';

const InteractiveSelector \= () \=\> {  
  const \[activeIndex, setActiveIndex\] \= useState(0);  
  const \[animatedOptions, setAnimatedOptions\] \= useState\<number\[\]\>(\[\]);  
    
  // Mapping the user's attached B2B portfolio images  
  const options \= \[  
    {  
      title: "Llaveros Inteligentes NFC",  
      description: "Conecta a tus clientes directamente a tus redes o web.",  
      image: "3.jpg",  
      icon: \<FaLink size={24} className="text-white" /\>  
    },  
    {  
      title: "Tarjetas Interactivas",  
      description: "Experiencias únicas para hoteles y presentaciones.",  
      image: "4.jpg",  
      icon: \<FaIdCard size={24} className="text-white" /\>  
    },  
    {  
      title: "Trofeos Corporativos",  
      description: "Galardones en 3D que destacan la identidad de tu evento.",  
      image: "5.jpg",  
      icon: \<FaTrophy size={24} className="text-white" /\>  
    },  
    {  
      title: "Merchandising Exclusivo",  
      description: "Mascotas y figuras que generan recordación de marca.",  
      image: "8.jpg",  
      icon: \<FaUserAstronaut size={24} className="text-white" /\>  
    },  
    {  
      title: "Empaques Premium",  
      description: "Cajas personalizadas para elevar el valor de tus entregas.",  
      image: "9.jpg",  
      icon: \<FaBoxOpen size={24} className="text-white" /\>  
    }  
  \];

  const handleOptionClick \= (index: number) \=\> {  
    if (index \!== activeIndex) {  
      setActiveIndex(index);  
    }  
  };

  useEffect(() \=\> {  
    const timers: NodeJS.Timeout\[\] \= \[\];  
      
    options.forEach((\_, i) \=\> {  
      const timer \= setTimeout(() \=\> {  
        setAnimatedOptions(prev \=\> \[...prev, i\]);  
      }, 180 \* i);  
      timers.push(timer);  
    });  
      
    return () \=\> {  
      timers.forEach(timer \=\> clearTimeout(timer));  
    };  
  }, \[\]);

  return (  
    // Cream background with Satoshi font  
    \<div className="relative flex flex-col items-center justify-center min-h-screen bg-\[\#F9F8F6\] text-gray-900" style={{ fontFamily: "'Satoshi', sans-serif" }}\>   
        
      {/\* Include Satoshi font from Fontshare \*/}  
      \<style dangerouslySetInnerHTML={{\_\_html: \`  
        @import url('\[https://api.fontshare.com/v2/css?f\](https://api.fontshare.com/v2/css?f)\[\]=satoshi@900,700,500,400\&display=swap');  
      \`}} /\>

      {/\* Header Section \*/}  
      \<div className="w-full max-w-4xl px-6 mt-12 mb-8 text-center"\>  
        \<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-\[\#0F262B\] mb-4 tracking-tight animate-fadeInTop delay-300 leading-tight"\>  
          Mejora la imagen de tu empresa con un simple detalle  
        \</h1\>  
        \<p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto animate-fadeInTop delay-600"\>  
          O aumenta tus ventas cambiando la forma en la que te presentas.  
        \</p\>  
      \</div\>

      \<div className="h-4"\>\</div\>

      {/\* Options Container \*/}  
      \<div className="options flex w-full max-w-\[1000px\] min-w-\[300px\] md:min-w-\[700px\] h-\[500px\] mx-4 items-stretch overflow-hidden relative rounded-xl shadow-2xl bg-white p-2"\>  
        {options.map((option, index) \=\> (  
          \<div  
            key={index}  
            className={\`  
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out rounded-lg mx-1  
              ${activeIndex \=== index ? 'active' : ''}  
            \`}  
            style={{  
              backgroundImage: \`url('${option.image}')\`,  
              backgroundSize: activeIndex \=== index ? 'cover' : 'cover',  
              backgroundPosition: 'center',  
              backfaceVisibility: 'hidden',  
              opacity: animatedOptions.includes(index) ? 1 : 0,  
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',  
              minWidth: '60px',  
              cursor: 'pointer',  
              backgroundColor: '\#e5e5e5',  
              boxShadow: activeIndex \=== index   
                ? '0 20px 60px rgba(0,0,0,0.2)'   
                : 'none',  
              flex: activeIndex \=== index ? '7 1 0%' : '1 1 0%',  
              zIndex: activeIndex \=== index ? 10 : 1,  
              display: 'flex',  
              flexDirection: 'column',  
              justifyContent: 'flex-end',  
              position: 'relative',  
              willChange: 'flex-grow, box-shadow'  
            }}  
            onClick={() \=\> handleOptionClick(index)}  
          \>  
            {/\* Dark gradient overlay for text readability \*/}  
            \<div   
              className="absolute inset-0 transition-opacity duration-700 pointer-events-none"  
              style={{  
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',  
                opacity: activeIndex \=== index ? 1 : 0.7  
              }}  
            \>\</div\>  
              
            {/\* Label with icon and info \*/}  
            \<div className="label absolute left-0 right-0 bottom-6 flex items-center justify-start h-12 z-10 pointer-events-none px-4 gap-4 w-full"\>  
              \<div className="icon min-w-\[48px\] max-w-\[48px\] h-\[48px\] flex items-center justify-center rounded-full bg-\[\#00B4D8\]/90 backdrop-blur-md shadow-lg border-2 border-white/20 flex-shrink-0 transition-all duration-300"\>  
                {option.icon}  
              \</div\>  
              \<div className="info text-white whitespace-pre relative overflow-hidden"\>  
                \<div   
                  className="main font-bold text-xl md:text-2xl transition-all duration-700 ease-in-out"  
                  style={{  
                    opacity: activeIndex \=== index ? 1 : 0,  
                    transform: activeIndex \=== index ? 'translateX(0)' : 'translateX(25px)'  
                  }}  
                \>  
                  {option.title}  
                \</div\>  
                \<div   
                  className="sub text-sm md:text-base text-gray-200 mt-1 transition-all duration-700 ease-in-out"  
                  style={{  
                    opacity: activeIndex \=== index ? 1 : 0,  
                    transform: activeIndex \=== index ? 'translateX(0)' : 'translateX(25px)'  
                  }}  
                \>  
                  {option.description}  
                \</div\>  
              \</div\>  
            \</div\>  
          \</div\>  
        ))}  
      \</div\>  
        
      \<style jsx\>{\`  
        @keyframes fadeInFromTop {  
          0% { opacity: 0; transform: translateY(-20px); }  
          100% { opacity: 1; transform: translateY(0); }  
        }  
        .animate-fadeInTop {  
          opacity: 0;  
          transform: translateY(-20px);  
          animation: fadeInFromTop 0.8s ease-out forwards;  
        }  
        .delay-300 { animation-delay: 0.3s; }  
        .delay-600 { animation-delay: 0.6s; }  
      \`}\</style\>  
    \</div\>  
  );  
};

export default InteractiveSelector;

// demo.tsx  
import InteractiveSelector from "@/components/ui/interactive-selector";

const DemoOne \= () \=\> {  
  return (  
    \<div className="w-full min-h-screen"\>  
      \<InteractiveSelector /\>  
    \</div\>  
  );  
};

export default DemoOne;  
