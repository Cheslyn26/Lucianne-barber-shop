/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PriceList from './components/PriceList';
import BookNow from './components/BookNow';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PriceList />
      <BookNow />
      <Gallery />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
