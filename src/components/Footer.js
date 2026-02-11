import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Department", href: "/department" },
  { label: "Locations", href: "/location" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[rgba(149,149,149,0.15)] w-full px-5 md:px-10 py-5">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-3">
        {/* Top row: Logo + Nav Links */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Footer.png"
              alt="Sandeep Logistics"
              width={140}
              height={34}
              className="h-[34px] w-[140px] object-contain"
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-['Manrope',sans-serif] text-sm text-[#959595] hover:text-[#666] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom: Copyright */}
        <div className="flex items-center justify-center">
          <p className="font-['Poppins',sans-serif] text-sm text-[#959595]">
            Copyright © 2026 Sandeep Logistics – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
