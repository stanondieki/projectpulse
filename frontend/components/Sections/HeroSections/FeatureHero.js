import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa"; // Import the check icon

const FeatureHero = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Powerful Features for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}Modern Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover our comprehensive suite of tools and services designed to
              elevate your business to new heights.
            </p>
            <div className="space-y-4">
              {[
                "Advanced Analytics Dashboard",
                "Real-time Collaboration",
                "AI-powered Insights",
                "Enterprise-grade Security"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <FaCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-1">
              <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                <img
                  src="/images/feature2.jpg"
                  alt="Feature Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;
