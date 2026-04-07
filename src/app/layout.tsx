import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book2Play | Book Sports Grounds & Turfs Near You",
  description: "Find and book cricket nets, football turfs, badminton courts and more. Professional sports booking platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark antialiased`}>
      <body className="bg-primary min-h-screen text-slate-100 pb-20 md:pb-0">
        <Navbar />
        <main className="max-w-7xl mx-auto w-full">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
