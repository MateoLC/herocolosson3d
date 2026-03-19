"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';

export const VideoHero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/colosson-bg.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Brand Logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30">
        <a className="flex items-center gap-2" href="#">
          <div className="bg-[#00a859] text-white rounded-lg p-2 font-bold flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <span>3D</span>
          </div>
          <span className="font-bold text-xl text-white tracking-widest hidden sm:inline-block">Colosson</span>
        </a>
      </div>

      {/* Hero Content */}
      <div className="z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl mt-12 md:mt-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Mejora la imagen de tu empresa con un simple detalle
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-gray-200"
        >
          O aumenta tus ventas cambiando la forma en la que te presentas.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full px-4 sm:px-0"
        >
          <a href="https://wa.me/573246580207" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all w-full sm:w-auto text-lg hover:scale-105">
            <FaWhatsapp size={22} />
            WhatsApp
          </a>
          <a href="https://cal.com/mateo-lopez-carvajal-pj7eoq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0F262B] px-8 py-4 rounded-full font-bold shadow-lg transition-all w-full sm:w-auto text-lg hover:scale-105 border-2 border-transparent">
            <FaCalendarAlt size={22} />
            Agendar una cita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoHero;
