import React from 'react';
import { motion } from 'framer-motion';
import SolarPanel3D from './SolarPanel3D';

const products = [
  {
    id: 1,
    name: 'Residential Solar Panel',
    description: 'Perfect for homes, these high-efficiency panels maximize your roof space.',
    price: 'Contact for pricing',
    features: ['25-years performance warranty on panels','10 years system warranty', '540W output', 'Bifacial Solar Panels for maximum absorption','Smart monitoring system included'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3'
  },
  {
    id: 2,
    name: 'Commercial Solar System',
    description: 'Designed for businesses, these panels offer maximum return on investment.',
    price: 'Contact for pricing',
    features: ['Customised Solar Solutions','25-year performance warranty','10 years system warranty', '540W output','Durable frame for high wind and snow loads'],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3'
  },
  {
    id: 3,
    name: 'Industrial Solar Array',
    description: 'High-capacity panels for industrial applications and solar farms.',
    price: 'Contact for pricing',
    features: ['30-year warranty', '600W output', 'Weather-resistant','Scalable system for large installations',
      'Advanced thermal management for efficiency',],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3'
  },
  {
    id: 4,
    name: 'Solar Street Lighting',
    description: 'Energy-efficient and eco-friendly street lighting solution using solar power.',
    price: 'Contact for pricing',
    features: [
      'Integrated solar panel and LED lighting',
      'Automatic on/off functionality',
      'Durable weather-resistant design',
      'Low maintenance with long lifespan',
      'Perfect for urban, rural, and remote areas',
      'Light intensity adjustable for different environments',
      'Available in multiple pole heights and designs'
    ],
    image: 'https://images.unsplash.com/photo-1616620280289-55f290b7dbcf?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhY2h8Mnx8c29sYXxlbnwwfDF8fA&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 5,
    name: 'Industrial Solar Array',
    description: 'High-efficiency solar arrays for industrial use and large-scale solar farms.',
    price: 'Contact for pricing',
    features: [
      'Higher output with 700W per panel',
      'Heavy-duty, high-capacity design',
      'Designed to withstand extreme environmental conditions',
      'Compatible with large-scale energy storage solutions',
      'Customized configurations for specific industrial needs',
      'Long-lasting and highly durable',
      'Comprehensive warranty and support services'
    ],
    image: 'https://images.unsplash.com/photo-1603797446034-e4cda8fc7b9f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4OXwwfDF8c2VhY2h8Nnx8Y29tcGxldGV8ZW58MHx8fHwxNjkzMzcwMjQ&ixlib=rb-1.2.1&q=80&w=400'
  }

];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Our Solar Solutions
          </h2>
          <p className="mt-4 text-lg text-secondary-600">
            Discover our range of high-quality solar panels and systems
          </p>
        </div>

        {/* <div className="mt-16">
          <SolarPanel3D />
        </div> */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-secondary-600">
                  {product.description}
                </p>
                <div className="mt-4">
                  <span className="text-lg font-medium text-primary-600">
                    {product.price}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, i) => (
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
                    className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;