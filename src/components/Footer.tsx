'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPageTheme, getThemeClasses } from '@/lib/themeUtils';

export default function Footer() {
  const pathname = usePathname();
  const theme = getPageTheme(pathname || '/'); // Default to '/' if null
  const colors = getThemeClasses(theme);

  return (
    <footer className={`w-full py-20 px-8 flex flex-col items-center text-center transition-colors duration-500 ${colors.bg} ${colors.text} border-t ${colors.border}`}>
      
      <h2 className="font-display text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase mb-12 opacity-90">
        Let's<br />Build
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl pt-12 border-t ${colors.border}`}>
        
        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <span className={`text-sm font-bold uppercase tracking-widest ${colors.subtext}`}>Navigation</span>
          <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="/the-baker" className="hover:opacity-50 transition-opacity">The Baker</Link>
          <Link href="/tltp" className="hover:opacity-50 transition-opacity">TLTP</Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <span className={`text-sm font-bold uppercase tracking-widest ${colors.subtext}`}>Socials</span>
          <a href="https://linkedin.com/in/hongkim" target="_blank" className="hover:opacity-50 transition-opacity">LinkedIn</a>
          <a href="https://github.com/hongkim" target="_blank" className="hover:opacity-50 transition-opacity">GitHub</a>
        </div>

        {/* Contact */}
         <div className="flex flex-col gap-4">
          <span className={`text-sm font-bold uppercase tracking-widest ${colors.subtext}`}>Contact</span>
          <a href="mailto:hong@example.com" className="hover:opacity-50 transition-opacity">hong@example.com</a>
        </div>
      </div>
    </footer>
  );
}