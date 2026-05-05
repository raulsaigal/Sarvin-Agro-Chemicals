import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import PageHero from '../components/shared/PageHero';
import SEO from '../components/SEO';

const teamMembers = [
  {
    id: 1,
    name: 'Amit Kumar',
    bio: 'Skilled in managing customer relationships and optimising data operations for improved efficiency. Focused on scalable solutions that enhance user experience and business performance.',
    image: '/Teams/amit.png',
    className: 'object-[50%_50%]',
    socials: {}
  },
  {
    id: 2,
    name: 'Ankit Kumar',
    bio: 'He’s the dependable force behind the scenes—keeping everything organized, smooth, and running just right. Always attentive, always efficient, he makes sure the office feels effortless.',
    image: '/Teams/ankit.png',
    className: 'object-[50%_25%]',
    socials: {}
  },
  {
    id: 10,
    name: 'Shreekant Kumar',
    role: 'Accountant',
    bio: 'Shreekant has 5 years of experience in accounting and finance',
    image: '/Teams/shreekant.png',
    className: 'object-[50%_35%]',
    socials: { linkedin: 'https://www.linkedin.com/in/chauhanshreekant-singh-6a7978140/' }
  },
  {
    id: 8,
    name: 'Sanskar ',
    role: 'Account Executive',
    bio: 'Sanskar has 3 years of experience in accounting and finance',
    image: '/Teams/sanskar.png',
    className: 'object-[50%_80%]',
    socials: { linkedin: 'https://www.linkedin.com/in/sanskar-sanskar-49107523b/' }
  },
  {
    id: 3,
    name: 'Anand Kumar',
    role: 'CRM & Data Operation Executive',
    bio: 'Skilled in managing customer relationships and optimising data operations for improved efficiency.',
    image: '/Teams/anand.png',
    className: 'object-[50%_50%]',
    socials: { linkedin: 'https://www.linkedin.com/in/anand-kumar-5b253b323/' }
  },
  {
    id: 7,
    name: 'Ujjwal Kumar',
    role: 'Social Media Manager',
    bio: 'Ujjwal has 2 years of experience in social media management and digital marketing',
    image: '/Teams/ujjwal.png',
    className: 'object-[50%_45%]',
    socials: { linkedin: 'https://www.linkedin.com/in/ujjwal-kumar-7a5935284/' }
  },
  {
    id: 9,
    name: 'Aditi Kumari',
    role: 'Assistant Marketing Head',
    bio: 'Aditi has 2 years of experience in marketing and sales',
    image: '/Teams/aditi.png',
    className: 'object-[50%_35%]',
    socials: { linkedin: 'https://www.linkedin.com/in/aditi-kumari-45b7a3344/' }
  },
  {
    id: 4,
    name: 'Kashish Kumari',
    role: 'HR Executive',
    bio: 'Kashish has 2 years of experience in agricultural innovations and sustainable farming practices, aiming to revolutionize the Indian agro-chemical landscape.',
    image: '/Teams/Kashish.png',
    className: 'object-[50%_80%]',
    socials: { linkedin: 'https://www.linkedin.com/in/kashish-kumari-56a6432a1/' }
  },
  {
    id: 6,
    name: 'Aditya Sharma',
    role: 'Video Editor',
    bio: 'Aditya has 1 years of experince in Video editing and content creation',
    image: '/Teams/aditya.png',
    className: 'object-[50%_3%]',
    socials: { linkedin: '#' }
  },
  {
    id: 5,
    name: 'Pinki Kumari',
    role: 'Sales Executive',
    bio: 'Pinki has 2 years of experience in agricultural innovations and sustainable farming practices, aiming to revolutionize the Indian agro-chemical landscape.',
    image: '/Teams/pinki.png',
    className: 'object-[50%_20%]',
    socials: { linkedin: 'https://www.linkedin.com/in/pinki-kumari-4a9b55274/' }
  },
  {
    id: 17,
    name: 'Kumari Priya Bharti',
    role: 'Agri Sales Intern',
    bio: 'Priya has 1 years of experience in agriculture and soil science',
    image: '/Teams/priya.png',
    className: 'object-[50%_50%]',
    socials: { linkedin: 'https://www.linkedin.com/in/priya-jha-51522822a/' }
  },
  {
    id: 11,
    name: 'Deepa Bharti',
    role: 'Agri Advisor Executive',
    bio: 'Deepa has 1 years of experience in agriculture and soil science',
    image: '/Teams/deepa.png',
    className: 'object-[50%_75%]',
    socials: { linkedin: 'https://www.linkedin.com/in/deepa-bharti-3a5b6520a/' }
  },
  {
    id: 12,
    name: 'Payal Kumari',
    role: 'Sales & Marketing Executive',
    bio: 'Payal has 1 years of experience in sales and marketing',
    image: '/Teams/payal.png',
    className: 'object-[50%_80%]',
    socials: { linkedin: 'https://www.linkedin.com/in/payal7480/' }
  },
  {
    id: 13,
    name: 'Gaurav Kumar',
    role: 'Agri Advisor Executive',
    bio: 'Gaurav has 1 years of experience in agriculture and soil science',
    image: '/Teams/gaurav.png',
    className: 'object-[50%_40%]',
    socials: { linkedin: 'https://www.linkedin.com/in/gaurav-kumar-a9271b259/' }
  },
  {
    id: 14,
    name: 'Pawan Kumar Yadav',
    role: 'Agri Advisor Executive',
    bio: 'Pawan has 1 years of experience in agriculture and soil science',
    image: '/Teams/pawan.png',
    className: 'object-[50%_70%]',
    socials: { linkedin: 'https://www.linkedin.com/in/pawan-kumar-yadav-63429a383/' }
  },
  {
    id: 15,
    name: 'Pradeep Kumar Sharma',
    role: 'Agri Advisor Executive',
    bio: 'Pradeep has 1 years of experience in agriculture and soil science',
    image: '/Teams/pradeep.png',
    className: 'object-[50%_30%]',
    socials: { linkedin: 'https://www.linkedin.com/in/pradeep-kumar-sharma-2b5256391/' }
  },
  {
    id: 16,
    name: 'Sudipta Das',
    role: 'Agri Advisor Intern',
    bio: 'Sudipta has 1 years of experience in agriculture and soil science',
    image: '/Teams/sudipta.png',
    className: 'object-[50%_40%]',
    socials: { linkedin: 'https://www.linkedin.com/in/sudipta-das20/' }
  },
  {
    id: 20,
    name: 'Rahul Raj',
    role: 'MERN Stack Developer',
    bio: 'Skilled in building scalable web apps using MongoDB, Express.js, React, and Node.js. Focused on clean code, responsive design, and workflow optimization.',
    image: '/Teams/rahul.png',
    className: 'object-[50%_30%]',
    socials: { linkedin: 'https://www.linkedin.com/in/rahul-raj-970426228/' }
  },
  {
    id: 18,
    name: 'Sunny Kumar',
    role: 'Logistic Support Executive',
    bio: 'Sunny has 1 years of experience in logistics and supply chain management',
    image: '/Teams/sunny.png',
    className: 'object-[50%_30%]',
    socials: { linkedin: 'https://www.linkedin.com/in/sunny-kumar-a9a015287/' }
  },
  {
    id: 19,
    name: 'Prince Raj',
    role: 'Data Analyst Trainee',
    bio: 'Prince has 1 years of experience in data analysis',
    image: '/Teams/prince.png',
    className: 'object-[50%_40%]',
    socials: { linkedin: 'https://www.linkedin.com/in/prince-raj-tech/' }
  },
  {
    id: 21,
    name: 'Shivani',
    role: 'Agri Advisor Executive',
    bio: 'Shivani has 1 years of experience in agriculture and soil science',
    image: '/Teams/shivani.png',
    className: 'object-[50%_10%]',
    socials: { linkedin: 'https://www.linkedin.com/in/shivani-kashyap-261422350/' }
  }
];

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Team() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <SEO
        title="Our Team - Sarvin Agro"
        description="Meet the creative and dedicated team of professionals at Sarvin Agro Chemicals, driving innovation in sustainable agriculture."
      />

      {/* Hero Section */}
      <PageHero
        title="Our Core Team"
        subtitle="The minds and hearts behind Sarvin Agro's innovations."
        bgImage="Our team.png"
        overlay={false}
        titleClassName="text-green-500 dark:text-white"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#0a120b] transition-colors duration-300 relative overflow-hidden">

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-green/5 dark:bg-primary-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent-yellow/5 dark:bg-accent-yellow/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary-green dark:text-accent-green uppercase tracking-widest mb-3">
                Dedicated Professionals
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-text-dark dark:text-white mb-6">
                Meet The Experts
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                Our team blends scientific rigor with agricultural passion, working tirelessly to provide solutions that empower farmers and protect our environment.
              </p>
            </motion.div>
          </div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="group relative"
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="bg-white dark:bg-[#111a13] rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-green/20">

                  {/* Image Container */}
                  <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 relative z-10 ${member.className || 'object-top'}`}
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Text Readability on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                    {/* Floating Social Icons */}
                    <AnimatePresence>
                      {hoveredId === member.id && (
                        <motion.div
                          className="absolute bottom-6 left-0 w-full flex justify-center gap-4 z-30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {member.socials.linkedin && (
                            <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors duration-300 shadow-lg">
                              <FaLinkedinIn size={18} />
                            </a>
                          )}
                          {member.socials.twitter && (
                            <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300 shadow-lg">
                              <FaTwitter size={18} />
                            </a>
                          )}
                          {member.socials.mail && (
                            <a href={member.socials.mail} className="w-10 h-10 rounded-full bg-white text-primary-green flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors duration-300 shadow-lg">
                              <FaEnvelope size={18} />
                            </a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 bg-white dark:bg-[#111a13] relative z-20">
                    <h4 className="text-2xl font-serif font-bold text-text-dark dark:text-white mb-1 group-hover:text-primary-green dark:group-hover:text-accent-green transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-sm font-semibold text-primary-green dark:text-accent-green uppercase tracking-wide mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {member.bio}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}
