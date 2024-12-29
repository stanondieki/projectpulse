import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    { title: "AI Analytics Platform", description: "Advanced analytics powered by machine learning", image: "/images/ai.jpg" },
    { title: "Smart City Solutions", description: "Innovative urban development technologies", image: "/images/city.jpg" },
    { title: "Green Energy Systems", description: "Sustainable energy management solutions", image: "/images/energy.jpg" }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ y: -8 }} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
