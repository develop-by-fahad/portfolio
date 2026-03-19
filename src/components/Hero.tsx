import React from 'react';
import { motion } from 'motion/react';
import { Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center bg-white">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Floating 3D-like shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-[15%] w-12 h-12 border-4 border-dark/5 rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[20%] w-8 h-8 bg-dark/5 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-medium text-dark/80 mb-2">Hello, I'm</h2>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-dark mb-6">
              FAHAD
            </h1>
            <p className="text-dark/60 text-lg leading-relaxed max-w-md">
              a tech enthusiast skilled in design, AI content creation, coding, and social media growth. 
              I love building smart digital solutions that help businesses grow and connect with people.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-dark/5 w-fit">
              <Mail size={18} className="text-primary" />
              <span className="text-sm font-medium text-dark/70">fahadafran07@gmail.com</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full shadow-lg shadow-blue-500/20 font-bold text-sm"
              >
                <Facebook size={18} />
                Facebook
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-[#FFB000] via-[#FF0069] to-[#AD00FF] text-white rounded-full shadow-lg shadow-pink-500/20 font-bold text-sm"
              >
                <Instagram size={18} />
                Instagram
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/20 font-bold text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Center Image */}
        <div className="lg:col-span-4 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
            <img 
              src="https://i.postimg.cc/sDjmM1nS/eh.png" 
              alt="Fahad"
              className="w-full max-w-[450px] aspect-square object-cover rounded-full shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-4 space-y-6">
          {[
            { 
              title: "AI Content Creator", 
              img: "https://images.pexels.com/photos/36633935/pexels-photo-36633935.png",
              delay: 0.4
            },
            { 
              title: "Smart Coding", 
              img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=200&auto=format&fit=crop",
              delay: 0.5
            },
            { 
              title: "Social Media Growth", 
              img: "https://static.vecteezy.com/system/resources/thumbnails/009/339/337/small/red-shopping-cart-free-png.png",
              delay: 0.6
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: card.delay }}
              whileHover={{ x: -10 }}
              className="bg-white p-4 rounded-3xl shadow-sm border border-dark/5 flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-light">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark">{card.title}</h3>
                <div className="w-8 h-1 bg-primary/20 rounded-full mt-2 group-hover:w-12 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
