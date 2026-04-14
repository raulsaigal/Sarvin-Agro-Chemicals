import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { Link } from 'react-router-dom';
import SvgButton from '../shared/SvgButton';

export default function ProjectsGallery() {
  const images = [
    { src: "download (2).jpg", alt: "Corn Field", className: "row-span-2 col-span-1 min-h-[400px]" },
    { src: "download (3).jpg", alt: "Wheat Farm", className: "col-span-1 min-h-[200px]" },
    { src: "download (4).jpg", alt: "Soil Testing", className: "col-span-1 min-h-[400px]" }
  ];

  return (
    <section className="py-24 bg-off-white dark:bg-[#151515] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text Content */}
        <div className="order-2 md:order-1">
          <SectionHeading
            eyebrow="OUR PROJECTS"
            title="We Have Served 50+ More Projects"
            highlightWord="50+ More Projects"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-muted dark:text-gray-400 mb-8 text-lg leading-relaxed">
              From large-scale agrarian estates to localized cooperative farms, our solutions have continuously improved crop yield across the subcontinent. Witness the transformative power of quality agrochemicals and dedicated advisory through our extensive portfolio.
            </p>
            <Link to="/contact">
              <SvgButton className="mt-8">Explore More</SvgButton>
            </Link>
          </motion.div>
        </div>

        {/* Right: Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 grid grid-cols-2 gap-4 auto-rows-[200px] mb-40"
        >
          {images.map((img, idx) => (
            <div key={idx} className={`rounded-card overflow-hidden group ${img.className}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
