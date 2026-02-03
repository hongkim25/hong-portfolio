'use client';
import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <div className="overflow-hidden w-full bg-white text-black py-4">
      <motion.div
        className="whitespace-nowrap text-8xl font-black uppercase tracking-tighter"
        animate={{ x: [0, -1000] }} // Move from 0 to -1000px
        transition={{
          repeat: Infinity,         // Do it forever
          ease: "linear",           // Constant speed (no slowing down)
          duration: 10,             // Speed (lower = faster)
        }}
      >
        System Builder • Backend Logic • Frontend Aesthetics • System Builder • Backend Logic •
      </motion.div>
    </div>
  );
}