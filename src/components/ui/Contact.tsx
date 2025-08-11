'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, CheckCircle } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'contact@galaxysoftwarehub.com',
    action: 'mailto:contact@galaxysoftwarehub.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    contact: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come to our office',
    contact: '123 Digital Street, Tech City, TC 12345',
    action: '#',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with support',
    contact: 'Available 24/7',
    action: '#',
    color: 'from-pink-500 to-pink-600'
  }
];

const workingHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' }
];

const faqs = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We typically respond within 2-4 hours during business hours, and within 24 hours on weekends.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We offer free 30-minute consultations to discuss your project requirements and goals.'
  },
  {
    question: 'What information should I include in my message?',
    answer: 'Please include details about your project, timeline, budget range, and any specific requirements you have.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'normal'
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Thank You!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
                <h3 className="font-bold text-gray-800 mb-4">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-600">We'll review your requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-600">Schedule a consultation call</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-600">Provide detailed proposal</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </FadeIn>

        {/* Contact Methods */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <FadeIn key={method.title} delay={index * 0.1}>
                <a
                  href={method.action}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover group"
                >
                  <div className={`bg-gradient-to-r ${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <p className="text-purple-600 font-semibold text-sm">{method.contact}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="seo-services">SEO Services</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Project Urgency</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="normal">Normal (1-2 months)</option>
                        <option value="urgent">Urgent (2-4 weeks)</option>
                        <option value="asap">ASAP (1-2 weeks)</option>
                        <option value="flexible">Flexible timeline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Working Hours */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-lg glass-effect bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-800">Working Hours</h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{schedule.day}</span>
                      <span className="text-gray-800 font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-semibold text-sm">Currently Online</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Quick Info */}
            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-white">
                <Globe className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                <p className="text-white/90 mb-4">
                  We work with clients worldwide and are experienced in remote collaboration across different time zones.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="bg-white/20 px-2 py-1 rounded">🇺🇸 USA</span>
                  <span className="bg-white/20 px-2 py-1 rounded">🇨🇦 Canada</span>
                  <span className="bg-white/20 px-2 py-1 rounded">🇬🇧 UK</span>
                </div>
              </div>
            </FadeIn>

            {/* FAQ */}
            <FadeIn delay={0.4}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick FAQ</h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full text-left"
                      >
                        <h4 className="font-semibold text-gray-800 text-sm hover:text-purple-600 transition-colors">
                          {faq.question}
                        </h4>
                      </button>
                      {expandedFaq === index && (
                        <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}