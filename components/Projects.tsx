'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Find Any Song by Its Lyrics',
    description: 'A lightweight Node.js web app that helps users identify songs by typing any part of the lyrics. It combines Genius lyrics search with YouTube video results.',
    image: '/projects/find-song.png?v=2',
    tags: ['Node.js', 'Express', 'Genius API', 'YouTube API'],
    github: 'https://github.com/Jordan-Tamrat/Find_Any_Song_by_Its_Lyrics',
    live: 'https://find-any-song-by-its-lyrics.vercel.app',
  },
  {
    title: 'Shoe Shop Website',
    description: 'A responsive shoe shopping site built with HTML, Tailwind CSS, and JavaScript. Complete with browsing, cart, and checkout features.',
    image: '/projects/shoe-shop.png?v=2',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Jordan-Tamrat/shoe-shop-website',
    live: 'https://habesh-shoe-shop.vercel.app', 
  },
  {
    title: 'Database for Supermarket',
    description: 'Designed and implemented a database system for a supermarket, managing inventory, sales, and customer analysis.',
    image: 'https://opengraph.githubassets.com/1/Jordan-Tamrat/Database-Design',
    tags: ['SQL', 'Database Design', 'ER Diagram'],
    github: 'https://github.com/Jordan-Tamrat/Database-Design',
    live: null,
  },
  {
    title: 'Inventory Management System',
    description: 'A system for managing supermarket inventory, tracking sales, and analyzing customer behavior.',
    image: 'https://opengraph.githubassets.com/1/Jordan-Tamrat/Supermarket-management-system',
    tags: ['PHP', 'MySQL', 'Management System'],
    github: 'https://github.com/Jordan-Tamrat/Supermarket-management-system',
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Recent work and experiments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
