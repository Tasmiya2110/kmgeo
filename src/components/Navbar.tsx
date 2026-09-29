import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            KmGeo
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}