import { Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { WixClientContextProvider } from "../context/wixContext";

const cinzel = Cinzel({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "Eleganza E-Commerce ",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <WixClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}
