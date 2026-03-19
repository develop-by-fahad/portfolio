import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "E-commerce App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Chat Interface",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "3D Character Set",
    category: "3D Modeling",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">My Works</h2>
            <h3 className="text-5xl md:text-6xl font-black text-dark leading-tight">
              SELECTED <br />
              <span className="text-gradient">PROJECTS</span>
            </h3>
          </div>
          <p className="text-dark/40 max-w-md text-lg leading-relaxed">
            A collection of my recent work across various disciplines, 
            focusing on clean aesthetics and functional design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-500" />
                <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white text-dark flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ExternalLink size={24} />
                </div>
              </div>
              <div className="px-4">
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{project.category}</p>
                <h4 className="text-3xl font-black text-dark group-hover:text-primary transition-colors">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 border-2 border-dark/5 rounded-full font-bold hover:bg-dark hover:text-white transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
