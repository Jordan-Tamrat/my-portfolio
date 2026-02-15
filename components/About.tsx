'use client';

import { motion } from 'framer-motion';
import { Sparkles, Terminal, Database, Blocks } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Terminal className="w-6 h-6 text-blue-500" />,
      title: "Full-Stack Mastery",
      desc: "Architecting end-to-end apps with React, Next.js, Node.js & Django."
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: "Data Integrity",
      desc: "Ensuring scalability with robust PostgreSQL relational databases."
    },
    {
      icon: <Blocks className="w-6 h-6 text-purple-500" />,
      title: "Web3 Enthusiast",
      desc: "Exploring the intersection of modern web architecture and blockchain."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4"
          >
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <p>
              I&apos;m <span className="font-bold text-gray-900 dark:text-white">Yordanos Tamrat</span>, known as <span className="font-bold text-blue-600">Jordan</span> across social media.
            </p>
            <p>
              I am a <span className="font-semibold text-gray-900 dark:text-white">Full-Stack Developer</span> dedicated to building efficient, user-centric digital solutions. 
              My approach combines modern backend reliability with high-performance frontend frameworks. 
              I specialize in architecting intuitive interfaces using <span className="text-blue-600 font-medium">React</span> and <span className="text-blue-600 font-medium">Next.js</span>, 
              while leveraging <span className="text-green-600 font-medium">Node.js</span>, <span className="text-green-600 font-medium">Express</span>, and <span className="text-green-600 font-medium">Django</span> for robust server-side logic.
            </p>
            <p>
              Beyond core development, I thrive in dynamic teams where I can grow and deliver impactful solutions.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, translateX: 5 }}
                className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
