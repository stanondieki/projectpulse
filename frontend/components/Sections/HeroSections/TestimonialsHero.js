import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsHero = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content: "ProjectPulse transformed our business operations completely. The results were beyond our expectations.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Michael Chen",
      role: "CTO at InnovateLabs",
      content: "The team's expertise and dedication to our project was exceptional. Highly recommended!",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Emma Davis",
      role: "Product Manager",
      content: "Outstanding service and support. They truly understand modern business needs.",
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          {/* <span className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium tracking-wide mb-6">
            Client Success Stories
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-1">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-purple-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="flex text-purple-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;