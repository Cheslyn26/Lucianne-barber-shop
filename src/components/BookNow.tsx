import { motion } from 'motion/react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

export default function BookNow() {
  return (
    <section id="book" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black border border-white/10 rounded-2xl p-8 md:p-16 text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            READY FOR A <span className="text-blue-500">FRESH LOOK?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book your appointment today. Online booking is recommended to secure your spot.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="#" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Online Now
            </a>
            <a 
              href="https://wa.me/27748633574" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
            <a 
              href="tel:0748633574" 
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-bold rounded-lg transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
