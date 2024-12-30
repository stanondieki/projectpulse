import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const navigationItems = [
  { name: 'About', icon: ChevronRight, description: 'Learn about our mission' },
  { name: 'Projects', icon: ChevronRight, description: 'View our work' },
  { name: 'Services', icon: ChevronRight, description: 'What we offer' },
  { name: 'Features', icon: ChevronRight, description: 'Our capabilities' },
  { name: 'Testimonials', icon: ChevronRight, description: 'Client feedback' },
  { name: 'Team', icon: ChevronRight, description: 'Meet our experts' },
  { name: 'Blog', icon: ChevronRight, description: 'Latest insights' },
  { name: 'Contact', icon: ChevronRight, description: 'Get in touch' }
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 h-full bg-white shadow-2xl w-80 z-20"
    >
      <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ProjectPulse
        </h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <nav className="mt-8">
        <ul className="space-y-2 px-4">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all group"
              >
                <div className="flex flex-col flex-grow">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.description}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;