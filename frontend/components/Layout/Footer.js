import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true }
  };

  const socialLinks = [
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    { Icon: Mail, text: "contact@projectpulse.com" },
    { Icon: Phone, text: "+254 727 230 675" },
    { Icon: MapPin, text: "123 Innovation Street" }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="space-y-6" {...fadeInUp}>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600">
              ProjectPulse
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transforming ideas into reality through innovation and expertise. Building the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all text-gray-600 hover:text-purple-600"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp}>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <motion.li key={name}>
                  <a 
                    href={href}
                    className="group flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeInUp}>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text }) => (
                <motion.li 
                  key={text}
                  className="flex items-center text-gray-600"
                >
                  <Icon className="w-5 h-5 mr-3 text-purple-600" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div {...fadeInUp}>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Stay Updated</h4>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all placeholder:text-gray-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600"
          {...fadeInUp}
        >
          <p>© {new Date().getFullYear()} ProjectPulse. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;