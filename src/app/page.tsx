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
        transition={{ duration: 1, ease: "easeOut" }}
        className="p-4 md:p-8 border border-white"
        whileHover={{ scale: 1.6, rotate: 1 }}
        whileTap={{ scale: 1.4, rotate: -1 }}
      >
        <h1 className="text-[6vw] md:text-[4vw] font-bold leading-[0.85] tracking-tighter uppercase">
          Hong Kim
        </h1>
        <h1 className="text-[2.8vw] md:text-[1.85vw] font-bold leading-[0.85] tracking-tighter uppercase">
          Software Engineer
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} //
        className="mt-12 flex gap-6 text-lg md:text-lg leading-[1.2] font-medium text-gray-100 z-10"
      >
        <span>I SHIP PRODUCTION SOFTWARE FOR REAL OPERATIONS. <br /><br />
        FEATURED PROJECT: THE BAKER — Loyalty, reservations, and demand forecasting for a bakery.<br /><br />
        <p className="text-lg md:text-lg leading-[1.2] mb-1tracking-tighter">
          If you have 60 seconds:<br />
          1) THE BAKER: See my project (a live project for a real bakery)<br />
          2) ABOUT: Check my background (business → data → engineering)<br />
          3) TLTP: The execution log to transition into a SWE</p></span>
      </motion.div>

    </main>
  );
}