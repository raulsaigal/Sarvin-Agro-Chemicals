import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldAlert, Cpu, TestTube, CloudSun, Beaker, Droplets, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function CeoProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FDFBF7] dark:bg-dark-bg min-h-screen text-gray-800 dark:text-gray-300 font-sans selection:bg-[#2E4F36] selection:text-white transition-colors duration-300">
      


      {/* 2. Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        <div className="lg:w-1/2 bg-[#2E4F36] dark:bg-[#182C1E] transition-colors duration-300 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="relative z-10 max-w-xl"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-serif text-[#FDFBF7] mb-4 leading-tight">
              Anamika Anand
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#D4AF37] text-lg uppercase tracking-widest font-semibold mb-12">
              Founder & CEO — Paidavaar
            </motion.p>
            <motion.blockquote variants={fadeInUp} className="border-l-4 border-[#D4AF37] pl-6 py-2">
              <p className="text-2xl text-[#FDFBF7] font-serif italic leading-relaxed opacity-90">
                "We don't just grow crops. We cultivate futures, heal the soil, and bring uncompromising purity to your table."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 bg-[#F5F2EB] dark:bg-[#1A1A1A] transition-colors duration-300 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute text-[30rem] font-serif font-bold text-[#3E2723]/5 dark:text-white/5 -right-20 top-1/2 transform -translate-y-1/2 select-none">
            AA
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md"
          >
            <div className="relative aspect-[3/4] mb-12">
              <div className="absolute inset-0 border-2 border-[#D4AF37] transform translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="anamika.png" 
                alt="Anamika Anand" 
                className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80';
                }}
              />
            </div>
            
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-3 gap-4 border-t border-[#3E2723]/10 dark:border-white/10 pt-8">
              <motion.div variants={fadeInUp} className="text-center">
                <h4 className="text-2xl font-serif text-[#2E4F36] dark:text-[#D4AF37] font-bold">1M+</h4>
                <p className="text-xs font-semibold text-[#3E2723] dark:text-gray-400 uppercase tracking-wider mt-1">Farmers Supported</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center border-l border-r border-[#3E2723]/10 dark:border-white/10 px-2">
                <h4 className="text-2xl font-serif text-[#2E4F36] dark:text-[#D4AF37] font-bold">15</h4>
                <p className="text-xs font-semibold text-[#3E2723] dark:text-gray-400 uppercase tracking-wider mt-1">States Reached</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <h4 className="text-2xl font-serif text-[#2E4F36] dark:text-[#D4AF37] font-bold">Zero</h4>
                <p className="text-xs font-semibold text-[#3E2723] dark:text-gray-400 uppercase tracking-wider mt-1">Toxic Compromise</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Page Content Navigation */}
      <section className="bg-[#1B3622] dark:bg-[#0A160E] transition-colors duration-300 py-5 px-6 border-y border-[#D4AF37]/20 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-[#FDFBF7] text-sm md:text-base font-medium tracking-wide">
          <a href="#beginning" className="hover:text-[#D4AF37] transition-colors">The Beginning</a>
          <a href="#philosophy" className="hover:text-[#D4AF37] transition-colors">Philosophy</a>
          <a href="#vision" className="hover:text-[#D4AF37] transition-colors">Vision</a>
          <a href="#strategies" className="hover:text-[#D4AF37] transition-colors">Strategies</a>
          <a href="#research" className="hover:text-[#D4AF37] transition-colors">Research</a>
        </div>
      </section>

      {/* 3. The Beginning */}
      <section id="beginning" className="py-24 px-6 bg-[#FDFBF7] dark:bg-dark-section transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E2723] dark:text-white mb-4">The Beginning</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6 text-lg text-[#3E2723]/80 dark:text-gray-300 leading-relaxed">
              <p>
                Growing up, Anamika witnessed the stark contrast between the hands that grew the food and the plates it eventually reached. She spent years traveling through rural India, immersing herself in the daily realities of farming communities.
              </p>
              <p>
                What she discovered was a profoundly broken system: farmers were being over-exploited and trapped in cycles of debt due to chemical-heavy farming, while consumers were under-informed, unknowingly consuming food laden with harmful toxic residues. 
              </p>
              <p>
                In 2021, Anamika founded Paidavaar as her definitive answer to this crisis. It wasn't just another agritech startup; it was a movement to bridge the gap between ethical farming and clean food accessibility.
              </p>
              <div className="flex flex-wrap gap-3 pt-6">
                {['Agriculture', 'Farmer Rights', 'Food Safety', 'Sustainability', 'Empowerment'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#F5F2EB] dark:bg-[#1A1A1A] text-[#2E4F36] dark:text-[#D4AF37] text-sm font-semibold rounded-full border border-[#2E4F36]/10 dark:border-white/10 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} className="bg-[#2E4F36] dark:bg-[#182C1E] transition-colors duration-300 p-12 rounded-xl shadow-2xl relative">
              <div className="absolute top-8 left-8 text-[#D4AF37] text-6xl font-serif opacity-50">"</div>
              <blockquote className="relative z-10 pt-8">
                <p className="text-3xl text-[#FDFBF7] font-serif italic leading-snug">
                  I saw the hands that fed us struggling to feed their own. That was the moment Paidavaar was born — not as a business, but as a responsibility.
                </p>
                <footer className="mt-8 text-[#D4AF37] font-semibold tracking-wider uppercase text-sm">
                  — Anamika Anand
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy */}
      <section id="philosophy" className="py-24 px-6 bg-[#F5F2EB] dark:bg-dark-bg transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#3E2723] dark:text-white mb-6">The Philosophy</h2>
            <p className="text-xl text-[#3E2723]/70 dark:text-gray-300">
              Paidavaar operates on three fundamental pillars. These aren't just corporate values; they are the non-negotiable rules of our ecosystem.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                num: "1",
                title: "Farmer First, Always",
                desc: "Every business decision, technological implementation, and supply chain adjustment is weighed against one question: Does this benefit the farmer first? If not, it is discarded."
              },
              {
                num: "2",
                title: "Nature Is a Partner, Not a Resource",
                desc: "We reject extractive farming. All our agricultural practices are designed to be regenerative—returning more nutrients, water, and life to the earth than we take from it."
              },
              {
                num: "3",
                title: "Food as a Human Right",
                desc: "Clean, toxin-free nutrition should never be a luxury reserved for the privileged. It is a fundamental right, and our supply chain is optimized to make purity accessible to every income group."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp} 
                className="bg-[#FDFBF7] dark:bg-dark-section p-10 rounded-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl border border-[#3E2723]/5 dark:border-white/10"
              >
                <div className="absolute -right-4 -top-10 text-[12rem] font-serif font-bold text-[#2E4F36]/5 dark:text-white/5 group-hover:text-[#D4AF37]/10 transition-colors duration-500 select-none">
                  {item.num}
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-serif text-[#2E4F36] dark:text-[#D4AF37] font-bold mb-4">{item.title}</h3>
                  <p className="text-[#3E2723]/80 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Vision Section */}
      <section id="vision" className="py-32 px-6 bg-[#3E2723] dark:bg-[#121212] transition-colors duration-300 relative overflow-hidden text-[#FDFBF7]">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[15rem] md:text-[25rem] font-serif font-bold whitespace-nowrap tracking-tighter">VISION</span>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">The Future She Is Building Toward</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              By 2030, Anamika envisions a fully integrated, farmer-owned, and technology-powered food ecosystem that operates with total transparency.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Users size={32}/>, title: "1 Million Farmers", desc: "Empowered, trained, and onboarded into our ethical supply chain." },
              { icon: <ShieldAlert size={32}/>, title: "Zero Toxic Residue", desc: "100% certified clean produce across all our product lines." },
              { icon: <Sprout size={32}/>, title: "Carbon Positive", desc: "Transforming farms into carbon sinks through regenerative methods." },
              { icon: <Cpu size={32}/>, title: "Farmer-Owned Tech", desc: "A cooperative data model where farmers control their land's data." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp}
                className="border border-[#D4AF37]/30 bg-[#2E4F36]/20 dark:bg-[#1A1A1A]/50 backdrop-blur-sm p-8 rounded-lg hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 group"
              >
                <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xl font-serif font-bold mb-3">{item.title}</h4>
                <p className="opacity-80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Strategies Section */}
      <section id="strategies" className="py-24 px-6 bg-[#E8EFEA] dark:bg-dark-section transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2E4F36] dark:text-white mb-4">Elevating Paidavaar</h2>
            <p className="text-lg text-[#3E2723]/70 dark:text-gray-300">The five strategic pillars executing our vision.</p>
          </motion.div>

          <div className="space-y-6">
            {[
              { title: "AI-Powered Soil Intelligence", desc: "Utilizing satellite imagery and IoT sensors to provide hyper-personalized farm recommendations, reducing chemical usage while boosting yield." },
              { title: "Farm-to-Fork Blockchain Traceability", desc: "Every product features a QR code. Consumers can scan to see the exact farm, harvest date, and testing certificates of their food." },
              { title: "Village-Level Bio-Input Labs", desc: "Micro-labs co-owned by rural women's cooperatives, producing localized, organic inputs to eliminate dependency on multi-national agrochemicals." },
              { title: "Paidavaar Agri-School", desc: "A multilingual mobile learning app accessible even on feature phones, disseminating regenerative farming techniques to the most remote farmers." },
              { title: "Direct CSA Markets", desc: "Connecting urban families directly to certified farms through subscriptions, providing pre-season payments to secure farmer income before harvest." }
            ].map((strategy, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}
                className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-sm border-l-4 border-[#2E4F36]/20 dark:border-[#2E4F36] hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 flex gap-6 items-start group"
              >
                <span className="text-3xl font-serif font-bold text-[#2E4F36]/20 dark:text-white/10 group-hover:text-[#D4AF37] transition-colors duration-300">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#3E2723] dark:text-[#D4AF37] mb-2">{strategy.title}</h3>
                  <p className="text-[#3E2723]/70 dark:text-gray-300">{strategy.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Research Section */}
      <section id="research" className="py-24 px-6 bg-[#FDFBF7] dark:bg-dark-bg transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif text-[#3E2723] dark:text-white mb-8">Research & Innovation</h2>
              <div className="text-xl text-[#3E2723]/80 dark:text-gray-300 font-serif italic border-l-2 border-[#D4AF37] pl-6">
                "Research in a lab is useless unless it reaches the farmer's field within 90 days. We innovate for application, not just publication."
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} className="bg-[#2E4F36] dark:bg-[#182C1E] transition-colors duration-300 text-[#FDFBF7] p-8 rounded-xl">
              <h3 className="text-2xl font-serif mb-4 text-[#D4AF37]">Open-Source Knowledge</h3>
              <p className="opacity-90 leading-relaxed">
                Paidavaar is committed to open-access research. The discoveries we make regarding soil health, climate adaptation, and non-toxic inputs are shared freely with farming cooperatives nationwide to accelerate the agricultural transition.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <TestTube size={28}/>, title: "Soil Microbiome Studies", desc: "Analyzing microbial life to restore degraded lands." },
              { icon: <CloudSun size={28}/>, title: "Climate-Adaptive Cropping", desc: "Developing drought and flood-resistant crop cycles." },
              { icon: <Beaker size={28}/>, title: "Nutritional & Toxin Testing", desc: "Rigorous testing with open-access transparency reports." },
              { icon: <Droplets size={28}/>, title: "Water Conservation", desc: "Affordable drip & micro-irrigation for small landholdings." },
              { icon: <Users size={28}/>, title: "Farmer Wellbeing Research", desc: "Annual socio-economic surveys on debt and gender equity." },
              { icon: <BookOpen size={28}/>, title: "Traditional Knowledge", desc: "Preserving indigenous wisdom alongside tribal communities." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                <div className="bg-[#F5F2EB] dark:bg-[#1A1A1A] w-16 h-16 rounded-full flex items-center justify-center text-[#2E4F36] dark:text-[#D4AF37] mb-6 group-hover:bg-[#2E4F36] dark:group-hover:bg-[#182C1E] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-[#3E2723] dark:text-white mb-3 relative inline-block">
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2E4F36] dark:from-[#182C1E] to-[#D4AF37] group-hover:w-full transition-all duration-500"></span>
                </h4>
                <p className="text-[#3E2723]/70 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Closing Impact Banner */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-r from-[#1B3622] to-[#3E2723] dark:from-[#0A160E] dark:to-[#1A1A1A] transition-colors duration-300 text-center flex flex-col justify-center min-h-[60vh]">
        {/* Concentric Circles Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none"></div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase mb-8 block">
            The Mission Continues
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#FDFBF7] italic leading-tight mb-12">
            "When a farmer is empowered, a family eats well. When a family eats well, a nation heals. Paidavaar is not in the farming business — we are in the human dignity business."
          </h2>
          <div className="text-[#D4AF37] uppercase tracking-widest font-bold font-sans">
            Anamika Anand <span className="opacity-50 mx-2">|</span> Founder & CEO
          </div>
        </motion.div>
      </section>

    </div>
  );
}
