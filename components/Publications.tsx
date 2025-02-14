'use client';

import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  location: string;
  date: string;
  volume?: string;
  pages?: string;
  link?: string;
  description?: string;
}

const publications: Publication[] = [
  {
    title: "Automatic collision-free trajectory generation for collaborative robotic car-painting",
    authors: "K. Zbiss, A. Kacem, M. Santillo, A. Mohammadi",
    location: "IEEE Access",
    date: "2022",
    description: "Novel approach for generating collision-free trajectories in multi-robot collaborative systems for automotive painting applications.",
    link: "https://ieeexplore.ieee.org/abstract/document/9686367"
  },
  {
    title: "A Numerical Integrator for Forward Dynamics Simulations of Folding Process for Protein Molecules Modeled as Hyper-Redundant Robots",
    authors: "A. Kacem, K. Zbiss, A. Mohammadi",
    location: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    date: "2023",
    description: "Novel numerical integration approach for simulating protein folding dynamics using robotic modeling.",
    link: "https://hal.science/hal-04216078/"
  },
  {
    title: "A Numerical Integrator for Kinetostatic Folding of Protein Molecules Modeled as Robots with Hyper Degrees of Freedom",
    authors: "A. Kacem, K. Zbiss, A. Mohammadi",
    location: "Robotics",
    date: "2024",
    description: "Advanced numerical method for modeling protein folding using hyper-redundant robotic systems.",
    link: "https://www.mdpi.com/2218-6581/13/10/150"
  },
  {
    title: "Automatic Optimal Robotic Base Placement for Collaborative Industrial Robotic Car Painting",
    authors: "K. Zbiss, A. Kacem, M. Santillo, A. Mohammadi",
    location: "Applied Sciences",
    date: "2024",
    description: "Optimization framework for robotic base placement in industrial painting applications.",
    link: "https://www.mdpi.com/2076-3417/14/19/8614"
  },
  {
    title: "Transforming Motion Into Sound: A Novel Sonification Approach for Teams of Mobile Robots",
    authors: "A. Kacem, K. Zbiss, A. Mohammadi",
    location: "International Symposium on Flexible Automation",
    date: "2024",
    description: "Novel approach for monitoring multi-robot systems through sound transformation.",
    link: "https://asmedigitalcollection.asme.org/ISFA/proceedings-abstract/ISFA2024/87882/1204985"
  },
  {
    title: "Wave space sonification of the folding pathways of protein molecules modeled as hyper-redundant robotic mechanisms",
    authors: "A. Kacem, K. Zbiss, P. Watta, A. Mohammadi",
    location: "Multimedia Tools and Applications",
    date: "2024",
    description: "Innovative sonification technique for visualizing protein folding pathways using robotic modeling.",
    link: "https://link.springer.com/article/10.1007/s11042-023-15385-y"
  }
];

export function Publications() {
  return (
    <section className="py-16">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
      >
        Publications
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <PublicationCard key={index} publication={pub} index={index} />
        ))}
      </div>
    </section>
  );
}

function PublicationCard({ publication, index }: { publication: Publication; index: number }) {
  const formattedLocation = publication.volume && publication.pages
    ? `${publication.location}, ${publication.volume}, ${publication.pages}`
    : publication.location;

  const isLongTitle = publication.title.length > 80;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800/50 hover:border-purple-500/50 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative flex flex-col h-full min-h-[240px]">
        <div className="space-y-3 flex-grow">
          <div className="flex items-start gap-2">
            <BookOpen className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className={`font-semibold text-white ${isLongTitle ? 'text-base' : 'text-lg'} leading-tight`}>
                {publication.link ? (
                  <a 
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {publication.title}
                  </a>
                ) : (
                  publication.title
                )}
              </h3>
              {publication.description && (
                <p className="text-gray-400 text-sm mt-1.5">{publication.description}</p>
              )}
            </div>
          </div>
          <p className="text-gray-300 text-sm">{publication.authors}</p>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{formattedLocation}</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-1 text-sm text-gray-400 mt-2">
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-violet-400 hover:text-purple-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>View Paper</span>
            </a>
          )}
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{publication.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}