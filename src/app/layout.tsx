import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Chatbot from '@/components/ui/Chatbot';
import SEOOptimizer from '@/components/SEOOptimizer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Galaxy Software Hub - Digital Solutions & AI Automation',
    template: '%s | Galaxy Software Hub'
  },
  description: 'Transform your business with our cutting-edge web development, graphic design, SEO services, and AI automation solutions. Expert team delivering innovative digital solutions.',
  keywords: [
    'web development',
    'graphic design',
    'SEO services',
    'AI automation',
    'digital solutions',
    'software development',
    'website design',
    'digital marketing',
    'automation services',
    'technology solutions'
  ],
  authors: [{ name: 'Galaxy Software Hub Team' }],
  creator: 'Galaxy Software Hub',
  publisher: 'Galaxy Software Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://galaxysoftwarehub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://galaxysoftwarehub.com',
    siteName: 'Galaxy Software Hub',
  title: 'Galaxy Software Hub - Digital Solutions & AI Automation',
  description: 'Transform your business with our cutting-edge web development, graphic design, SEO services, and AI automation solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Galaxy Software Hub - Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galaxy Software Hub - Digital Solutions & AI Automation',
    description: 'Transform your business with our cutting-edge digital solutions.',
    images: ['/images/og-image.jpg'],
    creator: '@galaxysoftwarehub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Galaxy Software Hub",
              "url": "https://galaxysoftwarehub.com",
              "logo": "https://galaxysoftwarehub.com/images/logo.png",
              "description": "Transform your business with our cutting-edge web development, graphic design, SEO services, and AI automation solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 Street, Ashiana E Quaid",
                "addressLocality": "Lahore",
                "postalCode": "54768",
                "addressCountry": "PK"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+923100043155",
                "contactType": "customer service",
                "email": "galaxysoftwarehub@gmail.com"
              },
              "sameAs": [
                "https://facebook.com/galaxysoftwarehub",
                "https://linkedin.com/company/galaxysoftwarehub"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 31.5204,
                  "longitude": 74.3587
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
        
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Galaxy Software Hub",
              "url": "https://galaxysoftwarehub.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://galaxysoftwarehub.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} dark-bg overflow-x-hidden`}>
        <div className="floating-balls">
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
          <div className="floating-ball"></div>
        </div>
        <Header />
        <main className="relative z-10 overflow-x-hidden">{children}</main>
        <Footer />
        <Chatbot />
        <SEOOptimizer pageType="home" />
      </body>
    </html>
  );
}