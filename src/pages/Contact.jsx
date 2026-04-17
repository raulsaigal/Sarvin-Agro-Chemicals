import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/shared/PageHero';

function ContactInfoGrid() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      e.target.reset();

      // Clear success state after 4 seconds
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const cards = [
    {
      icon: <MapPin className="text-primary-green w-8 h-8" />,
      title: "Our Office",
      lines: [
        { label: "Corporate", text: "Sinha House, Road No. 05,\nRajendra Nagar, Patna – 800016" },
        { label: "Branch", text: "1573LPW, LPW Gaur City Centre,\nGreater Noida West" }
      ]
    },
    {
      icon: <Phone className="text-primary-green w-8 h-8" />,
      title: "Phone",
      lines: [
        { label: "Toll-Free", text: "1800-891-0612" },
        { label: "Customer Care", text: "92638 92020" }
      ]
    },
    {
      icon: <Mail className="text-primary-green w-8 h-8" />,
      title: "Email",
      lines: [
        { label: "Sales & Support", text: "info@sarvinagrochemical.com" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-dark-bg transition-colors duration-300 relative">

      {/* Floating Success Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] flex items-center gap-4 bg-white dark:bg-dark-section text-text-dark dark:text-white px-6 py-4 rounded-xl shadow-2xl border border-dark-bg/5 dark:border-white/10 border-l-4 border-l-primary-green dark:border-l-accent-green"
          >
            <div className="bg-primary-green/10 dark:bg-accent-green/10 p-2 rounded-full">
              <CheckCircle size={24} className="text-primary-green dark:text-accent-green" />
            </div>
            <span className="font-serif font-bold text-lg">Message Send</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-light-green dark:bg-black/30 hidden lg:block rounded-l-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

        {/* Left: Contact Info */}
        <div className="flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-dark dark:text-white mb-6"
          >
            We'd Love To Hear From You
          </motion.h2>

          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-dark-section dark:border-white/10 dark:shadow-none rounded-card shadow-card p-8 flex items-start gap-6 border border-dark-bg/10 hover:bg-green-700 hover:border-black hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="bg-light-green dark:bg-black/50 group-hover:bg-white/20 p-4 rounded-full shrink-0 transition-colors duration-300">
                <span className="group-hover:[&>svg]:text-white [&>svg]:transition-colors [&>svg]:duration-300">{card.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-serif font-bold text-xl text-text-dark dark:text-white group-hover:text-white mb-4 transition-colors duration-300">{card.title}</h4>
                <div className="space-y-4">
                  {card.lines.map((ln, i) => (
                    <div key={i} className="text-sm">
                      <span className="font-bold text-text-dark dark:text-gray-300 group-hover:text-white block mb-1 transition-colors duration-300">{ln.label}:</span>
                      <span className="text-text-muted dark:text-gray-400 group-hover:text-white/85 whitespace-pre-line leading-relaxed transition-colors duration-300">{ln.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Contact Form */}
        <div className="relative mt-0 lg:mt-12">
          {/* Floating Image above the form — hidden on mobile to avoid overlaps */}
          <motion.img
            src="/contact us.png"
            alt="Contact Support"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden sm:block absolute -top-[90px] left-1/2 -translate-x-1/2 w-[140px] z-30 drop-shadow-2xl pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-dark-section dark:border-white/10 dark:shadow-none rounded-card shadow-2xl p-6 md:p-12 sm:pt-24 border border-dark-bg/5 relative z-20"
          >
            <h3 className="font-serif font-bold text-2xl text-text-dark dark:text-white mb-2 text-center md:text-left">Send a Message</h3>
            <p className="text-text-muted dark:text-gray-400 text-sm mb-8 text-center md:text-left">Got a question? Fill the form below and we'll reply shortly.</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder="Your Name" className="contact-input" required disabled={isSubmitting} />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="contact-input" required disabled={isSubmitting} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="tel" placeholder="Phone Number" className="contact-input" required disabled={isSubmitting} />
                </div>
                <div>
                  <input type="text" placeholder="Subject" className="contact-input" required disabled={isSubmitting} />
                </div>
              </div>

              <div>
                <textarea placeholder="Write your message here..." rows="5" className="contact-input resize-none" required disabled={isSubmitting}></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`btn-primary w-full flex items-center justify-center gap-2 mt-4 transition-all duration-300 ${isSuccess
                  ? '!bg-primary-green cursor-default shadow-none'
                  : 'bg-cta-green hover:shadow-btn'
                  } ${(isSubmitting) ? 'opacity-80 cursor-wait' : ''}`}
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 size={16} className="animate-spin" /></>
                ) : isSuccess ? (
                  <>Message Sent <CheckCircle size={16} /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function GoogleMaps() {
  return (
    <section className="w-full h-[500px]">
      <iframe
        title="Sarvin Agrochemical Location"
        src="https://maps.google.com/maps?q=Sarvin+Agro+Chemicals+PVT.+LTD.&t=&z=18&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Sarvin Agrochemical for any inquiries regarding seeds, fertilizers, or agrochemical products." />
      <PageHero title="Get In Touch" bgImage="contact bg.png" currentPath="Contact Us"
        titleClassName="text-primary-green dark:text-white"
      />
      <ContactInfoGrid />
      <GoogleMaps />
    </>
  );
}
