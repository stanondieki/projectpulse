import React, { useState } from 'react';
import { Users, Activity, Award, TrendingUp } from 'lucide-react';

const StatCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  React.useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration / end) * 1000;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);
  
  return count;
};

const FloatingCard = ({ icon: Icon, title, value, suffix }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
      <Icon className="w-8 h-8 text-purple-600 mb-4" />
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="text-3xl font-bold text-purple-600">
        <StatCounter value={value} />{suffix}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      title: "Happy Clients",
      value: "150",
      suffix: "+"
    },
    {
      icon: Activity,
      title: "Projects Done",
      value: "200",
      suffix: "+"
    },
    {
      icon: Award,
      title: "Awards Won",
      value: "50",
      suffix: "+"
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: "95",
      suffix: "%"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* <span className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium tracking-wide mb-6">
            Our Impact
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
            Numbers That Speak
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our achievements and growth through the years speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FloatingCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;