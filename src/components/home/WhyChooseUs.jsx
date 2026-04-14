import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { Link } from 'react-router-dom';
import BlobButton from '../shared/BlobButton';

export default function WhyChooseUs() {
  const features = [
    { title: "Certified & Lab-Tested Products", desc: "Every batch verified for maximum efficacy and safety." },
    { title: "Free Agronomist Consultation", desc: "Expert advice tailored to your soil and crop type." },
    { title: "Pan-India Delivery Network", desc: "Timely supply chains ensuring you never miss a season." },
    { title: "24/7 Customer Support", desc: "Round-the-clock assistance for all farming inquiries." }
  ];

  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="Agronomist.png"
            alt="Agronomist inspecting crops"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="font-serif text-2xl font-bold mb-2 text-green-500">Dedicated to Farming Excellence</h3>
            <p className="text-white/80 text-sm">Providing hands-on support in the field.</p>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div>
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="People Choose Us For Our Great Offers"
            highlightWord="Our Great Offers"
          />

          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 mb-10"
          >
            {features.map((item, idx) => (
              <motion.li key={idx} variants={listItem} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary-green w-8 h-8 shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif font-bold text-xl text-text-dark dark:text-white mb-1">{item.title}</h4>
                  <p className="text-text-muted dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/contact">
              <BlobButton className="flex items-center gap-2 group">
                Get A Quote
              </BlobButton>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
