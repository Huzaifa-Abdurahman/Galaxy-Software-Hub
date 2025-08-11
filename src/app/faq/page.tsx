'use client';

import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services does Galaxy Software Hub offer?",
    answer: "We offer comprehensive digital services including Web Development, Graphic Design, SEO Services, and AI Automation solutions to help transform your business."
  },
  {
    question: "How long does a typical web development project take?",
    answer: "Project timelines vary based on complexity, but most websites take 2-6 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer various support packages including maintenance, updates, hosting support, and technical assistance to ensure your project continues to perform optimally."
  },
  {
    question: "Can you help improve my existing website's SEO?",
    answer: "Absolutely! We can audit your current website and implement comprehensive SEO strategies to improve your search engine rankings and organic traffic."
  },
  {
    question: "What makes your AI automation services unique?",
    answer: "Our AI automation solutions are custom-built for your specific business needs, integrating seamlessly with your existing systems to maximize efficiency and ROI."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we work with startups, small businesses, and large enterprises. Our solutions are scalable and tailored to fit businesses of any size."
  },
  {
    question: "What is your payment structure?",
    answer: "We typically work with milestone-based payments for larger projects and offer flexible payment terms. Specific payment structure will be outlined in your project proposal."
  },
  {
    question: "How do I get started with a project?",
    answer: "Simply contact us through our website, email, or phone. We'll schedule a free consultation to discuss your requirements and provide a detailed proposal."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help your business grow.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 light-gradient-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="light-gradient-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white-50/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white-800 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.8}>
            <div className="text-center mt-12">
              <div className="light-gradient-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white-800 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Our team is here to help!
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}