import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import DecayCard from './DecayCard';

interface CaseStudyCardProps {
  project: {
    title: string;
    client?: string;
    award?: string;
    heroImage?: string;
    imageUrl?: string;
    caseStudy?: any;
    type: string;
    id: number;
  };
  color: string;
  index: number;
}

export default function AnimatedCaseStudyCard({ project, color, index }: CaseStudyCardProps) {
  const projectUrl = project.caseStudy ? `/portfolio/${project.type}-${project.id}` : '#';
  const imageUrl = project.heroImage || project.imageUrl;

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'border-brand-green':
        return 'border-green-500';
      case 'border-brand-purple':
        return 'border-purple-500';
      case 'border-brand-yellow':
        return 'border-yellow-500';
      case 'border-brand-pink':
        return 'border-pink-500';
      default:
        return 'border-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className="group"
    >
      <motion.a 
        href={projectUrl} 
        className="block rounded-2xl overflow-hidden"
        whileTap={{ scale: 0.98 }}
      >
        <DecayCard 
          width={600} 
          height={400} 
          image={imageUrl}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
            <motion.h3 
              className="font-sans font-bold text-2xl md:text-3xl text-white mb-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="text-gray-200 text-base md:text-lg"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              {project.client || 'Personal Project'}
            </motion.p>
            {project.award && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 200 }}
                className="mt-2"
              >
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 transition-colors">
                  {project.award}
                </Badge>
              </motion.div>
            )}
          </div>
        </DecayCard>
      </motion.a>
    </motion.div>
  );
}
