"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Logo and Brand */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-teal-600 tracking-tight">MeetUp</span>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="text-gray-700 dark:text-gray-200 font-medium hover:text-teal-500 dark:hover:text-teal-400 transition">
            {link.name}
          </Link>
        ))}
      </div>

      {/* User Actions */}
      <div className="hidden md:flex gap-4 items-center">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold transition">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 rounded-lg border border-teal-500 text-teal-600 font-semibold hover:bg-teal-50 transition">Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded hover:bg-teal-50 dark:hover:bg-gray-800"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col gap-2 p-4 md:hidden animate-fade-in z-50">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-700 dark:text-gray-200 font-medium hover:text-teal-500 dark:hover:text-teal-400 transition" onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 dark:border-gray-800 my-2" />
          <SignedOut>
            <SignInButton>
              <button className="w-full px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold transition mb-2">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="w-full px-4 py-2 rounded-lg border border-teal-500 text-teal-600 font-semibold hover:bg-teal-50 transition">Sign Up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
