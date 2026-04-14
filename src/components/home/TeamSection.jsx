import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function TeamSection() {
  const team = [
    {
      name: "Anamika Anand",
      role: "CEO | Founder",
      img: "https://placehold.co/400x400/212121/4caf50?text=Anamika+Anand",
    },
    {
      name: "Amit Kumar",
      role: "Sales Manager",
      img: "https://placehold.co/400x400/2e7d32/e8f5e9?text=Amit+Kumar",
    },
    {
      name: "Ankit Kumar",
      role: "Field Expert",
      img: "https://placehold.co/400x400/4caf50/f9f9f9?text=Ankit+Kumar",
    }
  ];

  const containerState = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemState = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-light-green dark:bg-[#121212] transition-colors duration-300 section-padding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="MEET OUR TEAM"
            title="Our Creative Team"
            className="!mb-4"
          />
          <p className="text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success, with specialized knowledge in modern agricultural practices.
          </p>
        </div>

        <motion.div
          variants={containerState}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={itemState} className="team-card bg-white dark:bg-dark-section dark:border dark:border-white/10 rounded-xl overflow-hidden shadow-card dark:shadow-none text-center pb-6 group transition-transform duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden h-[250px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="text-white hover:text-accent-green"><Phone size={18} /></a>
                  <a href="#" className="text-white hover:text-accent-green"><Mail size={18} /></a>
                </div>
              </div>
              <div className="pt-1 px-4">
                <h4 className="text-xl font-serif font-bold text-text-dark dark:text-white mb-1 group-hover:text-primary-green transition-colors">{member.name}</h4>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-green mb-4 block">
                  {member.role}
                </span>
                <button className="btn-outline dark:border-white/20 dark:text-gray-300 flex mx-auto items-center gap-2 group-hover:bg-primary-green group-hover:border-primary-green group-hover:text-white transition-all">
                  Connect <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
