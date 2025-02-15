import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        {/* <About /> */}
        <Benefits />
        <Contact />
        <Testimonials/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;