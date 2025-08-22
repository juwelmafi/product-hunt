"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(session);

  return (
    <nav className="bg-emerald-500 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              ProductHunt
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-200">
              Products
            </Link>
            <Link href="/add-product" className="hover:text-gray-200">
              Add Product
            </Link>
            {status === "authenticated" ? (
              <button onClick={() => signOut()}>Log out</button>
            ) : (
              <>
                <Link href="/login" className="hover:text-gray-200">
                  Login
                </Link>
                <Link href="/register" className="hover:text-gray-200">
                  Register
                </Link>
              </>
            )}
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
          <Link
            href="/"
            className="block hover:text-gray-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:text-gray-200"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/add-product"
            className="block hover:text-gray-200"
            onClick={toggleMenu}
          >
            Add Product
          </Link>

          {status === "authenticated" ? (
            <button onClick={() => signOut()}>Log out</button>
          ) : (
            <>
              <Link
                onClick={toggleMenu}
                href="/login"
                className="hover:text-gray-200"
              >
                Login
              </Link>
              <Link
                onClick={toggleMenu}
                href="/register"
                className="hover:text-gray-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
