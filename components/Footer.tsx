'use client';

import { Github, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a
            href="https://github.com/Jordan-Tamrat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yordanos-tamrat-6a599b280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/jordan_tamrat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://t.me/Jordan_Tamrat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Send size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Yordanos Tamrat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
