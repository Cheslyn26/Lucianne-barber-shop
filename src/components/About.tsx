import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ABOUT <span className="text-blue-500">US</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Elegant Edge Barbershop is a professional grooming studio offering high-quality haircuts, beard trims, shaving, threading, waxing, and facial treatments.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our goal is to provide clean, sharp, and stylish looks for every client. We combine classic barber techniques with modern styles to give the best results.
            </p>
            
            <div className="mt-10 p-6 border border-white/10 bg-white/5 rounded-lg border-l-4 border-l-blue-500">
              <p className="text-xl font-medium text-white">Walk-ins welcome.</p>
              <p className="text-xl font-medium text-white">Appointments available.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-blue-500/30 rounded-lg transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
              alt="Barber at work" 
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
