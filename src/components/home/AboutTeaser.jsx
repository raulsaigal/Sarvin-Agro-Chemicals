import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { Link } from 'react-router-dom';
import BlobButton from '../shared/BlobButton';

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300 overflow-hidden relative z-0">

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-primary-green/5 dark:bg-primary-green/10 rounded-full blur-[80px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[400px] md:h-[500px] bg-accent-green/5 dark:bg-accent-green/10 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side: Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] sm:h-[400px] md:h-[500px]"
        >
          {/* Mobile: single clean image */}
          <img
            src="/Indian Farmer Agriculture Life.jpg"
            alt="Farming"
            className="md:hidden w-full h-full object-cover object-[center_15%] sm:object-top rounded-xl shadow-lg"
          />
          {/* Desktop: floating collage */}
          <motion.img
            src="/Indian Farmer Agriculture Life.jpg"
            alt="Farming Collage 1"
            className="hidden md:block absolute top-0 left-0 w-3/4 h-[450px] object-cover rounded-xl shadow-lg border-3 border-white dark:border-dark-bg z-10"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, zIndex: 30 }}
          />
          <motion.img
            src="/download (1).jpg"
            alt="Farming Collage 2"
            className="hidden md:block absolute bottom-0 right-0 w-2/3 h-[280px] object-cover rounded-xl shadow-2xl border-3 border-white dark:border-dark-bg z-20"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.05, zIndex: 30 }}
          />
          {/* Badge Overlay */}
          <div className="absolute bottom-4 right-4 md:top-1/2 md:left-1/2 translate-x-0 translate-y-0 md:-translate-x-1/2 md:-translate-y-1/2 bg-primary-green text-white w-24 h-24 md:w-30 md:h-30 rounded-full flex flex-col items-center justify-center p-3 md:p-4 shadow-xl border-2 border-white dark:border-dark-bg rotate-12 hover:rotate-0 transition-transform duration-500 z-40">
            <span className="text-2xl md:text-3xl font-serif font-bold">5+</span>
            <span className="text-[10px] md:text-xs text-center font-semibold uppercase">Years Exp.</span>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div>
          <SectionHeading
            eyebrow="ABOUT US"
            title="India's Trusted Agrochemical Professionals"
            highlightWord="Agrochemical Professionals"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-muted text-lg mb-6 leading-relaxed">
              At Sarvin Agrochemical, we are committed to revolutionizing agriculture by delivering scientifically formulated, reliable, and sustainable agrochemical solutions. We empower farmers to achieve greater yields while preserving soil health for future generations.
            </p>
            <p className="text-text-muted mb-10 leading-relaxed">
              With a pan-India network and decades of expertise, we bring cutting-edge research directly to your fields. From seeds to fertilizers, we've got your farming needs covered.
            </p>

            <Link to="/contact">
              <BlobButton>Get A Quote</BlobButton>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
