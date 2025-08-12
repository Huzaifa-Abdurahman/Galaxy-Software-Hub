'use client';

import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { ExternalLink, Globe, Code, Palette, Search, Bot } from 'lucide-react';

const portfolioProjects = [
  {
    id: 'punjab-soap',
    name: 'Punjab Soap',
    description: 'Complete e-commerce platform for Punjab Soap with modern design and seamless user experience.',
    category: 'Web Development',
    icon: Globe,
    image: '/images/logos/Gemini_Generated_Image_std8u3std8u3std8.png',
    link: '#', // You can manually add the actual link here
    features: ['E-commerce Platform', 'Modern UI/UX', 'Payment Integration', 'Admin Dashboard']
  },
  {
    id: 'huztech',
    name: 'Huztech',
    description: 'Technology company website with advanced features and professional branding.',
    category: 'Web Development',
    icon: Code,
    image: '/images/logos/huztech-logo.PNG',
    link: '#', // You can manually add the actual link here
    features: ['Corporate Website', 'Professional Design', 'Responsive Layout', 'SEO Optimized']
  },
  {
    id: 'zentix',
    name: 'Zentix',
    description: 'Innovative software solutions platform with cutting-edge technology implementation.',
    category: 'AI Automation',
    icon: Bot,
    image: '/images/logos/Gemini_Generated_Image_op1wxkop1wxkop1w.png',
    link: '#', // You can manually add the actual link here
    features: ['AI Solutions', 'Automation Tools', 'Advanced Analytics', 'Cloud Integration']
  },
  {
    id: 'al-hoos-store',
    name: 'Al Hoos Store',
    description: 'Retail management system with inventory tracking and sales analytics.',
    category: 'Web Development',
    icon: Globe,
    image: '/images/logos/Gemini_Generated_Image_ishqz4ishqz4ishq.png',
    link: '#', // You can manually add the actual link here
    features: ['Retail Management', 'Inventory System', 'Sales Analytics', 'Multi-store Support']
  },
  {
    id: 'punjab-soap-management',
    name: 'Punjab Soap Management System',
    description: 'Comprehensive management system for Punjab Soap operations and logistics.',
    category: 'Web Development',
    icon: Code,
    image: '/images/logos/Gemini_Generated_Image_9ix1659ix1659ix1.png',
    link: '#', // You can manually add the actual link here
    features: ['Management System', 'Logistics Tracking', 'Order Management', 'Reporting Tools']
  },
  {
    id: 'dine-market-link-guard',
    name: 'Dine Market Link Guard',
    description: 'Security and protection system for online dining marketplace platforms.',
    category: 'AI Automation',
    icon: Bot,
    image: '/images/logos/Gemini_Generated_Image_7bnnpa7bnnpa7bnn.png',
    link: '#', // You can manually add the actual link here
    features: ['Security System', 'Link Protection', 'Fraud Detection', 'Real-time Monitoring']
  }
];

export default function PortfolioPage() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Galaxy Software Hub Portfolio",
    "description": "Our successful projects and digital solutions",
    "itemListElement": portfolioProjects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.name,
      "description": project.description,
      "creator": {
        "@type": "Organization",
        "name": "Galaxy Software Hub"
      },
      "url": project.link
    }))
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <section className="py-20 bubble-gradient-bg overflow-x-hidden">
        <div className="container mx-auto px-6 overflow-x-hidden">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses transform their digital presence with cutting-edge solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <div className="dark-card p-8 rounded-2xl dark-shadow hover:dark-hover transition-all duration-300 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="mb-6 h-48 bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
                    {!imageErrors[project.id] ? (
                      <img 
                        src={project.image} 
                        alt={`${project.name} logo`}
                        className="max-w-full max-h-full object-contain p-4"
                        onError={() => handleImageError(project.id)}
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                        <project.icon className="h-16 w-16 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 flex-1">{project.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Visit Button */}
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Visit Project</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Call to Action */}
          <FadeIn delay={0.6}>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="text-xl mb-6">
                  Let's create something amazing together. Get in touch with us to discuss your project requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </a>
                  <a 
                    href="/quote"
                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
} 