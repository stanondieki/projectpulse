import React from "react";
import { motion } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: sidebarOpen ? 0 : -300 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full bg-white shadow-2xl w-72 z-20"
    >
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-black">ProjectPulse</h2>
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-100">
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
  );
};

export default Sidebar;
