"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

export const VideoHero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-end p-4 md:p-12 pb-32 md:pb-12 mt-24 md:mt-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:w-[50%] lg:w-[45%] xl:w-[40%] h-full object-contain md:object-cover rounded-2xl md:rounded-3xl shadow-2xl opacity-90"
        >
          <source src="/colosson-bg.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      {/* Dark Overlay gradient for text readability (Left side dark, Right side clear) */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none z-10 w-full md:w-3/4 h-full"></div>

      {/* Brand Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30">
        <a className="flex items-center gap-2" href="#">
          <div className="bg-[#00a859] text-white rounded-lg p-2 font-bold flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <span>3D</span>
          </div>
          <span className="font-bold text-xl text-white tracking-widest hidden sm:inline-block">Colosson</span>
        </a>
      </div>

      {/* Hero Content (Left Aligned) */}
      <div className="z-20 flex flex-col items-start text-left px-6 sm:px-10 md:ml-12 lg:ml-24 w-full max-w-xl md:max-w-2xl lg:max-w-[45%] xl:max-w-[40%] mt-24 md:mt-0">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Mejora la imagen de tu empresa con un simple detalle
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg sm:text-xl md:text-2xl text-gray-200"
        >
          O aumenta tus ventas cambiando la forma en la que te presentas.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-10 w-full sm:w-auto"
        >
          <a href="https://wa.me/573246580207" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all w-full sm:w-auto text-lg hover:scale-105">
            <FaWhatsapp size={22} />
            WhatsApp
          </a>
          <a href="https://cal.com/mateo-lopez-carvajal-pj7eoq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-bold shadow-lg transition-all w-full sm:w-auto text-lg hover:scale-105">
            <FaCalendarAlt size={22} />
            Agendar cita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero;
