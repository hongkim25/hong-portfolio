"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--footer-bg)] text-[var(--footer-text)]
      py-4 px-4 sm:py-10 sm:px-8
      flex flex-col items-center text-center transition-colors duration-750 ease-in-out">
      
      <h2 className="font-display font-bold tracking-tighter uppercase
        leading-[0.9]
        text-[clamp(40px,8vw,80px)]
        mb-3 sm:mb-3">
        Let's<br />Build
      </h2>

      <div className="flex flex-col items-center">
        <p className="text-gray-100 text-sm sm:text-base">
          © 2026 Honggyun Kim
        </p>
      </div>
    </footer>
  );
}