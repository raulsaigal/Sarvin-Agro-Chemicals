import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Singh",
      location: "Punjab",
      text: "Sarvin's bio-pesticides have effectively controlled pests without harming our soil fertility. Our wheat yields have been exceptional this Rabi season, with noticeably healthier crops right from the sprouting phase.",
      img: "https://placehold.co/100x100/212121/4caf50?text=RS"
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      text: "The soil health micro-nutrients provided by them completely revitalized our cotton fields. I've never seen such dense produce before. Their expert guidance on proper dosage saved us money and improved output.",
      img: "https://placehold.co/100x100/212121/4caf50?text=SP"
    },
    {
      name: "Harish Chandra",
      location: "Uttar Pradesh",
      text: "Their specialized fertilizers for sugarcane have increased our sugar recovery rate significantly. The expert agronomists from their team are invaluable, always providing timely advice during critical growth stages.",
      img: "https://placehold.co/100x100/212121/4caf50?text=HC"
    },
    {
      name: "Vikram Jadhav",
      location: "Maharashtra",
      text: "Sarvin has completely transformed my crop yield. The free consultation and reliable delivery are incredibly helpful during peak season. I appreciate their dedication to farmer welfare and sustainable practices.",
      img: "https://placehold.co/100x100/212121/4caf50?text=VJ"
    },
    {
      name: "Prakash Reddy",
      location: "Andhra Pradesh",
      text: "Highly recommended for their certified organic range. Working with them has improved our paddy quality and market value multifold. The crops are far more resilient to sudden weather changes.",
      img: "https://placehold.co/100x100/212121/4caf50?text=PR"
    },
    {
      name: "Anand Sharma",
      location: "Madhya Pradesh",
      text: "We switched to Sarvin’s agrochemicals for our soybean crops and the results are phenomenal. The plants are healthier, disease-resistant, and the overall yield has jumped by nearly thirty percent this year.",
      img: "https://placehold.co/100x100/212121/4caf50?text=AS"
    },
    {
      name: "Amitabh Banerjee",
      location: "West Bengal",
      text: "Their weedicides are highly effective in our jute and rice fields. What stands out is how safe they are for the surrounding environment. Our community fully trusts Sarvin's commitment to quality agro-inputs.",
      img: "https://placehold.co/100x100/212121/4caf50?text=AB"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-off-white dark:bg-[#151515] transition-colors duration-300 overflow-hidden relative">
      <Quote className="absolute -top-10 -right-10 w-96 h-85 text-primary-green/5 rotate-12" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span className="text-[80px] md:text-[120px] font-serif font-black text-primary-green leading-none drop-shadow-sm mb-2 block">
                372<span className="text-accent-green">+</span>
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-dark dark:text-white leading-tight">
              Global Clients Trust
            </h2>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-green-700 leading-tight">
              Our Agrochemical Services
            </h2>
            <p className="text-text-muted dark:text-gray-400 mt-4 max-w-xl text-lg">
              Join our growing network of satisfied agrarian partners across India. See how we are transforming farming with innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3D Coverflow Cards */}
      <div className="w-full relative z-10 flex justify-center items-center h-[350px] md:h-[400px] overflow-hidden" style={{ perspective: 1200 }}>
        {testimonials.map((t, idx) => {
          let position = 'hidden';
          if (idx === activeIndex) position = 'center';
          else if (idx === (activeIndex + 1) % testimonials.length) position = 'right';
          else if (idx === (activeIndex - 1 + testimonials.length) % testimonials.length) position = 'left';

          let animateProps = {
            opacity: 0,
            scale: 0.6,
            x: '0%',
            rotateY: 0,
            zIndex: 0,
            pointerEvents: 'none'
          };

          if (position === 'center') {
            animateProps = {
              opacity: 1,
              scale: 1,
              x: '0%',
              rotateY: 0,
              zIndex: 10,
              pointerEvents: 'auto'
            };
          } else if (position === 'left') {
            animateProps = {
              opacity: 0.4,
              scale: 0.85,
              x: '-80%',
              rotateY: 25,
              zIndex: 5,
              pointerEvents: 'auto'
            };
          } else if (position === 'right') {
            animateProps = {
              opacity: 0.4,
              scale: 0.85,
              x: '80%',
              rotateY: -25,
              zIndex: 5,
              pointerEvents: 'auto'
            };
          }

          return (
            <motion.div
              key={idx}
              initial={false}
              animate={animateProps}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              onClick={() => {
                if (position === 'left') prevSlide();
                if (position === 'right') nextSlide();
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className={`absolute w-[calc(100%-3rem)] max-w-[340px] md:max-w-[420px] testimonial-card bg-white dark:bg-dark-section dark:shadow-none dark:border-y dark:border-r dark:border-white/5 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-l-4 border-l-primary-green flex flex-col justify-between h-[350px] md:h-[400px] select-none ${position === 'center' ? 'cursor-default shadow-2xl' : 'cursor-pointer hover:opacity-100 transition-opacity duration-300'}`}
            >
              <div className="absolute top-0 right-0 bg-light-green dark:bg-black/40 rounded-bl-3xl w-16 h-16 flex items-start justify-end p-3 opacity-50">
                <Quote className="text-primary-green w-6 h-6" />
              </div>

              <div>
                <div className="flex gap-1 text-yellow-400 mb-6 drop-shadow-sm">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>

                <p className="text-text-muted dark:text-gray-300 italic leading-relaxed relative z-10 line-clamp-6">"{t.text}"</p>
              </div>

              <div className="flex items-center gap-4 border-t border-dark-bg/10 dark:border-white/10 pt-5 mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-primary-green shadow-sm object-cover"
                />
                <div>
                  <h4 className="font-serif font-bold text-lg text-text-dark dark:text-white">{t.name}</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-green">{t.location}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons - Bottom Aligned */}
      <div className="max-w-5xl mx-auto px-6 mt-4 relative z-10 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border-2 border-primary-green flex items-center justify-center text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center text-white hover:bg-green-700 hover:shadow-xl transition-all duration-300 shadow-green-600/30 shadow-md transform hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

