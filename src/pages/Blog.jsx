import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, X, Clock, Download, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/shared/PageHero';

const defaultContent = "During the peak of summer, high temperatures and dry spells can cause significant stress to crops, leading to lower yields and poor grain quality. Farmers must adopt specialized strategies to combat heat stress.\n\nFirst, optimize irrigation scheduling. Using drip irrigation allows for a constant, minimal moisture level without waterlogging. Combining this with mulching helps retain soil moisture and lowers ground temperature. Secondly, applying potassium-rich fertilizers can improve the plants' drought tolerance by regulating stomatal opening.\n\nFinally, modern bio-stimulants, particularly those based on seaweed extracts or amino acids, have shown incredible results in helping crops recover from heat shock. Incorporating these into your summer routine is a proven way to safeguard your yield.";

const MOST_READ_ARTICLES = [
  {
    id: 1,
    title: "Top 5 Organic Fertilizers That Double Crop Yield — Proven by ICAR Research",
    excerpt: "Organic fertilizers are changing the agricultural landscape. See which top 5 fertilizers have been proven to enhance yield without damaging soil ecology.",
    category: "Fertilizers",
    author: "Dr. Vikram Singh",
    date: "Mar 12, 2026",
    content: defaultContent,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Why Neem-Based Pesticides Are the Safest Choice for Indian Farmers in 2026",
    excerpt: "Shift towards natural solutions with Neem to protect crops. Our expert breakdown shows why organic pesticides perform better against resilient pests.",
    category: "Pesticides",
    author: "Anjali Desai",
    date: "Feb 28, 2026",
    content: defaultContent,
    image: "Neem crop.png",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "High-Yield Hybrid Seeds vs. Traditional Seeds — What's Right for Your Soil?",
    excerpt: "Choosing between hybrid and traditional seeds can make or break your harvest. Learn the economic and environmental factors for your next sowing cycle.",
    category: "Seeds",
    author: "Rahul Sharma",
    date: "Jan 15, 2026",
    content: defaultContent,
    image: "hybrid img.png",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Soil pH and Nutrient Balance: The Hidden Key to Better Harvests",
    excerpt: "Nutrient lockout due to improper pH levels costs farmers thousands every season. Discover how to effectively test and amend your soil.",
    category: "Soil Health",
    author: "Dr. Ramesh Verma",
    date: "Dec 10, 2025",
    content: defaultContent,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read"
  }
];

const LATEST_ARTICLES = [
  {
    id: 5,
    title: "Kharif Season 2026: Best Fertilizer Schedule for Paddy and Maize",
    excerpt: "An actionable, week-by-week guide for applying NPK and micronutrients perfectly timed for the Kharif monsoon cycle to guarantee robust growth.",
    category: "Farming Tips",
    author: "Dr. Ramesh Verma, Agronomist",
    date: "May 02, 2026",
    content: defaultContent,
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Integrated Pest Management (IPM): A Complete Guide for Small Farmers",
    excerpt: "Learn how to combine biological control, habitat manipulation, and modified cultural practices to beat pests sustainably without heavy chemicals.",
    category: "Pest Control",
    author: "Dr. Vikram Singh",
    date: "Apr 28, 2025",
    content: defaultContent,
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=800&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    id: 7,
    title: "New Govt-Approved Organic Pesticides Available in India — Full List",
    excerpt: "Stay compliant and protect your soil ecology. We break down the newly regulated list of safe, organic pesticide alternatives ready for market.",
    category: "News",
    author: "Neha Kapoor",
    date: "Apr 15, 2025",
    content: defaultContent,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop",
    readTime: "3 min read"
  }
];

