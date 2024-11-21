import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-gradient-to-b from-primary-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-secondary-900 sm:text-7xl">
            Power Your Future with{' '}
            <span className="relative whitespace-nowrap text-primary-600">
              <span className="relative">Solar Energy</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-secondary-600">
            Transform your energy consumption with our cutting-edge solar solutions. 
            Join the sustainable revolution with Sunshine Solar Technologies.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary-600 text-white hover:bg-primary-700 hover:text-slate-100 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary-600"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-secondary-200 text-secondary-700 hover:text-secondary-900 hover:ring-secondary-300 active:bg-secondary-100 active:text-secondary-600"
            >
              View Products
            </a>
          </div>
        </motion.div>
        
        <div className="mt-20">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Solar panels installation"
            className="rounded-xl shadow-xl ring-1 ring-secondary-900/10 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;