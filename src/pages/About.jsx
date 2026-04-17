import { motion } from 'framer-motion';
import { Target, Shield, Heart, Recycle } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/shared/PageHero';
import SectionHeading from '../components/SectionHeading';
import StatsCounter from '../components/home/StatsCounter';
import TeamSection from '../components/home/TeamSection';
import { Link } from 'react-router-dom';

function CompanyStory() {
  return (
    <section className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading eyebrow="OUR STORY" title="Rooted in Trust, Growing with Technology" highlightWord="Growing with Technology" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-text-muted dark:text-gray-400 mb-6 leading-relaxed">
              Founded over two decades ago, Sarvin Agro Chemical began with a simple mission: to empower the Indian farmer. We understood early on that the foundation of a prosperous nation lies in its agriculture.
            </p>
            <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-8">
              Today, we stand as one of the leading agro Chemical providers, blending traditional farming wisdom with highly advanced scientific research. Our state-of-the-art formulations are designed to be tough on pests but gentle on the soil, ensuring sustainable growth season after season.
            </p>
            <div className="flex gap-12 border-t border-dark-bg/10 dark:border-white/10 pt-8 mt-8">
              <div>
                <h4 className="font-serif text-2xl font-bold text-text-dark dark:text-white mb-1">Mission</h4>
                <p className="text-sm text-text-muted dark:text-gray-400">Innovate for optimal crop yield.</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-text-dark dark:text-white mb-1">Vision</h4>
                <p className="text-sm text-text-muted dark:text-gray-400">A sustainable, food-secure future.</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
          <img src="company history img.png" alt="Company Story" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
        </motion.div>
      </div>
    </section>
  );
}

function OurValues() {
  const values = [
    { icon: <Target className="w-10 h-10 text-primary-green" />, title: "Innovation", desc: "Constant research yields better formulas." },
    { icon: <Shield className="w-10 h-10 text-primary-green" />, title: "Quality", desc: "Stringent testing at every stage." },
    { icon: <Heart className="w-10 h-10 text-primary-green" />, title: "Trust", desc: "Transparent relationships with farmers." },
    { icon: <Recycle className="w-10 h-10 text-primary-green" />, title: "Sustainability", desc: "Eco-friendly agricultural practices." },
  ];

  return (
    <section className="py-24 bg-off-white dark:bg-[#151515] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading eyebrow="OUR VALUES" title="What Drives Us Forward" className="!mb-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-dark-section dark:border-x dark:border-y dark:border-white/5 p-8 rounded-card shadow-card dark:shadow-none text-center hover:-translate-y-2 transition-transform duration-300 hover:border-b-4 border-transparent hover:border-primary-green">
              <div className="bg-light-green dark:bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">{v.icon}</div>
              <h4 className="font-serif font-bold text-xl mb-3 text-text-dark dark:text-white">{v.title}</h4>
              <p className="text-sm text-text-muted dark:text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <section className="bg-primary-green py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-serif font-bold text-white max-w-2xl leading-tight">
          Partner with us for significantly better crop yields.
        </motion.h2>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="shrink-0 flex gap-4">
          <Link to="/contact">
            <button className="star-btn">
              Get In Touch
              <svg className="star-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fil0" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              <svg className="star-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fil0" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              <svg className="star-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fil0" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              <svg className="star-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fil0" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              <svg className="star-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fil0" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              <svg className="star-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="fil0" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about Sarvin Agro Chemical's mission, vision, and the team behind our innovative agriculture solutions." />
      <PageHero
        title="About Sarvin Agro Chemical"
        bgImage="about img.png"
        currentPath="About Us"
        overlay={false}

        titleClassName="text-primary-green dark:text-white"
      />
      <CompanyStory />
      <StatsCounter />
      <OurValues />
      <TeamSection />
      <CTAStrip />
    </>
  );
}
