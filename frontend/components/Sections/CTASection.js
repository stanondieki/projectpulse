import { PlayCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl bg-white/10 p-12 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-purple-100 text-lg mb-8">
                Join hundreds of satisfied clients who have transformed their business with our solutions.
              </p>
              <button className="group px-8 py-4 bg-white text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-all flex items-center gap-2">
                Schedule a Demo
                <PlayCircleIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "24/7 Support",
                "Expert Team",
                "Fast Delivery",
                "Custom Solutions",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <CheckCircleIcon className="w-5 h-5 text-purple-200" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
