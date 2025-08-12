import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio - Web Development, Graphic Design, SEO & AI Automation Projects',
  description: 'Explore our successful projects including Punjab Soap, Huztech, Zentix, Al Hoos Store, and more. See our expertise in web development, design, and digital solutions.',
  keywords: [
    'portfolio',
    'web development projects',
    'graphic design projects',
    'SEO projects',
    'AI automation projects',
    'Punjab Soap',
    'Huztech',
    'Zentix',
    'Al Hoos Store',
    'Dine Market Link Guard',
  ],
  openGraph: {
    title: 'Our Portfolio - Web Development, Graphic Design, SEO & AI Automation Projects',
    description: 'Explore our successful projects and see our expertise in digital solutions.',
    type: 'website',
    url: 'https://galaxysoftwarehub.com/portfolio',
  },
  alternates: {
    canonical: 'https://galaxysoftwarehub.com/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 