import React from 'react';
import { motion } from 'framer-motion';
import { Sun, IndianRupee, Leaf, Home, Battery, Shield } from 'lucide-react';

const benefits = [
  {
    icon: IndianRupee,
    title: 'Reduced Energy Bills',
    description: 'Save up to 90% on your monthly electricity costs with solar power.',
  },
  {
    icon: Leaf,
    title: 'Environmental Impact',
    description: 'Reduce your carbon footprint and contribute to a sustainable future.',
  },
  {
    icon: Home,
    title: 'Increased Property Value',
    description: 'Solar installations can increase your property value by up to 4%.',
  },
  {
    icon: Battery,
    title: 'Energy Independence',
    description: 'Generate your own electricity and reduce dependence on the grid.',
  },
  {
    icon: Sun,
    title: 'Become a Green Hero',
    description: 'Use clean solar energy and help protect the environment.',
  },
  {
    icon: Shield,
    title: 'Long-term Investment',
    description: '25+ years of reliable energy production with minimal maintenance.',
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Benefits of Solar Power
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
            Discover how solar energy can transform your life while helping the environment
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-white shadow-lg transform transition-transform group-hover:-translate-y-2"></div>
              <div className="relative p-6 bg-white rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Start Your Solar Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;