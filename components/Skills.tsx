'use client';

import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, 
  SiDjango, SiPython, SiPostgresql, SiDocker, SiGit 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
  { name: 'HTML', category: 'Frontend', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', category: 'Frontend', icon: SiCss3, color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', category: 'Frontend', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', category: 'Frontend', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', category: 'Backend', icon: SiExpress, color: '#000000' },
  { name: 'Django', category: 'Backend', icon: SiDjango, color: '#092E20' },
  { name: 'Python', category: 'Backend', icon: SiPython, color: '#3776AB' },
  { name: 'Java', category: 'Backend', icon: FaJava, color: '#007396' },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#336791' },
  { name: 'Docker', category: 'DevOps', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', category: 'Tools', icon: SiGit, color: '#F05032' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: `0 0 20px ${skill.color}40`,
                borderColor: skill.color
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-3 relative overflow-hidden transition-colors duration-300"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />
              <skill.icon 
                size={48} 
                className="transition-transform duration-300 group-hover:scale-110" 
                style={{ color: skill.color }} 
              />
              <div className="z-10">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
