'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2"
          >
            Hello, I&apos;m
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Yordanos Tamrat
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium"
          >
            Web Developer & Blockchain Enthusiast
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I build scalable full-stack applications with a focus on modern architecture. Bridging the gap between robust backend architecture and intuitive user interfaces.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a 
              href="projects"
              className="group relative px-8 py-3 bg-blue-600 text-white rounded-full font-medium overflow-hidden flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="absolute inset-0 bg-blue-800 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative">View Projects</span>
              <ArrowRight size={20} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1gqjjxpwpQycmv9SxmzbgWhgI4RCx6mAq/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:shadow-md transition-all flex items-center justify-center gap-2 bg-white/50 dark:bg-transparent"
            >
              Resume
              <Download size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-64 h-64 md:w-96 md:h-96"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse dark:opacity-30"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            <Image
              src="/profile_picture.JPG"
              alt="Yordanos Tamrat"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
