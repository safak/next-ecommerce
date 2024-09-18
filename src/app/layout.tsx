'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  
  const showHeaderAndFooter = pathname !== "/login" && pathname !== "/register";

  return (
    <html lang="en">
      <body className={inter.className}>
        {showHeaderAndFooter && <Navbar />}
        {children}
        {showHeaderAndFooter  && <Footer />}
      </body>
    </html>
  );
}
