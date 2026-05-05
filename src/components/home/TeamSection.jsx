import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TeamSection() {
  const navigate = useNavigate();
  const team = [
    {
      name: "Anamika Anand",
      role: "CEO | Founder",
      img: "anamika.png",
      linkedinUrl: "https://www.linkedin.com/in/anamika-anand-866052215/",
    },
  ];

  const descriptionCard = {
    title: "About the Founder",
    description: "Anamika Anand is a visionary leader with over a decade of experience in the agro-chemical industry. She is passionate about sustainable agriculture and empowering farmers with innovative solutions. Her leadership has driven Sarvin Agro to new heights, focusing on quality, integrity, and customer satisfaction."
  };

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
            eyebrow="Meet the Founder"
            title="The Mind Behind PAIDAVAAR"
            highlightWord="PAIDAVAAR"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={itemState} className="team-card bg-white dark:bg-dark-section dark:border dark:border-white/10 rounded-xl overflow-hidden shadow-card dark:shadow-none text-center pb-6 group transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col">
              <div className="relative overflow-hidden h-[300px] md:h-[400px]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="text-white hover:text-accent-green"><Phone size={18} /></a>
                  <a href="mailto:[EMAIL_ADDRESS]" className="text-white hover:text-accent-green"><Mail size={18} /></a>
                  <a href={member.linkedinUrl || "#"} target={member.linkedinUrl ? "_blank" : "_self"} rel={member.linkedinUrl ? "noopener noreferrer" : ""} className="text-white hover:text-accent-green flex items-center gap-1.5">
                    <FaLinkedinIn size={18} />
                    {member.linkedinId && <span className="text-sm font-medium">{member.linkedinId}</span>}
                  </a>
                </div>
              </div>
              <div className="pt-6 px-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-serif font-bold text-text-dark dark:text-white mb-1 group-hover:text-primary-green transition-colors">{member.name}</h4>
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary-green mb-4 block">
                    {member.role}
                  </span>
                </div>
                <button
                  className="btn-outline dark:border-white/20 dark:text-gray-300 flex mx-auto items-center gap-2 group-hover:bg-primary-green group-hover:border-primary-green group-hover:text-white transition-all mt-4"
                  onClick={() => member.linkedinUrl ? window.open(member.linkedinUrl, "_blank", "noopener,noreferrer") : null}
                >
                  Connect <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}

          <motion.div variants={itemState} className="bg-white dark:bg-dark-section dark:border dark:border-white/10 rounded-xl p-8 shadow-card dark:shadow-none flex flex-col justify-center h-full md:col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold text-text-dark dark:text-white mb-6">
              {descriptionCard.title}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>{descriptionCard.description}</p>
              <p>Under her guidance, the company has expanded its reach and product offerings, always maintaining a commitment to excellence and environmental responsibility. Her vision is to create a more sustainable and prosperous future for agriculture in India.</p>
            </div>
            <div className="mt-8 flex gap-4">
              <button onClick={() => navigate('/founder-ceo')} className="btn-primary">Read Full Story</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
