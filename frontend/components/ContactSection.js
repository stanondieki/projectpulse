import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Get in Touch</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white border" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white border" />
          </div>
          <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 rounded-lg bg-white border" />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-black text-white rounded-lg font-medium shadow-lg"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
