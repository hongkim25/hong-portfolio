"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--footer-bg)] text-[var(--footer-text)] py-10 px-8 flex flex-col items-center text-center transition-colors duration-1000 ease-in-out">
      
      {/* 1. The Call to Action (Massive Text) */}
      <h2 className="font-display text-[6vw] leading-[0.8] font-bold tracking-tighter uppercase mb-12">
        Let's<br />Build
      </h2>

      {/* 2. The Links (Grid) */}
      <div className="flex flex-col items-center">
          <p className="text-black text-[1.5vw]">© 2026 Honggyun Kim</p>
      </div>
    </footer>
  );
}