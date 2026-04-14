import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, X } from 'lucide-react';
import './NewsletterBar.css';

export default function NewsletterBar() {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setEmail('');
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <section className="bg-transparent py-10 relative">
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-white dark:bg-dark-section border-l-4 border-primary-green shadow-xl rounded-md px-6 py-4 flex items-center justify-between gap-4 min-w-[300px]"
          >
            <span className="text-text-dark dark:text-white font-medium text-sm">
              Get Notified About Our Events!
            </span>
            <button
              onClick={() => setShowAlert(false)}
              className="text-gray-400 hover:text-text-dark dark:hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5  bg-blend-soft-light">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-green-600"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-2">
              Get Notified About Our Events!
            </h2>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-2 text-green-500"> Subscribe Today</h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full max-w-lg bg-transparent"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <form id="nl-poda" onSubmit={handleSubmit}>
                <div className="nl-grid"></div>
                <div className="nl-glow"></div>
                <div className="nl-darkBorderBg"></div>
                <div className="nl-darkBorderBg"></div>
                <div className="nl-darkBorderBg"></div>
                <div className="nl-white"></div>
                <div className="nl-border"></div>
                
                <div id="nl-main">
                  <input 
                    className="nl-input" 
                    placeholder="Enter your email address..." 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="nl-input-mask"></div>
                  <div id="nl-pink-mask"></div>
                  
                  <div className="nl-filterBorder"></div>
                  <button type="submit" id="nl-filter-icon" className="group cursor-pointer active:scale-90 transition-transform duration-150">
                    <Send className="text-gray-400 group-hover:text-white transition-colors" size={18} />
                  </button>
                  
                  <div id="nl-search-icon">
                    <Mail className="text-gray-400" size={18} />
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
