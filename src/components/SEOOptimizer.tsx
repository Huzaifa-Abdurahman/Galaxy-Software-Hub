'use client';

import { useEffect } from 'react';

interface SEOOptimizerProps {
  pageType?: 'home' | 'services' | 'blog' | 'contact' | 'about';
}

export default function SEOOptimizer({ pageType = 'home' }: SEOOptimizerProps) {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/images/logo.png', as: 'image' },
      { rel: 'preload', href: '/images/og-image.jpg', as: 'image' },
    ];

    preloadLinks.forEach(({ rel, href, as }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (as) link.setAttribute('as', as);
      document.head.appendChild(link);
    });

    // Add page-specific structured data
    const addPageSpecificData = () => {
      const pageData = {
        home: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Galaxy Software Hub - Digital Solutions",
          "description": "Transform your business with our cutting-edge digital solutions",
          "url": "https://galaxysoftwarehub.com",
          "mainEntity": {
            "@type": "Organization",
            "name": "Galaxy Software Hub",
            "url": "https://galaxysoftwarehub.com"
          }
        },
        services: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Services - Galaxy Software Hub",
          "description": "Comprehensive digital solutions including web development, graphic design, SEO, and AI automation",
          "url": "https://galaxysoftwarehub.com/services"
        },
        contact: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Us - Galaxy Software Hub",
          "description": "Get in touch with our team for your digital solutions",
          "url": "https://galaxysoftwarehub.com/contact"
        }
      };

      if (pageData[pageType as keyof typeof pageData]) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(pageData[pageType as keyof typeof pageData]);
        document.head.appendChild(script);
      }
    };

    addPageSpecificData();

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        }
      });
    }

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    };
  }, [pageType]);

  return null; // This component doesn't render anything
} 