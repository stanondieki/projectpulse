import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronRight, Github, Twitter, Linkedin } from "lucide-react";

const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full bg-white shadow-2xl w-72 z-20"
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-black">
            ProjectPulse
          </h2>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            {["About", "Projects", "Services", "Contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <span>{section}</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow overflow-y-auto">
        <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">
              ProjectPulse
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-full hover:bg-gray-100 sm:hidden"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                {isDarkMode ? (
                  <Sun className="w-6 h-6 text-gray-600" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-black">
                Empowering Ideas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform your vision into reality with our cutting-edge solutions
                and expert guidance.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Analytics Platform",
                  description: "Advanced analytics powered by machine learning",
                  image: "/images/ai.jpg"
                },
                {
                  title: "Smart City Solutions",
                  description: "Innovative urban development technologies",
                  image: "/images/city.jpg"
                },
                {
                  title: "Green Energy Systems",
                  description: "Sustainable energy management solutions",
                  image: "/images/energy.jpg"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-black">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-600">
                © {new Date().getFullYear()} ProjectPulse. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;