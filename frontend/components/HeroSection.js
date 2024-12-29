import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white text-center">
      <div className="relative max-w-7xl mx-auto px-6 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-black"
        >
          Empowering Ideas
        </motion.h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your vision into reality with our cutting-edge solutions and expert guidance.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-x-4"
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all">
            Sign In
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium shadow-md hover:bg-gray-900 transition-all">
            Sign Up
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
