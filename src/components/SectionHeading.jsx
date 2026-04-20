import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, highlightWord, className = "" }) {
  // Logic to color specific word in title
  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightWord.toLowerCase() ?
        <span key={i} className="text-primary-green">{part}</span> : part
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-white bg-primary-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
        {renderTitle()}
      </h2>
    </motion.div>
  );
}
