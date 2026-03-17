import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              GET IN <span className="text-blue-500">TOUCH</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-10"></div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400 leading-relaxed">
                    MBT Fuel Station<br />
                    c/o 5th Avenue & Weimar Rd<br />
                    Parow
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                  <p className="text-gray-400 mb-1">Phone: <a href="tel:0748633574" className="hover:text-white transition-colors">074 863 3574</a></p>
                  <p className="text-gray-400">WhatsApp: <a href="https://wa.me/27748633574" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">074 863 3574</a></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">Open Hours</h3>
                  <p className="text-gray-400">Mon – Sat</p>
                  <p className="text-gray-400 font-medium text-white">9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-auto min-h-[400px] rounded-xl overflow-hidden border border-white/10 relative"
          >
            {/* Map placeholder - In a real app, use Google Maps iframe */}
            <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-16 h-16 text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Interactive Map</h3>
              <p className="text-gray-500">Google Maps embed will be displayed here pointing to MBT Fuel Station, Parow.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
