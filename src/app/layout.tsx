import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
  });
  

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>{children}</body>
    </html>
  );
}
