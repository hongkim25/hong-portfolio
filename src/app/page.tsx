'use client'; // <--- This line is required for animations to work

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center text-center bg-[#6017B3] text-white overflow-hidden relative">
      
      {/* The Text Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
        animate={{ opacity: 1, y: 0 }}  // Animate to visible and original position
        transition={{ duration: 1.2, ease: "easeOut" }} // Take 1 second
        className="p-8 rounded-xl border border-white"
        whileHover={{ scale: 1.5, rotate: 1 }} // Grows slightly and tilts
        whileTap={{ scale: 0.95 }}              // Shrinks when clicked (like a real button)
      >
        <h1 className="text-[6vw] font-bold leading-[0.85] tracking-tighter uppercase">
          WELCOME
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }} // Wait 0.8s, then fade in
        className="mt-12 flex gap-6 text-lg md:text-base font-medium text-gray-400 tracking-[0.2em] uppercase z-10"
      >
        <span>Java Spring</span>
        <span>•</span>
        <span>Next.js</span>
        <span>•</span>
        <span>Strategy</span>
      </motion.div>

      <FadeIn>
      <div className="space-y-1 mt-20">
        <h1 className="font-gambetta text-3xl font-semibold">Hi! My name is Hong!</h1>
        <p className="font-gambetta text-xl">Welcome to my site!</p>
      </div>
      </FadeIn>
    </main>
  );
}