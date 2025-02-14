'use client';

import { useState } from 'react';
import { Code2, Briefcase } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { FeaturedWork } from '@/components/FeaturedWork';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Publications } from '@/components/Publications';
import { Skills } from '@/components/Skills';

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: 'Skills',
      content: 'Proficient in Matlab (6+ years), Python (5+ years), C/C++ (3+ years), ROS, Linux, and CoppeliaSim-VREP. Experienced in computer vision, path planning, optimization, and robotics.',
      icon: <Code2 className="w-6 h-6" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      title: 'Achievements',
      content: 'Published 4 journal papers and 2 conference papers (30+ citations). Distinguished Graduate Student Instructor Award (2023). EXP+ Student Conference Presentation Grant 2023-24.',
      icon: <Briefcase className="w-6 h-6" />,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-1">
        <Skills />
        <Experience />
        <Education />
        <FeaturedWork />
        <Publications />
      </div>
    </main>
  );
}