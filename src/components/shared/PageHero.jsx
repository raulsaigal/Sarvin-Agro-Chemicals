import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, bgImage, currentPath, titleClassName = "", overlay = true }) {
  return (
    <section className="relative h-[280px] md:h-[400px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {overlay && <div className="absolute inset-0 bg-dark-bg/80"></div>}
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-serif font-bold mb-4 ${titleClassName}`}
        >
          {title}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/80"
        >
          <Link to="/" className="hover:text-accent-green transition-colors">Home</Link>
          <ChevronRight size={14} className="text-primary-green" />
          <span className="text-accent-green">{currentPath}</span>
        </motion.div>
      </div>
    </section>
  );
}
