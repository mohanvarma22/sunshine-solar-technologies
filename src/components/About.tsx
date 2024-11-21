import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Shield, Users, Award } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Installations Completed', value: '1000+' },
  { label: 'Satisfied Customers', value: '950+' },
  { label: 'Energy Saved (MWh)', value: '50,000+' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
              About Sunshine Solar Technologies
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Since 2008, we've been at the forefront of solar innovation, helping homes and businesses
              harness the power of the sun. Our commitment to quality, sustainability, and customer
              satisfaction has made us a trusted name in solar solutions.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-50 rounded-lg p-6 text-center"
                >
                  <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-secondary-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 lg:mt-0"
          >
            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3"
              alt="Our team at work"
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Shield,
              title: 'Quality Assured',
              description: 'All our products meet the highest industry standards',
            },
            {
              icon: Users,
              title: 'Expert Team',
              description: 'Certified professionals with years of experience',
            },
            {
              icon: Sun,
              title: 'Sustainable Future',
              description: 'Committed to environmental preservation',
            },
            {
              icon: Award,
              title: 'Award Winning',
              description: 'Recognized for excellence in solar solutions',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900">{feature.title}</h3>
              <p className="mt-2 text-secondary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;