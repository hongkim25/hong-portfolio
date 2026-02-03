'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}      // Start invisible and 40px down
      whileInView={{ opacity: 1, y: 0 }}   // When seen: become visible and float up
      viewport={{ once: true, margin: "-100px" }} // "once: true" means it won't vanish when you scroll up
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}


