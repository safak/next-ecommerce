import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContents";



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
        <WixClientContextProvider>
            <Navbar />
            {children}
            <Footer />
          </WixClientContextProvider>
      </body>
    </html>
  );
}
