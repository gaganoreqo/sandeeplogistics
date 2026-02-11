import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sandeep Logistics - Reliable Transport & Logistics Solutions",
  description:
    "Sandeep Logistics offers trusted and efficient transport and logistics services for all your shipping needs.",
  icons: {
    icon: "/images/sandeeplogistics.png",
    apple: "/images/sandeeplogistics.png",
  },
  openGraph: {
    title: "Sandeep Logistics - Reliable Transport & Logistics Solutions",
    description:
      "Sandeep Logistics offers trusted and efficient transport and logistics services for all your shipping needs.",
    images: ["/images/sandeeplogistics.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
