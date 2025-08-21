"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-emerald-500 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">ProductHunt</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/dashboard" className="hover:text-gray-200">Dashboard</Link>
            <Link href="/login" className="hover:text-gray-200">Login</Link>
            <Link href="/register" className="hover:text-gray-200">Register</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-500 px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block hover:text-gray-200" onClick={toggleMenu}>Home</Link>
          <Link href="/scholarships" className="block hover:text-gray-200" onClick={toggleMenu}>Scholarships</Link>
          <Link href="/reviews" className="block hover:text-gray-200" onClick={toggleMenu}>Reviews</Link>
          <Link href="/dashboard" className="block hover:text-gray-200" onClick={toggleMenu}>Dashboard</Link>
          <Link href="/contact" className="block hover:text-gray-200" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
