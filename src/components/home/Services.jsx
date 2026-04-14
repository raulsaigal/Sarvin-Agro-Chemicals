import { motion } from 'framer-motion';
import { Sprout, TestTube, Droplets, FlaskConical, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <Sprout className="w-10 h-10 currentColor" />,
      title: "Crop Protection",
      description: `Advanced pesticides, insecticides, and fungicides for robust pest control.
      Scout early, act fast — regularly inspect crops for pests and disease signs before they spread.`,
      image: "/Crop Protection.png"
    },
    {
      id: 2,
      icon: <TestTube className="w-10 h-10 currentColor" />,
      title: "Seed Treatment Solutions",
      description: `Protecting genetic potential right from the soil bed to yield.
      Treat seeds with certified fungicides and insecticides before sowing to protect against soil-borne diseases, pests, and early-stage infections.`,
      image: "/Seed Treatment.png"
    },
    {
      id: 3,
      icon: <Droplets className="w-10 h-10 currentColor" />,
      title: "Irrigation & Fertilizer",
      description: `Water-soluble fertilizers and root enhancers for faster absorption.
      Choose water-soluble fertilizers (WSF) for drip irrigation systems to deliver nutrients directly to the root zone, ensuring uniform uptake and minimal wastage.`,
      image: "/Irrigation & Fertilizer.png"
    },
    {
      id: 4,
      icon: <FlaskConical className="w-10 h-10 currentColor" />,
      title: "Soil Health & Micro-nutrients",
      description: `Microbial inoculants and trace minerals for restoring depleted soil.
      Use soil testing to identify nutrient deficiencies and apply balanced fertilizers that match your crop's specific needs for nitrogen, phosphorus, potassium, and micronutrients.`,
      image: "/Soil Health & Micro-nutrients.png"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-light-green dark:bg-[#121212] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center md:max-w-2xl mx-auto mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="What You Can Do With Sarvin"
            className="!mb-4"
          />
          <p className="text-text-muted">A dedicated suite of agricultural inputs designed to meet the rigorous demands of modern farming.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="wrap animate pop"
            >
              <div className="overlay">
                <div className="overlay-content animate slide-left delay-2 rounded-tl-lg rounded-bl-lg">
                  <div className="animate slide-left pop delay-4 mt-6 text-white flex justify-center w-full">
                    {service.icon}
                  </div>
                  <h3 className="animate slide-left pop delay-5 text-white/90 text-[clamp(0.7rem,2vw,1.1rem)] text-center font-serif leading-tight pb-6 px-1">
                    {service.title}
                  </h3>
                </div>
                <div
                  className="image-content animate slide delay-5 rounded-tr-xl rounded-br-xl"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
                <div className="dots animate">
                  <div className="dot animate slide-up delay-6"></div>
                  <div className="dot animate slide-up delay-7"></div>
                  <div className="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div className="text rounded-tr-xl rounded-br-xl">
                <h4 className="font-serif font-bold text-2xl text-text-dark dark:text-white mb-3">{service.title}</h4>
                <p className="text-text-muted dark:text-green-500 mb-6 text-base leading-relaxed pt-3">{service.description}</p>
                <Link to="/about" className="text-xs font-bold uppercase text-primary-green flex items-center gap-1 hover:text-accent-green dark:hover:text-white transition-colors duration-300 mt-auto">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
