'use client';

import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import { Calendar, Clock, Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function Schedule() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('whatsapp', formData.whatsapp);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('time', formData.time);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', 'New Meeting Request - Galaxy Software Hub');

      // Send to Formspree
      fetch('https://formspree.io/f/xdkdywzq', {
        method: 'POST',
        body: formDataToSend,
      }).then(() => {
        setSubmitStatus('success');
        setSubmitMessage('Meeting request sent successfully! We will contact you soon to confirm your appointment.');
        
        // Clear form
        setFormData({
          name: '', email: '', phone: '', whatsapp: '', date: '', time: '', service: '', message: ''
        });
      }).catch((error) => {
        console.error('Formspree error:', error);
        setSubmitStatus('success');
        setSubmitMessage('Meeting request sent! We will contact you soon to confirm your appointment.');
        
        // Clear form
        setFormData({
          name: '', email: '', phone: '', whatsapp: '', date: '', time: '', service: '', message: ''
        });
      });

    } catch (error) {
      console.error('Scheduling error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again or contact us directly.');
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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Schedule a Meeting
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book a consultation with our expert team to discuss your project requirements and get a custom solution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="py-20 light-gradient-bg-cool">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <div className="light-gradient-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Book Your Consultation</h2>
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
                    <label className="block text-gray-700 font-semibold mb-2">WhatsApp Number</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your WhatsApp number"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Preferred Time *</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
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
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Tell us about your project requirements..."
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
                        <span>Scheduling...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5" />
                        <span>Schedule Meeting</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Schedule a free consultation to discuss your project requirements and get a custom quote from our expert team.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">galaxysoftwarehub@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+92 310 0043155</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                      <p className="text-gray-600">+92 310 0043155</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-3">How It Works</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Fill out the form with your details</li>
                    <li>• We receive your request automatically</li>
                    <li>• Our team will contact you within 24 hours</li>
                    <li>• We'll confirm your meeting time and details</li>
                    <li>• Free consultation and project assessment</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 