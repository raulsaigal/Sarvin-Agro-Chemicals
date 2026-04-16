import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Award, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import BlobButton from '../shared/BlobButton';
import SvgButton from '../shared/SvgButton';

export default function Hero() {
  const [showRotating, setShowRotating] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const ROTATING_WORDS = ["Farmers.", "Dealers.", "Retailers.", "Stores.", "Online."];

  useEffect(() => {
    let interval;
    // Wait ~5.2s for main sentence to finish typing + 0.3s padding
    const startTimeout = setTimeout(() => {
      setShowRotating(true);

      // Begin cycling words every 3.5s after the first word appears
      interval = setInterval(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      }, 3500);
    }, 8550);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  const stats = [
    { icon: <Leaf className="text-accent-green" />, title: "Quality Seeds", desc: "High yield potential" },
    { icon: <Award className="text-accent-green" />, title: "Certified Products", desc: "Lab tested quality" },
    { icon: <ShieldCheck className="text-accent-green" />, title: "No Harmful Additives", desc: "Safe for soil" },
    { icon: <HelpCircle className="text-accent-green" />, title: "Expert Advisory", desc: "24/7 farmer support" }
  ];

  const typeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.10, delayChildren: 4.4 },
    },
  };

  const typeLetter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {/* Social Stream Widget (Placed outside overflow-hidden to allow fixed slide-in animation) */}
      <div className="social-right hidden lg:block">
        <ul>
          <li className="facebook">
            <a href="https://www.facebook.com/sarvinagrochemicalspvtltd" target="_blank" rel="noopener noreferrer">
              <span className="icon-wrap"><FaFacebookF /></span>
              Facebook
            </a>
          </li>
          <li className="twitter">
            <a href="https://x.com/Paidavaar_" target="_blank" rel="noopener noreferrer">
              <span className="icon-wrap"><FaTwitter /></span>
              Twitter
            </a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/sarvin_agro_chemicals/" target="_blank" rel="noopener noreferrer">
              <span className="icon-wrap"><FaInstagram /></span>
              Instagram
            </a>
          </li>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/paidavaar-sarvin-agro-chemicals-pvt-ltd-21a05b329/" target="_blank" rel="noopener noreferrer">
              <span className="icon-wrap"><FaLinkedinIn /></span>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <section className="relative min-h-[110vh] bg-dark-bg text-white overflow-hidden pt-23 mb-24 md:mb-25 pb-10">

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero img.png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 h-full flex flex-col justify-center pb-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white italic text-sm mb-6 shadow-sm border border-white/30"
            >
              Excellence In Agriculture
            </motion.span>

            <motion.h1
              variants={typeContainer}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-6xl font-serif font-bold leading-[1.1] mb-6 drop-shadow-2xl text-white min-h-[140px] whitespace-pre-wrap"
            >
              {Array.from("Leading Agro Chemical Solutions for India's ").map((char, i) => (
                <motion.span variants={typeLetter} key={`c1-${i}`}>
                  {char}
                </motion.span>
              ))}
              <span className="text-accent-green block mt-2 min-h-[1.5em]">
                <AnimatePresence mode="wait">
                  {showRotating && (
                    <motion.span
                      key={wordIndex}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: { staggerChildren: 0.18 }
                        },
                        exit: {
                          opacity: 0,
                          transition: { staggerChildren: 0.05, staggerDirection: -1 }
                        }
                      }}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="inline-block whitespace-nowrap"
                    >
                      {Array.from(ROTATING_WORDS[wordIndex]).map((char, i) => (
                        <motion.span
                          key={`${wordIndex}-${i}`}
                          variants={{
                            hidden: { opacity: 0, display: "none" },
                            visible: { opacity: 1, display: "inline" },
                            exit: { opacity: 0, display: "none" }
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-white mb-10 max-w-lg drop-shadow-lg font-medium"
            >
              We provide world-class seeds, fertilizers, and plant protection chemicals to ensure your harvest is plentiful and healthy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <BlobButton className="flex items-center gap-2">Get A Quote</BlobButton>
              </Link>
              <Link to="/about">
                <SvgButton isDarkTheme={true}>Learn More</SvgButton>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-dark-section z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-dark-bg/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 flex items-start gap-4 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 shrink-0">{stat.icon}</div>
                <div>
                  <h4 className="font-serif font-bold text-white mb-1">{stat.title}</h4>
                  <p className="text-xs text-text-muted">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
