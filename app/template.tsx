'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getTransition = () => {
    if (pathname === '/') {
      return {
        initial: { opacity: 0, scale: 1.05, filter: 'blur(5px)' },
        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
      };
    }
    
    return {
      initial: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
      animate: { opacity: 1, clipPath: 'circle(150% at 50% 50%)' },
      transition: { duration: 0.8, ease: 'easeInOut' }
    };
  };

  const { initial, animate, transition } = getTransition();

  return (
    <motion.div
      key={pathname}
      initial={initial}
      animate={animate}
      transition={transition}
      className="w-full min-h-screen"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}
