'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Brain, Globe, Users, Bot } from 'lucide-react';

const skillCategories = [
  {
    name: "Technical Skills",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      "Matlab - Advanced Motion Planning & Control",
      "Python - Robotics & Computer Vision",
      "C/C++ - Real-time Systems",
      "ROS & Linux - Robot Operating System"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Robotics & AI",
    icon: <Bot className="w-6 h-6" />,
    skills: [
      "Path Planning & Optimization",
      "Multi-Robot Systems",
      "Computer Vision & Sensor Fusion",
      "Machine Learning Applications"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Development Tools",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      "CoppeliaSim-VREP Simulation",
      "Git Version Control",
      "IMU Sensor Integration",
      "Algorithm Development"
    ],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    name: "Research Skills",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "Scientific Paper Writing",
      "Data Analysis & Visualization",
      "Experimental Design",
      "Literature Review"
    ],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "Languages",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      "English (Professional)",
      "French (Native)",
      "Arabic (Native)",
      "Technical Writing"
    ],
    gradient: "from-red-500 to-rose-500"
  },
  {
    name: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    skills: [
      "Teaching & Mentoring",
      "Project Leadership",
      "Cross-functional Collaboration",
      "Problem-solving"
    ],
    gradient: "from-indigo-500 to-violet-500"
  }
];

export function Skills() {
  return (
    <section className="py-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        Skills & Expertise
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
            <div className="relative bg-gray-900 rounded-lg p-6 h-full border border-gray-800/50">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gray-800/50 text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-200">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 4 + skillIndex) * 0.1 }}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`} />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 