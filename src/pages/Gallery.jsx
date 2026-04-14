import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/shared/PageHero';

// MOCK DATA for Gallery (Easily replaceable)
const galleryData = [
  { id: 1, title: 'Client Meeting in Punjab', category: 'Client Visits', src: 'https://picsum.photos/seed/agri1/800/600' },
  { id: 2, title: 'Annual Distributor Conference', category: 'Distributor Meetings', src: 'https://picsum.photos/seed/dist2/800/600' },
  { id: 3, title: 'Diwali Celebration at HQ', category: 'Festival Celebrations', src: 'https://picsum.photos/seed/fest3/800/600' },
  { id: 4, title: '25th Foundation Day Ceremony', category: 'Company Foundation Day', src: 'https://picsum.photos/seed/found4/800/600' },
  { id: 5, title: 'Field Visit & Client Overview', category: 'Client Visits', src: 'https://picsum.photos/seed/visit5/800/600' },
  { id: 6, title: 'Holi Colors with the Team', category: 'Festival Celebrations', src: 'https://picsum.photos/seed/holi6/800/600' },
  { id: 7, title: 'Regional Distributors Meet', category: 'Distributor Meetings', src: 'https://picsum.photos/seed/meet7/800/600' },
  { id: 8, title: 'Foundation Day Awards', category: 'Company Foundation Day', src: 'https://picsum.photos/seed/award8/800/600' },
  { id: 9, title: 'Client Interaction Gujarat', category: 'Client Visits', src: 'https://picsum.photos/seed/guj9/800/600' },
];

const categories = ['All', 'Client Visits', 'Distributor Meetings', 'Festival Celebrations', 'Company Foundation Day'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === 'All' ? galleryData : galleryData.filter(img => img.category === filter);

  return (
    <>
      <SEO title="Our Gallery" description="Explore the vibrant life at Sarvin Agrochemical through our events, meetings, and celebrations." />
      <PageHero title="Life At Sarvin" bgImage="https://picsum.photos/seed/gallerybg/1920/600" currentPath="Gallery" />

      <section className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-text-dark dark:text-white mb-4"
            >
              Our Gallery
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-muted dark:text-gray-400 max-w-2xl mx-auto"
            >
              Take a glimpse into our company culture, distributor events, and memorable foundation moments.
            </motion.p>
          </div>

          {/* Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary-green text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-dark-section text-text-muted dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImg(item)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-2xl transition-shadow bg-dark-bg"
                >
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="bg-primary-green text-white text-xs px-3 py-1 rounded-full mb-2 inline-block">
                        {item.category}
                      </span>
                      <h4 className="text-white font-serif font-bold text-xl flex justify-between items-center">
                        {item.title}
                        <ZoomIn size={20} className="opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-text-muted dark:text-gray-400">
              No images found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <span className="text-primary-green font-bold text-sm track-wider uppercase">{selectedImg.category}</span>
                <h3 className="text-white font-serif text-2xl md:text-3xl mt-1">{selectedImg.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
