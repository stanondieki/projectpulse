import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI Analytics Platform",
    description: "Advanced analytics powered by machine learning and real-time data processing",
    image: "/images/ai.jpg",
    category: "AI & ML"
  },
  {
    title: "Smart City Solutions",
    description: "Innovative urban development technologies for sustainable cities",
    image: "/images/city.jpg",
    category: "IoT"
  },
  {
    title: "Green Energy Systems",
    description: "Sustainable energy management solutions for a better future",
    image: "/images/energy.jpg",
    category: "Sustainability"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">
            Discover our latest innovations and success stories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-700">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
                <button className="mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;