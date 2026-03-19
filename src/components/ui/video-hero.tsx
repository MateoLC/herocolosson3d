"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

export const VideoHero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-end p-0 md:p-12 md:pb-20 lg:pb-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:w-[50%] lg:w-[45%] xl:w-[40%] h-full object-cover md:object-bottom rounded-2xl md:rounded-2xl shadow-none md:shadow-2xl opacity-90 transition-opacity duration-1000"
        >
          <source src="/colosson-bg.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      {/* Dark Overlay gradient for text readability (Light overlay for brightness) */}
      <div className="absolute inset-0 bg-black/5 md:bg-transparent md:bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none z-10 w-full md:w-3/4 h-full"></div>

      {/* Brand Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30">
        <a className="flex items-center gap-2" href="#">
          <img 
            src="/colosson-logo.png" 
            alt="Colosson 3D Logo" 
            className="w-auto h-12 md:h-16 object-contain rounded-xl shadow-lg"
          />
        </a>
      </div>

      {/* Hero Content (Absolute Layer for Full Height Control) */}
      <div className="absolute inset-0 z-20 flex flex-col items-start px-6 sm:px-10 md:pl-12 lg:pl-24 pt-24 pb-12 md:justify-center">
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-[45%] xl:max-w-[40%] text-left">
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
            className="mt-4 md:mt-6 max-w-xl text-lg sm:text-xl md:text-2xl text-gray-200"
          >
            O aumenta tus ventas cambiando la forma en la que te presentas.
          </motion.p>
        </div>

        {/* Action Buttons - Pushed to the very bottom */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-auto flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto"
        >
          <a href="https://wa.me/573246580207" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-bold shadow-lg transition-all w-full sm:w-auto text-lg hover:scale-105">
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
