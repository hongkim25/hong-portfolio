import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-[var(--nav-bg)] text-[var(--nav-text)] transition-colors duration-500 ease-in-out leading-none">
      {/* Logo */}
      <Link href="/" className="text-[5vw] md:text-[3.5vw] font-bold hover:text-black transition-colors leading-none">
        HONG KIM
      </Link>

      {/* Menu Links */}
      <div className="flex gap-[2vw] md:gap-[1.5vw] text-[5vw] md:text-[3.5vw] font-medium">
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