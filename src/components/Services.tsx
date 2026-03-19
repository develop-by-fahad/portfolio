import React from 'react';
import { motion } from 'motion/react';
import { Layout, Box, Code, Zap } from 'lucide-react';

const services = [
  {
    icon: <Layout size={32} />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful interfaces that users love to interact with.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Box size={32} />,
    title: "3D Modeling",
    description: "Bringing ideas to life with high-quality 3D assets and environments.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern tech.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Zap size={32} />,
    title: "Brand Strategy",
    description: "Defining your brand's voice and visual identity for maximum impact.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-dark"
          >
            WHAT I <span className="text-gradient">OFFER</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-white/70 text-lg max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
