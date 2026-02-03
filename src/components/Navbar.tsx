import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-3 flex justify-between items-center bg-[#FF5733]">
      {/* Logo */}
      <Link href="/" className="text-6xl font-bold text-white-900 hover:text-black">
        HONG KIM
      </Link>

      {/* Menu Links */}
      <div className="flex gap-8 text-6xl font-medium text-white">
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