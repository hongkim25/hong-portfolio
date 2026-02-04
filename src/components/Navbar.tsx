import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-[var(--nav-bg)] text-[var(--nav-text)] transition-colors duration-500 ease-in-out leading-none px-4 py-3
  md:px-4 md:py-4">
      {/* Logo */}
      <Link href="/" className="text-[4.5vw] md:text-[3vw] font-bold hover:text-black transition-colors leading-none">
        HONG KIM
      </Link>

      {/* Menu Links */}
      <div className="flex gap-[3vw] md:gap-[2vw] text-[4.5vw] md:text-[3vw] tracking-tight font-medium">
        <Link href="/about" className="hover:text-black transition-colors">
          ABOUT
        </Link>
        <Link href="/the-baker" className="hover:text-black transition-colors">
          THE BAKER
        </Link>
        <Link href="/tltp" className="hover:text-black transition-colors">
          TLTP
        </Link>
      </div>
    </nav>
  );
}