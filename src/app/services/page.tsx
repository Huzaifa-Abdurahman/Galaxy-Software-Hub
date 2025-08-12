import { Metadata } from 'next';
import Services from '@/components/ui/Services';

export const metadata: Metadata = {
  title: 'Our Services - Web Development, Graphic Design, SEO & AI Automation',
  description: 'Comprehensive digital solutions including web development, graphic design, SEO services, and AI automation. Transform your business with our expert team.',
  keywords: [
    'web development services',
    'graphic design services',
    'SEO services',
    'AI automation',
    'digital solutions',
    'website design',
    'software development',
    'digital marketing',
  ],
  openGraph: {
    title: 'Our Services - Web Development, Graphic Design, SEO & AI Automation',
    description: 'Comprehensive digital solutions including web development, graphic design, SEO services, and AI automation.',
    type: 'website',
    url: 'https://galaxysoftwarehub.com/services',
  },
  alternates: {
    canonical: 'https://galaxysoftwarehub.com/services',
  },
};

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Galaxy Software Hub Services",
    "description": "Comprehensive digital solutions for businesses",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Web Development",
        "description": "Custom websites and web applications built with modern technologies",
        "provider": {
          "@type": "Organization",
          "name": "Galaxy Software Hub"
        },
        "serviceType": "Web Development",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Graphic Design",
        "description": "Creative visual solutions including logos, branding, and marketing materials",
        "provider": {
          "@type": "Organization",
          "name": "Galaxy Software Hub"
        },
        "serviceType": "Graphic Design",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "SEO Services",
        "description": "Comprehensive SEO strategies to improve search engine rankings",
        "provider": {
          "@type": "Organization",
          "name": "Galaxy Software Hub"
        },
        "serviceType": "SEO Services",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "AI Automation",
        "description": "Intelligent automation solutions to streamline business processes",
        "provider": {
          "@type": "Organization",
          "name": "Galaxy Software Hub"
        },
        "serviceType": "AI Automation",
        "areaServed": "Worldwide"
      }
    ]
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Services />
    </div>
  );
}