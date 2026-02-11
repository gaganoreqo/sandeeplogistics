"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/department", label: "Department" },
  { href: "/location", label: "Locations" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-[10px] bg-white/80 border-b border-white/8 relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative max-w-[976px] mx-auto h-16 flex items-center px-5 md:px-0">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/sandeeplogistics.png"
              alt="Sandeep Logistics"
              width={40}
              height={40}
              className="size-10 object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-center gap-0 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['Roboto',sans-serif] font-semibold text-[13px] px-3.5 py-1.5 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-[#e82930]"
                    : "text-[#717182] hover:text-[#e82930]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/sandeeplogistics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 flex items-center justify-center"
            >
              <svg
                className="size-7 text-[#1877F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/sandeeplogistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 flex items-center justify-center"
            >
              <svg
                className="size-7 text-[#0A66C2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-2 text-[#717182]"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-[10px] bg-white/95 px-5 py-4 flex flex-col gap-1 border-b border-black/5 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-['Roboto',sans-serif] font-semibold text-[13px] py-2.5 px-3.5 rounded-lg transition-colors ${
                pathname === link.href
                  ? "text-[#e82930] bg-red-50"
                  : "text-[#717182] hover:text-[#e82930] hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Social Icons (Mobile) */}
          <div className="flex items-center gap-3 pt-2 px-3 border-t border-gray-200 mt-1">
            <a
              href="https://www.facebook.com/sandeeplogistics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="size-6 text-[#1877F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/sandeeplogistics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="size-6 text-[#0A66C2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
