import { motion } from 'motion/react';

const haircuts = [
  { name: "Classic Men's Cut", price: "R 100" },
  { name: "Kids Cut (under 12)", price: "R 80" },
  { name: "Scissor Cut", price: "R 120" },
  { name: "Buzz Cut", price: "R 100" },
  { name: "Fade/Taper/Undercut", price: "R 120" },
  { name: "Hair Art from", price: "R 40 - R 100" },
  { name: "Seniors Cut", price: "R 60" },
  { name: "Head Shave", price: "R 100" },
  { name: "Beard Trim", price: "R 50" },
  { name: "Blade Beard Hot Towel", price: "R 100" },
  { name: "Clipper Beard Cut", price: "R 60" },
  { name: "Hot Towel Shave", price: "R 60" },
  { name: "Haircut & Trim/Shave combo (excl hot towel)", price: "R 130" },
];

const threading = [
  { name: "Eyebrow threading", price: "R 80" },
  { name: "Eyebrow Tint", price: "R 50" },
  { name: "Eyebrow thread & tint combo", price: "R 120" },
  { name: "Upper lip threading", price: "R 50" },
  { name: "Upper lip & chin threading", price: "R 80" },
  { name: "Full face threading", price: "R 100" },
  { name: "Nose Wax", price: "R 50" },
  { name: "Ear Wax", price: "R 50" },
  { name: "Ear & Nose Wax Combo", price: "R 80" },
  { name: "Ear, Nose & Thread Combo", price: "R 140" },
];

const facial = [
  { name: "Facial incl steam", price: "R 120" },
  { name: "Facial only", price: "R 80" },
];

export default function PriceList() {
  return (
    <section id="price-list" className="py-24 bg-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            PRICE <span className="text-blue-500">LIST</span>
          </motion.h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#e5e5e5] rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden text-black font-sans"
        >
          {/* Top Banner Area */}
          <div className="relative bg-[#0f172a] pt-16 pb-24 px-4 text-center border-b-4 border-white">
            {/* Background texture/image placeholder */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-40 h-40 bg-[#0f172a] rounded-full border-4 border-white flex flex-col items-center justify-center mb-4 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_20px)]"></div>
                <div className="text-white font-serif font-bold text-xs tracking-widest mb-1">CLASSIC CUTS & GROOMING</div>
                <div className="w-8 h-8 bg-[repeating-linear-gradient(45deg,#c8102e,#c8102e_5px,#fff_5px,#fff_10px,#0033a0_10px,#0033a0_15px)] rounded-sm border border-white mb-1"></div>
                <div className="text-white font-serif font-bold text-xl leading-none flex items-center gap-1">
                  <span className="text-red-600 text-sm">★</span> ELEGANT EDGE <span className="text-red-600 text-sm">★</span>
                </div>
                <div className="text-white text-[0.4rem] tracking-[0.3em] mt-1 mb-2">BARBERSHOP</div>
                <div className="text-white font-serif font-bold text-[0.5rem] tracking-widest">YOUR STYLE, OUR EXPERTISE</div>
              </div>
            </div>
            
            {/* Red Ribbon */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg z-20">
              <div className="bg-[#c8102e] text-white text-3xl md:text-5xl font-bold py-4 px-8 text-center shadow-lg relative border-y-2 border-white/20">
                <span className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-1 bg-white"></span>
                PRICE LIST
                <span className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-1 bg-white"></span>
                {/* Ribbon tails */}
                <div className="absolute top-4 -left-8 w-12 h-full bg-[#9a0c23] clip-path-ribbon-left -z-10"></div>
                <div className="absolute top-4 -right-8 w-12 h-full bg-[#9a0c23] clip-path-ribbon-right -z-10"></div>
              </div>
              <div className="text-red-600 text-2xl absolute -bottom-6 left-1/2 transform -translate-x-1/2">★</div>
            </div>
          </div>

          {/* Location Bar */}
          <div className="mt-16 mb-8 text-center px-4">
            <p className="font-bold text-sm md:text-lg flex items-center justify-center gap-2">
              <span className="text-red-600 text-2xl">📍</span> MBT 5th Avenue Fuel Station, c/o Weimar Road and 5th Avenue, Parow
            </p>
            <div className="w-full max-w-3xl mx-auto h-[2px] bg-black/20 mt-4"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 px-6 md:px-12 pb-12">
            
            {/* Left Column */}
            <div>
              <div className="bg-[#0f172a] text-white text-center py-2 font-bold tracking-wider mb-6 relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-black -z-10"></div>
                <span className="bg-[#0f172a] px-4">HAIRCUTS & SHAVES</span>
              </div>
              
              <div className="space-y-3">
                {haircuts.map((item, i) => (
                  <div key={i} className="flex justify-between items-end text-sm md:text-base">
                    <span className="font-medium whitespace-nowrap text-gray-800">{item.name}</span>
                    <div className="flex-grow border-b-2 border-dotted border-gray-400 mx-2 mb-1"></div>
                    <span className="font-bold whitespace-nowrap text-black">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="bg-[#0f172a] text-white text-center py-2 font-bold tracking-wider mb-6 relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-black -z-10"></div>
                <span className="bg-[#0f172a] px-4">THREADING & WAXING</span>
              </div>
              
              <div className="space-y-3 mb-10">
                {threading.map((item, i) => (
                  <div key={i} className="flex justify-between items-end text-sm md:text-base">
                    <span className="font-medium whitespace-nowrap text-gray-800">{item.name}</span>
                    <div className="flex-grow border-b-2 border-dotted border-gray-400 mx-2 mb-1"></div>
                    <span className="font-bold whitespace-nowrap text-black">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#0f172a] text-white text-center py-2 font-bold tracking-wider mb-6 relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-black -z-10"></div>
                <span className="bg-[#0f172a] px-4">FACIAL</span>
              </div>
              
              <div className="space-y-3">
                {facial.map((item, i) => (
                  <div key={i} className="flex justify-between items-end text-sm md:text-base">
                    <span className="font-medium whitespace-nowrap text-gray-800">{item.name}</span>
                    <div className="flex-grow border-b-2 border-dotted border-gray-400 mx-2 mb-1"></div>
                    <span className="font-bold whitespace-nowrap text-black">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="bg-[#0f172a] text-white text-center py-6 px-4 relative overflow-hidden border-t-4 border-white">
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="bg-[#25D366] p-3 rounded-full shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300 tracking-wider">Whatsapp For Appointmentes:</p>
                <p className="text-3xl md:text-4xl font-bold tracking-wider">074 863 3574</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
