import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trendy Fashion for Every Season",
  description: "Welcome to Head$Toes, where fashion meets individuality. We offer the latest in trend-driven styles for those who want to stand out. From casual basics to bold statement pieces, our collections are designed to keep you looking fresh and feeling confident. Discover your next favorite outfit today!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