const SEASONAL_TIPS = [
  {
    id: 8,
    title: "Best seeds to sow in Kharif season (Rice, Maize, Soybean)",
    icon: "🌱",
    tips: [
      "Select high-yield, drought-resistant Rice hybrids suited for erratic monsoons.",
      "Ensure Soybean seeds are treated with Rhizobium cultures before sowing.",
      "Opt for short-duration Maize varieties to avoid late-season rain damage."
    ],
    link: "#"
  },
  {
    id: 9,
    title: "Fertilizer application schedule — NPK ratio for monsoon crops",
    icon: "⚙️",
    tips: [
      "Apply basal dose of Phosphorus and Potassium right at sowing.",
      "Split Nitrogen application into 3 doses to prevent leaching from heavy rains.",
      "Incorporate Zinc Sulphate if soil testing shows micronutrient deficiency."
    ],
    link: "#"
  },
  {
    id: 10,
    title: "Monsoon pest alert — common pests and organic control methods",
    icon: "🐛",
    tips: [
      "Monitor fields for Stem Borer in paddy; use pheromone traps early.",
      "Spray Neem oil (1500 ppm) as a preventive measure against sap-sucking insects.",
      "Ensure proper field drainage to prevent root rot and fungal diseases."
    ],
    link: "#"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state && location.state.postId) {
      const allPosts = [...MOST_READ_ARTICLES, ...LATEST_ARTICLES];
      const post = allPosts.find(p => p.id === location.state.postId);
      if (post) {
        setSelectedPost(post);
      }

      window.history.replaceState({}, document.title)
    }
  }, [location]);

  if (typeof window !== 'undefined') {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <>
      <SEO
        title="Blog & Insights"
        description="Stay updated with the latest in agriculture, farming innovations, and crop protection strategies by Sarvin Agrochemical."
      />
      <PageHero
        title="Our Blog"
        bgImage="blog img.png"
        currentPath="Blog"
        overlay={false}
      />

      <div className="bg-white dark:bg-dark-bg transition-colors duration-300">

        {/* SECTION 1 — POPULAR ARTICLES */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-text-dark dark:text-white mb-4">
              Most Read Articles
            </h2>
            <div className="w-24 h-1 bg-primary-green rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MOST_READ_ARTICLES.map((post, idx) => (
              <motion.article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white dark:bg-dark-section rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-white/5 flex flex-col group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 bg-primary-green text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif font-bold text-2xl text-text-dark dark:text-white mb-4 group-hover:text-primary-green transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-text-muted dark:text-gray-400 mb-8 flex-grow leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-400 font-medium tracking-wide">
                      <Clock size={16} />
                      {post.readTime}
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* SECTION 2 — LATEST ARTICLES */}
        <section className="py-20 px-6 bg-off-white dark:bg-[#1a1a1a] border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-serif font-bold text-text-dark dark:text-white mb-4">
                Latest from the Field
              </h2>
              <div className="w-24 h-1 bg-primary-green rounded-full"></div>
            </div>

            <div className="flex flex-col gap-8">
              {LATEST_ARTICLES.map((post, idx) => (
                <motion.article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white dark:bg-dark-section rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-white/5 flex flex-col md:flex-row group cursor-pointer"
                >
                  <div className="relative w-full md:w-2/5 lg:w-1/3 h-64 md:h-auto overflow-hidden shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow justify-center">
                    <div className="flex items-center gap-4 text-xs text-text-muted dark:text-gray-400 mb-4 font-medium uppercase tracking-wider">
                      <span className="text-primary-green font-bold">{post.category}</span>
                      <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl md:text-3xl text-text-dark dark:text-white mb-4 group-hover:text-primary-green transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-text-muted dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-sm text-text-dark dark:text-gray-300 font-medium bg-gray-50 dark:bg-white/5 px-4 py-2 rounded-full w-fit">
                        <User size={14} className="text-primary-green" />
                        {post.author}
                      </div>

                      <span className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — SEASONAL FARMING GUIDE */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-text-dark dark:text-white mb-4">
              Seasonal Farming Tips — Upcoming Season
            </h2>
            <div className="w-24 h-1 bg-primary-green rounded-full"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-green text-white p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center mb-10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl pointer-events-none"></div>
            <div className="flex flex-col relative z-10">
              <span className="text-accent-green font-bold uppercase tracking-widest text-sm mb-2">Current Focus</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold">Kharif 2026 — June to October</h3>
            </div>
            <div className="mt-6 md:mt-0 relative z-10 hidden md:block">
              <span className="bg-white/20 px-6 py-2 rounded-full font-semibold backdrop-blur-sm">Monsoon Cycle Guide</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {SEASONAL_TIPS.map((tip, idx) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white dark:bg-dark-section p-8 rounded-3xl shadow-card border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-primary-green/10 dark:bg-primary-green/20 text-3xl flex items-center justify-center rounded-2xl mb-6">
                  {tip.icon}
                </div>
                <h4 className="font-serif font-bold text-xl text-text-dark dark:text-white mb-6 leading-snug">
                  {tip.title}
                </h4>
                <ul className="space-y-4 mb-8">
                  {tip.tips.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-primary-green shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a href={tip.link} className="inline-flex items-center gap-1 text-primary-green font-semibold text-sm hover:underline mt-auto">
                  View related research <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="bg-primary-green hover:bg-cta-green-hover text-white font-bold py-4 px-8 rounded-full flex items-center gap-3 shadow-btn hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <Download size={20} />
              Download Seasonal Guide PDF
            </button>
          </motion.div>
        </section>

      </div>

      {/* Article Read Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-bg w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/40 hover:bg-primary-green text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="relative h-64 md:h-80 w-full">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 md:left-10 bg-primary-green text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {selectedPost.category}
                </div>
              </div>

              <div className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark dark:text-white mb-6 leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="flex items-center gap-6 text-sm text-text-muted dark:text-gray-400 mb-8 font-medium pb-8 border-b border-gray-100 dark:border-white/10">
                  {selectedPost.date && (
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary-green" />
                      {selectedPost.date}
                    </div>
                  )}
                  {selectedPost.author && (
                    <div className="flex items-center gap-2">
                      <User size={18} className="text-primary-green" />
                      {selectedPost.author}
                    </div>
                  )}
                  {selectedPost.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary-green" />
                      {selectedPost.readTime}
                    </div>
                  )}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-text-muted dark:text-gray-300">
                  {selectedPost.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
