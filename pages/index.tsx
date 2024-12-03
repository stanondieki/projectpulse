import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

const IndexPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-black dark:bg-gray-900">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen ? 0 : -300 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 backdrop-blur-lg text-white shadow-lg w-64 z-20"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
            <h2 className="text-2xl font-bold">ProjectPulse</h2>
            <button
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              &times;
            </button>
          </div>
          <nav className="mt-6">
            <ul className="space-y-4 px-6">
              {["About", "Projects", "Services", "Contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white hover:font-semibold transition"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col flex-grow overflow-y-scroll">
          <header className="bg-gray-900 dark:bg-gray-800 bg-opacity-80 backdrop-blur-md text-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <h1 className="text-3xl font-bold">Welcome to ProjectPulse</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="text-gray-400 hover:text-white focus:outline-none sm:hidden"
              >
                ☰
              </button>
              <button
                onClick={toggleTheme}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className="flex items-center justify-center h-[50vh] bg-gradient-to-b from-purple-800 to-black dark:from-gray-700 dark:to-gray-900 text-white relative">
            <div className="relative z-10 text-center space-y-4">
              <h2 className="text-5xl font-extrabold animate-pulse">
                Empowering Ideas
              </h2>
              <p className="text-lg font-light">
                Your projects, our insights, and endless possibilities.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-purple-700 dark:to-indigo-700 hover:bg-gradient-to-l transition-all duration-300 rounded-lg text-lg"
              >
                Explore Now
              </motion.button>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="px-8 py-16 bg-gray-100 dark:bg-gray-800 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ProjectPulse is your ultimate platform for showcasing groundbreaking
              projects, sharing insights, and connecting with a global audience.
              Dive into a world of creativity and innovation with us.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="px-8 py-16 bg-white dark:bg-gray-900 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-200 dark:bg-gray-800 dark:text-gray-300 p-6 rounded-md shadow hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p>
                    Explore how our projects are transforming ideas into reality.
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="px-8 py-16 bg-gray-100 dark:bg-gray-800 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Consulting", "Development", "Promotion"].map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-200 dark:bg-gray-700 p-6 rounded-md shadow hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                  <p>
                    Our team specializes in {service.toLowerCase()} to help your
                    projects shine.
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="px-8 py-16 bg-white dark:bg-gray-900 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
            <form className="max-w-3xl mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded-md"
              >
                Send Message
              </motion.button>
            </form>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-gray-800 text-white text-center py-4">
            <p>&copy; {new Date().getFullYear()} ProjectPulse. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
