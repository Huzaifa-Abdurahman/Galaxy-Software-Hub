import FadeIn from '@/components/animations/FadeIn';
import { Code, Palette, Search, Bot, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    key: 'web-development',
    description: 'Custom websites and web applications built with modern technologies.',
    features: [
      'Responsive Design',
      'Fast Performance',
      'SEO Optimized',
      'Modern UI/UX',
      'E-commerce Solutions',
      'CMS Integration'
    ],
    price: 'Starting from $999'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    key: 'graphic-design',
    description: 'Creative visual solutions for your brand identity and marketing needs.',
    features: [
      'Logo Design',
      'Brand Identity',
      'Print Design',
      'Digital Graphics',
      'Marketing Materials',
      'Social Media Graphics'
    ],
    price: 'Starting from $299'
  },
  {
    icon: Search,
    title: 'SEO Services',
    key: 'seo-services',
    description: 'Comprehensive SEO strategies to improve your search engine visibility.',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Link Building',
      'Local SEO',
      'Analytics & Reporting'
    ],
    price: 'Starting from $499/month'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    key: 'ai-automation',
    description: 'Intelligent automation solutions to streamline your business processes.',
    features: [
      'Chatbots Development',
      'Process Automation',
      'Data Analysis',
      'Machine Learning',
      'API Integration',
      'Custom AI Solutions'
    ],
    price: 'Starting from $799'
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your business and drive sustainable growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="dark-card p-8 rounded-2xl dark-shadow hover:dark-hover transition-all duration-300 glass-effect bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white mb-4">{service.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-white">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                        <Link 
                          href={`/quote?service=${service.key}`}
                          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark-card">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that fits your needs and budget.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 card-hover">
             <Link href="https://wa.me/923100043155">Contact Us Today</Link>
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}