import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | number[];
  splitType?: 'chars' | 'words';
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
  };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: true 
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const splitText = (text: string, type: 'chars' | 'words') => {
    if (type === 'words') {
      return text.split(' ');
    }
    return text.split('');
  };

  const elements = splitText(text, splitType);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease: ease === 'power3.out' ? [0.25, 0.46, 0.45, 0.94] as any : 'easeOut',
      },
    },
  };

  const handleAnimationComplete = () => {
    if (onLetterAnimationComplete) {
      onLetterAnimationComplete();
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`${className} inline-block`}
      style={{ textAlign }}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      onAnimationComplete={handleAnimationComplete}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{
            whiteSpace: splitType === 'words' ? 'nowrap' : 'normal',
            marginRight: splitType === 'words' && element !== elements[elements.length - 1] ? '0.25em' : '0',
          }}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
