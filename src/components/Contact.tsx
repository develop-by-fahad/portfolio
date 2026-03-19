import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-dark"
          >
            LET'S <span className="text-gradient">CONNECT</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="bg-white p-10 rounded-[40px] shadow-xl border border-dark/5">
              <h4 className="text-2xl font-bold mb-8 text-dark">Contact Info</h4>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-bold text-dark">fahadafran07@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-xl font-bold text-dark">+1 (555) 000-0000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-dark/5 text-dark/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold text-dark">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[40px] shadow-xl border border-dark/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-light border border-dark/5 rounded-2xl focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-light border border-dark/5 rounded-2xl focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-light border border-dark/5 rounded-2xl focus:border-primary outline-none transition-colors resize-none"
                />
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-3 py-5">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
