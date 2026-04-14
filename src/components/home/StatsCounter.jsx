import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Simple counter component with hook
function Counter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let frameId;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          frameId = window.requestAnimationFrame(step);
        }
      };
      
      frameId = window.requestAnimationFrame(step);
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="stat-number text-4xl md:text-5xl font-bold font-serif text-accent-green drop-shadow-sm">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const stats = [
    { value: 2860, label: "Products Supplied", suffix: "+" },
    { value: 128, label: "Expert Agronomists", suffix: "" },
    { value: 14, label: "States Served", suffix: "" },
    { value: 24, label: "Years of Experience", suffix: "+" },
  ];

  return (
    <section 
      className="py-20 border-y-4 border-primary-green relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/farming india.png')" }}
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 relative z-10 text-center">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="flex flex-col items-center justify-center p-4"
          >
            <Counter end={stat.value} suffix={stat.suffix} />
            <span className="stat-label text-sm text-white/70 mt-3 font-medium uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
