import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

interface MetricCardProps {
  metric: {
    value: string;
    description: string;
    client: string;
    color: string;
  };
  index: number;
}

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function AnimatedMetricCard({ metric, index }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -8;
    const rotationY = (offsetX / (rect.width / 2)) * 8;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(1.05);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'border-l-brand-green':
        return 'bg-gradient-to-br from-green-50 to-emerald-100 border-l-4 border-l-green-500';
      case 'border-l-brand-purple':
        return 'bg-gradient-to-br from-purple-50 to-violet-100 border-l-4 border-l-purple-500';
      case 'border-l-brand-yellow':
        return 'bg-gradient-to-br from-yellow-50 to-amber-100 border-l-4 border-l-yellow-500';
      case 'border-l-brand-pink':
        return 'bg-gradient-to-br from-pink-50 to-rose-100 border-l-4 border-l-pink-500';
      default:
        return 'bg-gradient-to-br from-gray-50 to-slate-100 border-l-4 border-l-gray-500';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    >
      <div className={`rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 ${getColorClasses(metric.color)}`}>
        <motion.p 
          className="text-4xl md:text-5xl font-sans font-bold text-gray-900"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
        >
          {metric.value}
        </motion.p>
        <motion.p 
          className="mt-2 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {metric.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.7 }}
        >
          <Badge variant="secondary" className="mt-4 font-sans font-bold text-xs uppercase tracking-wider">
            {metric.client}
          </Badge>
        </motion.div>
      </div>
    </motion.div>
  );
}
