// components/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-emerald-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">ScholarLink</h2>
          <p className="text-gray-100">
            Connecting students with scholarships for a brighter future. Build your career and achieve your dreams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link href="/" className="hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link href="/scholarships" className="hover:text-gray-200">Scholarships</Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-gray-200">Reviews</Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-gray-200">Dashboard</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-100">Email: info@scholarlink.com</p>
          <p className="text-gray-100">Phone: +880 1234 567890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-emerald-400 mt-6 py-4 text-center text-gray-100">
        &copy; {new Date().getFullYear()} ScholarLink. All rights reserved.
      </div>
    </footer>
  );
}
