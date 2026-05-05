import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center focus:outline-none hover:text-accent-green transition-colors duration-300 z-50 cursor-pointer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Dark Mode"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <mask id="moon-mask">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <motion.circle
            cx="12"
            cy="12"
            r="5"
            fill="black"
            initial={false}
            animate={{
              cx: isDark ? 16 : 12,
              cy: isDark ? 8 : 12,
              r: isDark ? 6 : 0
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </mask>

        <motion.circle
          cx="12"
          cy="12"
          r="5"
          mask="url(#moon-mask)"
          fill="currentColor"
          initial={false}
          animate={{
            r: isDark ? 9 : 5,
            rotate: isDark ? -45 : 0
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        <motion.g
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.3 : 1,
            rotate: isDark ? -90 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </svg>
    </motion.button>
  );
}
