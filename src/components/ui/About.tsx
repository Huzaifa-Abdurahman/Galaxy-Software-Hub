'use client';

import FadeIn from '../animations/FadeIn';
import { Users, Award, Target, Lightbulb, Star, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We are committed to delivering exceptional digital solutions that drive real business results.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to provide cutting-edge solutions for our clients.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success. We work closely with clients to understand and exceed their expectations.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in everything we do.'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    description: 'Visionary leader with 10+ years in tech innovation and business strategy.',
    image: 'bg-gradient-to-br from-purple-400 to-pink-400'
  },
  {
    name: 'Mike Chen',
    role: 'Lead Developer',
    description: 'Full-stack expert specializing in modern web technologies and AI integration.',
    image: 'bg-gradient-to-br from-blue-400 to-purple-400'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    description: 'Creative mastermind behind our stunning visual designs and user experiences.',
    image: 'bg-gradient-to-br from-pink-400 to-red-400'
  },
  {
    name: 'David Park',
    role: 'SEO Specialist',
    description: 'Data-driven strategist who helps businesses dominate search rankings.',
    image: 'bg-gradient-to-br from-green-400 to-blue-400'
  }
];

export default function About() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 animate-bounce-slow opacity-20">
          <Star className="h-6 w-6 text-purple-500" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse-slow opacity-20">
          <Sparkles className="h-8 w-8 text-pink-500" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce-slow opacity-20" style={{ animationDelay: '1s' }}>
          <Star className="h-4 w-4 text-purple-400" />
        </div>
        <div className="absolute bottom-40 right-1/3 float opacity-20">
          <Sparkles className="h-6 w-6 text-pink-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Galaxy Software Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team of digital innovators dedicated to transforming businesses 
              through cutting-edge technology solutions and creative excellence.
            </p>
          </div>
        </FadeIn>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to bridge the gap between innovative technology and business success, 
                  Galaxy Software Hub has been at the forefront of digital transformation for over 5 years.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began with a simple belief: every business deserves access to world-class 
                  digital solutions that can propel them to new heights of success.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have helped hundreds of businesses across various industries 
                  achieve their digital goals through our comprehensive suite of services.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl card-hover">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">500+</div>
                    <div className="text-gray-600 font-semibold">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">100+</div>
                    <div className="text-gray-600 font-semibold">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">5+</div>
                    <div className="text-gray-600 font-semibold">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">24/7</div>
                    <div className="text-gray-600 font-semibold">Support</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we serve our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our talented team of experts brings diverse skills and passion to every project.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover">
                  <div className={`w-24 h-24 ${member.image} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <FadeIn delay={0.6}>
          <div className="mt-20 text-center bg-gradient-to-r from-purple-600 to-pink-600 p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 card-hover">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}