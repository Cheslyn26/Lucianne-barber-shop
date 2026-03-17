import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col items-center leading-none">
              <span className="text-2xl font-serif font-bold tracking-widest text-white">ELEGANT EDGE</span>
              <span className="text-[0.5rem] tracking-[0.3em] font-sans font-normal text-white mt-1">BARBERSHOP</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#services" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#price-list" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Price List</a>
              <a href="#gallery" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              <a href="#book" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-bold transition-colors">Book Now</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#price-list" onClick={() => setIsOpen(false)} className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Price List</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#book" onClick={() => setIsOpen(false)} className="bg-red-600 hover:bg-red-700 text-white block px-3 py-2 rounded-md text-base font-bold mt-4 text-center">Book Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
