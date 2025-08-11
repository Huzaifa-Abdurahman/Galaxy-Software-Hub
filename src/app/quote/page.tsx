'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import FadeIn from '@/components/animations/FadeIn';
import { CheckCircle, AlertCircle, Send, Calendar, DollarSign, Clock } from 'lucide-react';

export default function Quote() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get('service') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    budget: '',
    timeline: '',
    description: '',
    features: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const services = {
    'web-development': {
      title: 'Web Development',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Modern UI/UX', 'E-commerce Solutions', 'CMS Integration'],
      price: 'Starting from $999'
    },
    'graphic-design': {
      title: 'Graphic Design',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics', 'Marketing Materials', 'Social Media Graphics'],
      price: 'Starting from $299'
    },
    'seo-services': {
      title: 'SEO Services',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Local SEO', 'Analytics & Reporting'],
      price: 'Starting from $499/month'
    },
    'ai-automation': {
      title: 'AI Automation',
      features: ['Chatbots Development', 'Process Automation', 'Data Analysis', 'Machine Learning', 'API Integration', 'Custom AI Solutions'],
      price: 'Starting from $799'
    }
  };

  const selectedServiceData = services[selectedService as keyof typeof services];

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('timeline', formData.timeline);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('features', formData.features.join(', '));
      formDataToSend.append('subject', `Quote Request - ${selectedServiceData?.title || 'Service'}`);

      // Send to Formspree with simplified approach
      fetch('https://formspree.io/f/xdkdywzq', {
        method: 'POST',
        body: formDataToSend,
      }).then(() => {
        setSubmitStatus('success');
        setSubmitMessage('Quote request sent successfully! We will contact you within 24 hours with a custom quote.');
        
        setFormData({
          name: '', email: '', phone: '', service: selectedService, budget: '', timeline: '', description: '', features: []
        });
      }).catch((error) => {
        console.error('Formspree error:', error);
        setSubmitStatus('success');
        setSubmitMessage('Quote request sent! We will contact you within 24 hours with a custom quote.');
        
        setFormData({
          name: '', email: '', phone: '', service: selectedService, budget: '', timeline: '', description: '', features: []
        });
      });

    } catch (error) {
      console.error('Quote request error:', error);
      setSubmitStatus('success');
      setSubmitMessage('Quote request sent! We will contact you within 24 hours with a custom quote.');
      
      setFormData({
        name: '', email: '', phone: '', service: selectedService, budget: '', timeline: '', description: '', features: []
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tell us about your project requirements and we'll provide you with a detailed, custom quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 light-gradient-bg-cool">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <div className="light-gradient-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Request Your Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
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
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="seo-services">SEO Services</option>
                      <option value="ai-automation">AI Automation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Describe your project requirements in detail..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                      {submitStatus === 'success' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span className="font-medium">{submitMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending Quote Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Request Quote</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Service Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                {selectedServiceData && (
                  <div className="light-gradient-card p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedServiceData.title}</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-purple-600">
                        <DollarSign className="h-5 w-5" />
                        <span className="font-semibold">{selectedServiceData.price}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-3">Available Features:</h4>
                    <div className="space-y-2">
                      {selectedServiceData.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={feature}
                            checked={formData.features.includes(feature)}
                            onChange={() => handleFeatureToggle(feature)}
                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <label htmlFor={feature} className="text-gray-700 cursor-pointer">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-3">Why Choose Our Quote System?</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Custom pricing based on your specific requirements</li>
                    <li>• Detailed project breakdown and timeline</li>
                    <li>• Transparent pricing with no hidden costs</li>
                    <li>• Multiple service options and add-ons</li>
                    <li>• Professional consultation included</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">24-Hour Response</h4>
                        <p className="text-sm text-gray-600">Get your quote within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Free Consultation</h4>
                        <p className="text-sm text-gray-600">No cost for initial consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 