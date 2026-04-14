import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function CommitmentSplit() {
  const commitments = [
    "Uncompromising product quality and safety standards",
    "Continuous innovation in agricultural sciences",
    "Dedicated support for rural farming communities",
    "Commitment to environmental sustainability"
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      {/* Left Side: Dark Content Area */}
      <div className="md:w-1/2 bg-dark-bg text-white p-12 md:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-white bg-primary-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            OUR COMMITMENT
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-10  text-white dark:text-green-400">
            The Most Reliable Professional Company for Agriculture
          </h2>

          <ul className="space-y-6">
            {commitments.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-center gap-4 text-white/90 text-sm md:text-base font-medium"
              >
                <div className="bg-primary-green/20 p-1.5 rounded-full">
                  <Check className="text-accent-green w-5 h-5 shrink-0" />
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right Side: Full Bleed Image */}
      <div className="md:w-1/2 h-[500px] md:h-[750px] relative overflow-hidden group">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src="download (5).jpg"
          alt="Happy Farmer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary-green/10"></div>
      </div>
    </section>
  );
}
