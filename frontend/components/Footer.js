import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-600">© {new Date().getFullYear()} ProjectPulse. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[Github, Twitter, Linkedin].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-gray-600">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
