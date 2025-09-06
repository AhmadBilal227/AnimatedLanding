import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    title: string;
  };
  index: number;
}

export default function AnimatedTestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.3 }
      }}
    >
      <SpotlightCard 
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
        spotlightColor="rgba(255, 255, 255, 0.3)"
      >
        <motion.p 
          className="text-xl md:text-2xl font-serif leading-relaxed text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
        >
          "{testimonial.quote}"
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
          className="mb-4"
        >
          <div className="h-px bg-white/30 w-full" />
        </motion.div>
        <motion.p 
          className="font-sans font-bold text-lg text-white"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.7 }}
        >
          {testimonial.name}
        </motion.p>
        <motion.p 
          className="text-white/70"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.8 }}
        >
          {testimonial.title}
        </motion.p>
      </SpotlightCard>
    </motion.div>
  );
}
