import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Chatbot from '@/components/ui/Chatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Galaxy Software Hub - Digital Solutions & AI Automation',
  description: 'Transform your business with our cutting-edge web development, graphic design, SEO services, and AI automation solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark-bg min-h-screen`}>
        <div className="floating-balls">
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}