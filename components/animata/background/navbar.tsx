import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 z-50">
      <div className="bg-transparent backdrop-blur-sm rounded-lg shadow-lg mx-auto flex items-center justify-between px-6 py-4 max-w-6xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/favicon.png" // Replace with the actual logo path
            alt="Luminary Lines Cohort Logo"
            width={30} // Reduced size for the logo
            height={30}
            className="mr-2"
          />
        </Link>

        {/* Navbar Items */}
        <ul className="hidden md:flex items-center space-x-7 text-white font-medium">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
          </li>
          <li>
            <Link href="/structure" className="hover:text-gray-300 transition">Structure</Link>
          </li>
          <li>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              Youtube Channel
            </Link>
          </li>
          <li>
            <Link href="/hire" className="hover:text-gray-300 transition">Hire from Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
          </li>
          <div className="hidden md:block ml-12"> {/* Added margin-left for more space */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <button className="relative rounded-lg bg-black px-7 py-4 text-white">
              Join The Waitlist
            </button>
          </div>
        </div>
        </ul>

        {/* CTA Button with increased gap */}


        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white text-xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
