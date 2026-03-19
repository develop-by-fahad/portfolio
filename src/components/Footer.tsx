import React from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-dark/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tighter mb-4 text-black">
              Fahad<span className="text-primary">.</span>
            </h3>
            <p className="text-dark/40 text-sm max-w-xs leading-relaxed">
              Crafting immersive digital experiences through technology and 
              human-centric design.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-dark/20 uppercase tracking-widest">Navigation</span>
              <a href="#" className="text-sm font-bold text-dark/60 hover:text-primary transition-colors">Home</a>
              <a href="#portfolio" className="text-sm font-bold text-dark/60 hover:text-primary transition-colors">Works</a>
              <a href="#services" className="text-sm font-bold text-dark/60 hover:text-primary transition-colors">Services</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-dark/20 uppercase tracking-widest">Social</span>
              <a href="#" className="text-sm font-bold text-dark/60 hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-sm font-bold text-dark/60 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-sm font-bold text-dark/60 hover:text-primary transition-colors">WhatsApp</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs font-bold text-dark/20 uppercase tracking-widest mb-4">© 2026 Fahad Afran</p>
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block px-4 py-2 bg-primary/5 rounded-full"
            >
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Available for hire</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
