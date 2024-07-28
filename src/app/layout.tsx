import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galaxy Software Hub",
  description: "This is portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'} >
       <StarsCanvas />
       <Navbar />
        {children}
        <Contact />
        <About />
        <Footer />
        </body>
    </html>
  );
}
