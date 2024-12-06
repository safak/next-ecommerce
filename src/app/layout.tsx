import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import Footerpage from "@/components/Footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sleekquest",
  description: "A customizable clothing brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavbarPage/>
            {children}
          <Footerpage/>
      </body>
    </html>
  );
}
