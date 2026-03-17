import { motion } from 'motion/react';
import { Scissors, Droplets, Sparkles, Wind } from 'lucide-react';

const services = [
  {
    title: "Haircuts",
    icon: <Scissors className="w-8 h-8 text-blue-500" />,
    items: [
      "Fade / Taper / Undercut",
      "Classic Cut",
      "Kids Cut",
      "Buzz Cut",
      "Scissor Cut",
      "Head Shave",
      "Beard Trim",
      "Hot Towel Shave",
      "Hair Art"
    ]
  },
  {
    title: "Threading",
    icon: <Wind className="w-8 h-8 text-blue-500" />,
    items: [
      "Eyebrow",
      "Upper lip",
      "Full face",
      "Tint",
      "Combo"
    ]
  },
  {
    title: "Waxing",
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    items: [
      "Ear wax",
      "Nose wax",
      "Combo"
    ]
  },
  {
    title: "Facial",
    icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    items: [
      "Facial steam",
      "Facial clean",
      "Face treatment"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            OUR <span className="text-blue-500">SERVICES</span>
          </motion.h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-white/10 rounded-xl p-8 hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full inline-block group-hover:bg-blue-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
