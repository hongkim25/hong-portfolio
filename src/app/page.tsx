'use client'; // <--- This line is required for animations to work

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-start items-start pt-32 px-4 md:px-4 text-left bg-[#6017B3] text-white overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-6 text-2xl md:text-5xl leading-[1.5] font-medium text-gray-100 z-10">
        <span>HONG KIM, SOFTWARE ENGINEER <br /><br />
        <p className="text-sm md:text-xl leading-[2] mb-3">
        I SHIP PRODUCTION SOFTWARE FOR REAL OPERATIONS. <br />
        THE BAKER PROJECT: Hybrid AI platform bridging CX and operations for a bakery.<br /><br /></p>
        <p className="text-sm md:text-xl leading-[1.3] mb-3">
          1) ABOUT: My background (business → data → engineering)<br />
          2) THE BAKER: My project (live platform managing bakery operations)<br />
          3) TLTP: My transition (188 days to software engineer)</p></span>
      </motion.div>

    </main>
  );
}