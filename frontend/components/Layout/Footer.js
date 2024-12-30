import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              ProjectPulse
            </h3>
            <p className="text-gray-600">
              Transforming ideas into reality through innovation and expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#about" className="hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a></li>
              <li><a href="#services" className="hover:text-purple-600 transition-colors">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>contact@projectpulse.com</li>
              <li>+254 727 230 675</li>
              <li>123 Innovation Street</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          © {new Date().getFullYear()} ProjectPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;