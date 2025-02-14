'use client';

import { Github, Mail, Linkedin, ChevronDown, GraduationCap, LucideIcon, Phone, FileText } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SocialLink } from './SocialLink';
import { motion } from 'framer-motion';

const RobotIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="120" 
    height="120" 
    className="text-gray-300 opacity-80"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.2"
  >
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <circle cx="9.5" cy="11" r="1.25" fill="currentColor" />
    <circle cx="14.5" cy="11" r="1.25" fill="currentColor" />
    <path d="M11 14h2" strokeLinecap="round" />
    <path d="M12 4L12 7" />
    <path d="M12 17L12 20" />
    <path d="M4 12L7 12" />
    <path d="M17 12L20 12" />
    <rect x="10" y="2" width="4" height="2" rx="1" />
    <rect x="10" y="20" width="4" height="2" rx="1" />
    <rect x="2" y="10" width="2" height="4" rx="1" />
    <rect x="20" y="10" width="2" height="4" rx="1" />
  </svg>
);

const RoboticArmIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="120" 
    height="120" 
    className="text-gray-300 opacity-80"
    stroke="currentColor"
    fill="none"
    strokeWidth="1.2"
  >
    <path d="M12 4v2" strokeLinecap="round" />
    <rect x="10" y="6" width="4" height="4" rx="1" />
    <path d="M14 8h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
    <circle cx="20" cy="12" r="2" />
    <path d="M14 10v4" strokeLinecap="round" />
    <rect x="12" y="14" width="4" height="4" rx="1" />
    <path d="M12 18v2" strokeLinecap="round" />
    <path d="M6 8h4" strokeLinecap="round" />
    <circle cx="4" cy="8" r="2" />
    <path d="M6 16h4" strokeLinecap="round" />
    <circle cx="4" cy="16" r="2" />
  </svg>
);

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20">
      {/* Updated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className={`max-w-4xl w-full mx-auto px-4 flex flex-col items-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Text content with increased spacing */}
        <div className="text-center space-y-8 relative z-10">
          <div className="flex items-center justify-center gap-8">
            {/* Left Icon */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <RobotIcon />
            </motion.div>

            {/* Name and Title */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 tracking-tight">
                Khalil Zbiss
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light mt-4">
                PhD Candidate in Robotics & Motion Planning
              </p>
            </div>

            {/* Right Icon */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <RoboticArmIcon />
            </motion.div>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.href} {...link} />
            ))}
          </div>

          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-8 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-lg blur" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50">
              <h2 className="text-xl font-semibold text-gray-200 mb-3 flex items-center gap-2">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />
                <span>About Me</span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />
              </h2>
              <p className="text-gray-300 leading-relaxed text-left">
                I'm a Ph.D. candidate passionate about robotics, motion planning, and sensor fusion. My work focuses on designing and optimizing motion control systems for industrial robots, helping them move smarter, safer, and more efficiently. Over the years, I've collaborated with industry leaders like Ford Motor Company and published research in top journals, tackling challenges like collision-free trajectory generation, real-time motion prediction, and even motion sonification (yes, robots that "sing" their movements!).
              </p>
              <p className="text-gray-300 leading-relaxed text-left">
                When I'm not geeking out over robotics, I'm coding in Python, MATLAB, C/C++, or tinkering with ROS to bring new ideas to life. I've published 4 journal papers and 2 conference papers, and I'm always excited to push the boundaries of what robots can do. Let's build the future of automation together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
}

const socialLinks = [
  {
    href: "https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID",
    icon: GraduationCap,
    label: "Google Scholar",
    hoverColor: "hover:text-emerald-400"
  },
  {
    href: "https://www.linkedin.com/in/khalilzbiss/",
    icon: Linkedin,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400"
  },
  {
    href: "https://drive.google.com/file/d/1DCIqh9RVYOkqepqohtf4H1_h5l_jUG5i/view",
    icon: FileText,
    label: "Resume",
    hoverColor: "hover:text-purple-400",
    extraContent: (
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Resume</span>
      </div>
    )
  },
  {
    href: "mailto:kzbiss@umich.edu",
    icon: Mail,
    label: "Academic Email",
    hoverColor: "hover:text-yellow-400",
    extraContent: (
      <div className="flex items-center gap-2">
        <Image
          src="/michigan_logo.png"
          alt="University of Michigan"
          width={16}
          height={16}
          className="rounded-full ml-1"
        />
      </div>
    )
  },
  {
    href: "tel:313-465-6529",
    icon: Phone,
    label: "(313) 465-6529",
    hoverColor: "hover:text-green-400",
    extraContent: (
      <div className="hidden group-hover:flex items-center gap-2">
        <span className="text-sm text-gray-400">(313) 465-6529</span>
      </div>
    )
  }
];

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  hoverColor: string;
  extraContent?: React.ReactNode;
}