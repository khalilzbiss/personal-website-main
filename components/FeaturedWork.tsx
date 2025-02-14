'use client';

import { ExternalLink, Bot, Music2, Activity, Play, TrafficCone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

const projects = [
  {
    title: "Automatic Optimal Multi-Robot Task Allocation for car painting",
    description: "Designed a computationally efficient algorithm for generating collision-free trajectories in multi-robot collaborative systems.	Developed optimal base positioning algorithm for Industrial painting robots using multi-objective minimax solvers. This work was done in Collaboration with Ford Motor Company.",
    tags: ["Robots' Path Planning", "CoppeliaSim", "MATLAB"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
    demoLink: "https://www.youtube.com/watch?v=zqernfYz3_I",
    icon: <Bot className="w-4 h-4" />
  },
  {
    title: "Motion Sonification System",
    description: "Investigated sonification techniques for monitoring and controlling multi-robot systems operating in dynamic environments. Conducted experiments with OMRON LD series mobile robots.",
    tags: ["Python", "ARCL", "Robotics", "MATLAB"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    icon: <Music2 className="w-4 h-4" />,
    demoLink: "https://www.youtube.com/watch?v=Aqtf6ImaIWo&t=2s"
  },
  {
    title: "VRU Motion Modeling",
    description: "Developed a bicycle stability metric and vehicle-to-bike collision detection algorithm using adaptive collision cones and sensor fusion with Kalman Filter.",
    tags: ["MATLAB","IMU", "Sensor Fusion", "Kalman Filter"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500",
    icon: <Activity className="w-4 h-4" />
  },
  {
    title: "Automatic Traffic Sign Detection and Classification",
    description: "Led a team of 4 to develop a computer vision CNN-based traffic sign detection system on a single-board computer (Raspberry Pi) with a camera module, achieving 92% accuracy.",
    tags: ["Python", "Raspberry Pi", "Camera module", "TensorFlow", "Scikit-image", "OpenCV"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    icon: <TrafficCone className="w-4 h-4" />
  }
];

export function FeaturedWork() {
  return (
    <div className="space-y-12">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600"
      >
        Featured Work
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags, image, icon, demoLink, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 mb-4"
      style={{ minHeight: '450px' }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gray-800/50">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          {title === "Automatic Optimal Multi-Robot Task Allocation for car painting" && (
            <Badge text="29+ Citations" />
          )}
        </div>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        {(title === "Motion Sonification System" || title === "Automatic Optimal Multi-Robot Task Allocation for car painting") && demoLink && (
          <div className="absolute bottom-4 right-4">
            <a 
              href={demoLink}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}