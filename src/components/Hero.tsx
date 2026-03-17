import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Barbershop interior" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="w-16 h-40 md:w-20 md:h-48 bg-white rounded-full border-4 border-black shadow-[0_0_30px_rgba(255,255,255,0.2)] relative overflow-hidden mb-8 flex flex-col justify-between items-center">
            {/* Top cap */}
            <div className="w-full h-4 bg-zinc-800 rounded-t-full border-b-2 border-black z-20"></div>
            <div className="w-12 h-12 bg-zinc-800 rounded-full absolute -top-6 border-2 border-black z-20"></div>
            
            {/* Animated stripes container */}
            <div className="absolute inset-0 top-4 bottom-4 overflow-hidden z-10">
              <motion.div 
                animate={{ y: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                className="absolute top-0 left-0 right-0 h-[200%] w-full"
                style={{
                  background: "repeating-linear-gradient(-45deg, #c8102e, #c8102e 20px, #ffffff 20px, #ffffff 40px, #0033a0 40px, #0033a0 60px, #ffffff 60px, #ffffff 80px)"
                }}
              />
              {/* Inner shadow for 3D effect */}
              <div className="absolute inset-0 shadow-[inset_10px_0_20px_rgba(0,0,0,0.5),inset_-10px_0_20px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            </div>

            {/* Bottom cap */}
            <div className="w-full h-4 bg-zinc-800 rounded-b-full border-t-2 border-black z-20"></div>
            <div className="w-12 h-12 bg-zinc-800 rounded-full absolute -bottom-6 border-2 border-black z-20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wider text-white mb-2">
            ELEGANT EDGE
          </h1>
          <p className="text-sm md:text-base tracking-[0.4em] font-sans text-gray-300">
            BARBERSHOP
          </p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-serif italic"
        >
          Classic Cuts & Grooming
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Welcome to Elegant Edge Barbershop, where style meets precision. We specialize in classic cuts, modern fades, beard grooming, threading, waxing, and facial treatments.
          <br/><br/>
          <span className="text-white font-medium">Your style. Our expertise.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto"
        >
          <a href="#book" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#c8102e] hover:bg-red-700 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(200,16,46,0.6)] border-2 border-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            BOOK NOW
          </a>
          <a href="https://wa.me/27748633574" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(37,211,102,0.6)] border-2 border-white/20">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WHATSAPP US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
