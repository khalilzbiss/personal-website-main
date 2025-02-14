'use client';

import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Research Assistant",
    company: "University of Michigan-Dearborn, RoboticMotion Intelligence Lab",
    period: "Sep 2019 - Present",
    points: [
      "Published 4 journal papers, 1 conference paper, and 1 abstract conference paper (30+ citations)",
      "Designed a collision-free path-planning algorithms for multi-robot manipulators funded by Ford Motor Company for car-painting",
      "Developed optimal base positioning solutions for Industrial painting robots using multi-objective minimax solvers",
      "Modeled VRU motion prediction and developed a stability metricusing IMU sensor",
      "Developed a vehicle-to-bike collision detection algorithm using adaptive collision cones and Kalman filter-based sensor fusion",
      "Developed a Python framework for controlling and gathering data from OMRON LD mobile robots, enhancing real-time monitoring and control",
    ]
  },
  {
    title: "Graduate Student Instructor",
    company: "University of Michigan-Dearborn",
    period: "Oct 2019 - Present",
    points: [
      "Taught labs and assisted in Control Systems, Embedded Systems, Robot Manipulators, and Mobile Robots",
      "Created a Matlab-based lab manual for the Control Systems curriculum",
      "Improved student satisfaction ratings by 15%"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600"
      >
        Experience
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-white">{experience.title}</h3>
          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>{experience.company}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{experience.period}</span>
        </div>
      </div>
      <ul className="space-y-3">
        {experience.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}