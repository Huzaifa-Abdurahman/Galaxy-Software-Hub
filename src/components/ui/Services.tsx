'use client';

import { Code, Palette, Search, Bot } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Modern UI/UX']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative visual solutions including logos, branding, marketing materials, and digital artwork.',
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics']
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics & Reporting']
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Intelligent automation solutions to streamline your business processes and increase efficiency.',
    features: ['Chatbots', 'Process Automation', 'Data Analysis', 'Machine Learning']
  }
];

export default function Services() {
  return (
    <section className="py-20 bubble-gradient-bg overflow-x-hidden">
      <div className="container mx-auto px-6 overflow-x-hidden">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the digital age.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="dark-card p-8 rounded-2xl dark-shadow hover:dark-hover transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`/quote?service=${service.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  Get Quote
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}