import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/36633935/pexels-photo-36633935.png" 
              alt="About Me"
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">About Me</h2>
            <h3 className="text-5xl md:text-6xl font-black text-dark leading-tight">
              I DESIGN FOR <br />
              <span className="text-gradient">HUMAN CONNECTION</span>
            </h3>
          </div>

          <p className="text-dark/60 text-lg leading-relaxed">
            I am a tech enthusiast skilled in design, AI content creation, coding, and social media growth. 
            I love building smart digital solutions that help businesses grow and connect with people.
          </p>

          <div className="grid grid-cols-2 gap-8 py-8 border-y border-dark/5">
            <div>
              <p className="text-4xl font-black text-dark mb-1">12+</p>
              <p className="text-sm text-dark/40 uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-black text-dark mb-1">250+</p>
              <p className="text-sm text-dark/40 uppercase tracking-widest">Projects Completed</p>
            </div>
          </div>

          <button className="btn-primary">
            Download CV
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
