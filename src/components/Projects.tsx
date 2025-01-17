import React from "react";
import { Home, Sun, Battery, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "3BHK Villa Solar Setup",
    description: "Complete solar solution for a modern family home in Bangalore, featuring 5kW system with battery backup. Reduced monthly electricity bills from ₹8,000 to ₹2,500.",
    specs: ["5kW System", "20 Solar Panels", "10 Year Warranty"],
    savings: "70%",
    location: "Bangalore",
    image: "/api/placeholder/400/300",
    icon: Home
  },
  {
    title: "Smart Home Integration",
    description: "Solar installation with smart monitoring for a 2BHK apartment. Includes real-time energy tracking and automated power management system.",
    specs: ["3kW System", "12 Solar Panels", "Smart Monitoring"],
    savings: "55%",
    location: "Mumbai",
    image: "/api/placeholder/400/300",
    icon: Sun
  },
  {
    title: "Off-Grid Farmhouse",
    description: "Complete off-grid solution for a weekend farmhouse, including battery storage system for 24/7 power availability.",
    specs: ["7kW System", "Battery Backup", "Off-Grid Setup"],
    savings: "100%",
    location: "Pune",
    image: "/api/placeholder/400/300",
    icon: Battery
  }
];

const Projects = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-700 mb-4">
          Our Residential Success Stories
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Transforming homes across India with custom solar solutions that deliver real savings and sustainable energy independence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <project.icon className="w-6 h-6 text-primary-700" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-3xl font-bold text-primary-700 mb-1">
                    {project.savings}
                  </div>
                  <div className="text-sm text-gray-500">
                    Monthly Savings
                  </div>
                </div>
                
                <div className="space-y-2">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-700 rounded-full mr-2"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.location}</span>
                  <button className="flex items-center text-primary-700 hover:text-primary-800 transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;