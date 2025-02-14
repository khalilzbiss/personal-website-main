'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
  focus?: string;
  achievements?: string[];
  gpa?: string;
}

const educationHistory: EducationItem[] = [
  {
    degree: "Ph.D. in Electrical, Electronics, and Computer Engineering",
    school: "University of Michigan-Dearborn",
    location: "Dearborn, MI",
    period: "Sep 2019 – Apr 2025 (Expected)",
    focus: "Robotics, Motion Planning, and Sensor Fusion",
    achievements: [
      "Published 4 journal papers and 2 conference papers (30+ citations)"
    ]
  },
  {
    degree: "M.S.E in Computer Engineering",
    school: "University of Michigan-Dearborn",
    location: "Dearborn, MI",
    period: "Sep 2019 - Dec 2021",
    gpa: "3.8/4.0",
    achievements: [
      "Graduated with High Distinction"
    ]
  },
  {
    degree: "Bachelor in Computer System Engineering",
    school: "Mediterranean Institute of Technology",
    location: "Tunis, Tunisia",
    period: "Sep 2015 - May 2019"
  }
];

export function Education() {
  return (
    <section className="py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
      >
        Education
      </motion.h2>
      <div className="space-y-8">
        {educationHistory.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </section>
  );
}

function EducationCard({ education, index }: { education: EducationItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50"
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
            <div className="text-gray-300 mt-1">{education.school}, {education.location}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{education.period}</span>
        </div>

        {education.gpa && (
          <div className="flex items-center gap-2 text-gray-300">
            <Award className="w-4 h-4" />
            <span>GPA: {education.gpa}</span>
          </div>
        )}

        {education.focus && (
          <p className="text-gray-300">
            <span className="font-semibold">Focus:</span> {education.focus}
          </p>
        )}

        {education.achievements && education.achievements.length > 0 && (
          <ul className="space-y-2">
            {education.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
} 