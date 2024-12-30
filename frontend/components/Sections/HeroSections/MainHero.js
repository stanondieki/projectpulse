import React from 'react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

const MainHero = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center space-y-10">
          {/* <span className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium tracking-wide">
            Innovate with Confidence
          </span> */}
          
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
            Transform Your Vision
            <br />
            Into Reality
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of digital innovation with our cutting-edge solutions
            and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 border-2 border-purple-200 text-purple-700 rounded-full text-lg font-medium hover:bg-purple-50 hover:border-purple-300 transition-all">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Star, title: 'High Quality', desc: '99.9% Customer Satisfaction' },
              { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade Security' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Optimized Performance' }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-purple-100"
              >
                <feature.icon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-purple-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;