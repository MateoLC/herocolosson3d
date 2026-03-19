"use client";

import React, { useState, useEffect } from 'react';  
import { FaLink, FaIdCard, FaTrophy, FaUserAstronaut, FaBoxOpen } from 'react-icons/fa';

// Mapping the user's attached B2B portfolio images  

const InteractiveSelector = () => {  
  const [activeIndex, setActiveIndex] = useState(0);  
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);  
    
const options = [  
    {  
      title: "Llaveros Inteligentes NFC",  
      description: "Conecta a tus clientes directamente a tus redes o web.",  
      image: "3.png",  
      icon: <FaLink size={24} className="text-white" />  
    },  
    {  
      title: "Tarjetas Interactivas",  
      description: "Experiencias únicas para hoteles y presentaciones.",  
      image: "4.jpeg",  
      icon: <FaIdCard size={24} className="text-white" />  
    },  
    {  
      title: "Trofeos Corporativos",  
      description: "Galardones en 3D que destacan la identidad de tu evento.",  
      image: "5.png",  
      icon: <FaTrophy size={24} className="text-white" />  
    },  
    {  
      title: "Merchandising Exclusivo",  
      description: "Mascotas y figuras que generan recordación de marca.",  
      image: "8.png",  
      icon: <FaUserAstronaut size={24} className="text-white" />  
    },  
    {  
      title: "Empaques Premium",  
      description: "Cajas personalizadas para elevar el valor de tus entregas.",  
      image: "9.png",  
      icon: <FaBoxOpen size={24} className="text-white" />  
    }  
  ];

  const handleOptionClick = (index: number) => {  
    if (index !== activeIndex) {  
      setActiveIndex(index);  
    }  
  };

  useEffect(() => {  
    const timers: NodeJS.Timeout[] = [];  
      
    options.forEach((_, i) => {  
      const timer = setTimeout(() => {  
        setAnimatedOptions(prev => [...prev, i]);  
      }, 180 * i);  
      timers.push(timer);  
    });  
      
    return () => {  
      timers.forEach(timer => clearTimeout(timer));  
    };  
  }, []);

  return (  
    // Cream background with Satoshi font  
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#F9F8F6] text-gray-900 overflow-x-hidden" style={{ fontFamily: "'Satoshi', sans-serif" }}>   
        
      {/* Brand Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30">
        <a className="flex items-center gap-2" href="#">
          <div className="bg-[#00a859] text-white rounded-lg p-2 font-bold flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <span>3D</span>
          </div>
          <span className="font-bold text-xl text-[#0F262B] tracking-widest hidden sm:inline-block">Colosson</span>
        </a>
      </div>

      {/* Include Satoshi font from Fontshare */}  
      <style dangerouslySetInnerHTML={{__html: `  
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap');  
      `}} />

      {/* Header Section */}  
      <div className="w-full max-w-4xl px-4 mt-20 mb-8 text-center sm:px-6 sm:mt-12">  
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F262B] mb-4 tracking-tight animate-fadeInTop delay-300 leading-tight">  
          Mejora la imagen de tu empresa con un simple detalle  
        </h1>  
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto animate-fadeInTop delay-600">  
          O aumenta tus ventas cambiando la forma en la que te presentas.  
        </p>  
      </div>

      <div className="h-4"></div>

      {/* Options Container */}  
      <div className="options flex w-[95%] max-w-[1000px] md:min-w-[700px] h-[65vh] md:h-[500px] mx-4 items-stretch overflow-hidden relative rounded-xl shadow-2xl bg-white p-2">  
        {options.map((option, index) => (  
          <div  
            key={index}  
            className={`  
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out rounded-lg mx-1  
              ${activeIndex === index ? 'active' : ''}  
            `}  
            style={{  
              backgroundImage: `url('${option.image}')`,  
              backgroundSize: 'cover',  
              backgroundPosition: 'center',  
              backfaceVisibility: 'hidden',  
              opacity: animatedOptions.includes(index) ? 1 : 0,  
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',  
              minWidth: '60px',  
              cursor: 'pointer',  
              backgroundColor: '#e5e5e5',  
              boxShadow: activeIndex === index   
                ? '0 20px 60px rgba(0,0,0,0.2)'   
                : 'none',  
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',  
              zIndex: activeIndex === index ? 10 : 1,  
              display: 'flex',  
              flexDirection: 'column',  
              justifyContent: 'flex-end',  
              position: 'relative',  
              willChange: 'flex-grow, box-shadow'  
            }}  
            onClick={() => handleOptionClick(index)}  
          >  
            {/* Dark gradient overlay for text readability */}  
            <div   
              className="absolute inset-0 transition-opacity duration-700 pointer-events-none"  
              style={{  
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',  
                opacity: activeIndex === index ? 1 : 0.7  
              }}  
            ></div>  
              
            {/* Label with icon and info */}  
            <div className="label absolute left-0 right-0 bottom-6 flex items-center justify-start h-12 z-10 pointer-events-none px-4 gap-4 w-full">  
              <div className="icon min-w-[48px] max-w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#00B4D8]/90 backdrop-blur-md shadow-lg border-2 border-white/20 flex-shrink-0 transition-all duration-300">  
                {option.icon}  
              </div>  
              <div className="info text-white whitespace-pre relative overflow-hidden">  
                <div   
                  className="main font-bold text-lg sm:text-xl md:text-2xl transition-all duration-700 ease-in-out"  
                  style={{  
                    opacity: activeIndex === index ? 1 : 0,  
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'  
                  }}  
                >  
                  {option.title}  
                </div>  
                <div   
                  className="sub text-xs sm:text-sm md:text-base text-gray-200 mt-1 transition-all duration-700 ease-in-out whitespace-normal pr-4 md:whitespace-pre leading-tight"  
                  style={{  
                    opacity: activeIndex === index ? 1 : 0,  
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'  
                  }}  
                >  
                  {option.description}  
                </div>  
              </div>  
            </div>  
          </div>  
        ))}  
      </div>  
        
      <style>{`  
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
      `}</style>  
    </div>  
  );  
};

export default InteractiveSelector;
