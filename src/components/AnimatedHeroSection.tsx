import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import SplitText from './SplitText';

export default function AnimatedHeroSection() {
  const handleAnimationComplete = () => {
    console.log('Hero text animation completed!');
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight text-gray-900 break-words">
            <SplitText
              text="Your hunt for a creative partner is "
              className="text-5xl md:text-6xl font-sans font-bold leading-tight text-gray-900"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, rotate: 10 }}
              to={{ opacity: 1, y: 0, rotate: 0 }}
              threshold={0.1}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="finally over."
              className="text-5xl md:text-6xl font-sans font-bold leading-tight text-brand-purple"
              delay={60}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60, scale: 0.8 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
              threshold={0.1}
              rootMargin="-50px"
            />
          </h1>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-4 md:col-span-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="flex-shrink-0 mt-1 text-gray-800"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
          </motion.svg>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Great brands don't happen by accident. We craft, shape, and bring brands to life with bold ideas and sharp strategy.
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 relative group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div 
          className="bg-black rounded-lg overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
            <motion.div
              className="text-white text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-lg mb-4">Video Placeholder</p>
              <motion.button
                className="bg-brand-green text-white px-6 py-3 rounded-full font-bold hover:bg-brand-green/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Play Showreel
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.h2 
            className="text-white font-serif text-8xl md:text-9xl font-bold group-hover:opacity-40 transition-opacity"
            animate={{ 
              textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 20px rgba(0,0,0,0.5)", "0px 0px 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            MAKE
          </motion.h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
