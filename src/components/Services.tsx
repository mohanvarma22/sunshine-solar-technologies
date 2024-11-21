// import React from 'react';
import { motion } from 'framer-motion';
import { Settings, LineChart, Phone } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Installation Services',
    description: 'Professional installation of solar panels with minimal disruption to your property.',
    features: [
      'Site assessment and planning',
      'Custom mounting solutions',
      'Professional installation team',
      'System testing and commissioning',
    ],
  },
  // {
  //   icon: Tool,
  //   title: 'Maintenance & Support',
  //   description: 'Regular maintenance and prompt support to ensure optimal system performance.',
  //   features: [
  //     'Regular system inspections',
  //     '24/7 monitoring',
  //     'Emergency repairs',
  //     'Performance optimization',
  //   ],
  // },
  {
    icon: LineChart,
    title: 'Consulting Services',
    description: 'Expert advice on solar solutions tailored to your specific needs.',
    features: [
      'Energy consumption analysis',
      'ROI calculations',
      'Financial incentives guidance',
      'System design optimization',
    ],
  },
  {
    icon: Phone,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance for all your solar energy needs.',
    features: [
      'Technical support hotline',
      'Online support portal',
      'Remote system diagnostics',
      'Regular performance reports',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-secondary-600 max-w-2xl mx-auto">
            Comprehensive solar solutions tailored to your needs, from installation to maintenance
            and ongoing support.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary-600" />
              </div>

              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                {service.title}
              </h3>

              <p className="text-secondary-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-secondary-600">
                    <svg
                      className="h-5 w-5 text-primary-500 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
