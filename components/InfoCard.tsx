'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  gradient: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  index: number;
}

export function InfoCard({
  title,
  content,
  icon,
  gradient,
  isActive,
  onMouseEnter,
  onMouseLeave,
  index,
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative group cursor-pointer perspective-1000",
        "transform transition-all duration-500 ease-out",
        isActive ? "scale-105" : ""
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={cn(
        "absolute inset-0 rounded-xl bg-gradient-to-r",
        gradient,
        "opacity-75 blur-xl group-hover:opacity-100 transition-opacity"
      )} />
      <div className="relative bg-gray-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 h-full
                     transform transition-transform duration-500 group-hover:rotate-y-10 shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-gray-800/50">
            {icon}
          </div>
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {title}
          </h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}