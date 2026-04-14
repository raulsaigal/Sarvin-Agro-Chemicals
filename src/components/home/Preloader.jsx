import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const sentence = "SARVIN AGRO CHEMICALS";
const letters = Array.from(sentence);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.4 * i },
    }),
};

const childVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "tween", duration: 1.0 }
    },
    hidden: {
        opacity: 0,
        y: 20,
    },
};

export default function Preloader({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide preloader after 2.5s
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => { if (onComplete) onComplete(); }, 1000); // give time for exit animation
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0 }}
                >
                    {/* Left Panel */}
                    <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1/2 bg-bg"
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    {/* Right Panel */}
                    <motion.div
                        className="absolute right-0 top-0 bottom-0 w-1/2 bg-bg"
                        exit={{ x: "100%" }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                    />

                    {/* Content Wrapper */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Animated Text */}
                        <motion.div
                            className="flex space-x-1 sm:space-x-2 font-serif text-2xl sm:text-4xl md:text-5xl text-green-500 tracking-widest mb-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {letters.map((letter, index) => (
                                <motion.span key={index} variants={childVariants}>
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Progress Line */}
                        <motion.div
                            className="h-[2px] bg-green-500 w-200 sm:w-200"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2.0, ease: "easeInOut", delay: 0.6 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
