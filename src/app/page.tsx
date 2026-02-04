'use client'; // <--- This line is required for animations to work

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center text-center bg-[#6017B3] text-white overflow-hidden relative">
      
      {/* The Text Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="p-4 md:p-8 border border-white"
        whileHover={{ scale: 1.2, rotate: 1 }}
        whileTap={{ scale: 1.1, rotate: -1 }}
      >
        <h1 className="text-[12vw] md:text-[6vw] font-bold leading-[0.85] tracking-tighter uppercase">
          WELCOME
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} //
        className="mt-12 flex gap-6 text-lg md:text-lg font-medium text-gray-100 tracking-[0.1em] uppercase z-10"
      >
        <span>Hong Kim</span>
        <span>•</span>
        <span>Software Engineer</span>
      </motion.div>

    </main>
  );
}