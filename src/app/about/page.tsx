import FadeIn from '@/components/animations/FadeIn';
import { Users, Award, Target, Lightbulb, Crown, Palette, Search, Code, Bot, ExternalLink, Linkedin, Twitter, Github } from 'lucide-react';

export default function About() {
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
      name: 'Abdullah',
      role: 'Graphic Designer',
      description: 'Creative designer specializing in brand identity, UI/UX design, and visual storytelling.',
      icon: Palette
    },
    {
      name: 'Ali Ahmed',
      role: 'SEO Expert',
      description: 'Digital marketing specialist focused on search engine optimization and organic growth strategies.',
      icon: Search
    },
    {
      name: 'Ali Mustafa',
      role: 'Web Developer',
      description: 'Full-stack developer with expertise in React, Node.js, and modern web development frameworks.',
      icon: Code
    },
    {
      name: 'Ahmer Ali',
      role: 'AI Automation Engineer',
      description: 'Machine learning specialist and automation expert creating intelligent business solutions.',
      icon: Bot
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Galaxy Software Hub
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are a passionate team of digital innovators dedicated to transforming businesses 
              through cutting-edge technology solutions and creative excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Card */}
            <FadeIn>
              <div className="dark-card p-8 rounded-2xl text-center relative dark-shadow">
                {/* CEO Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    CEO & Founder
                  </div>
                </div>
                
                {/* Avatar */}
                <div className="mb-6">
                  <div className="mx-auto w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100 border-4 border-purple-200">
                    <img
                      src="/images/HA.png"
                      alt="Huzaifa Abdurahman - CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* CEO Info */}
                <h3 className="text-2xl font-bold text-white mb-2">Huzaifa Abdurahman</h3>
                <p className="text-purple-400 font-semibold mb-4">CEO & Software Engineer</p>
                <p className="text-white mb-6">
                  Visionary leader and full-stack developer with expertise in modern web technologies and business strategy.
                </p>
                
                {/* CEO Links */}
                <div className="space-y-3">
                  <a
                    href="https://huzaifa-abdurahman.github.io/huzaifa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Portfolio</span>
                  </a>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href="https://linkedin.com/in/huzaifa-abdurahman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/huzaifa_ceo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-500 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://github.com/huzaifa-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* CEO Message */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div>
                                  <h2 className="text-4xl font-bold text-white mb-6">A Message from Our CEO</h2>
                <div className="dark-card p-6 rounded-2xl border-l-4 border-purple-500">
                  <p className="text-white text-lg leading-relaxed mb-4">
                      "At Galaxy Software Hub, we believe that every business deserves access to world-class digital solutions. 
                      Our mission is to bridge the gap between innovative technology and business success."
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-4">
                      "With over 5 years of experience and 500+ successful projects, we've helped businesses across various 
                      industries achieve their digital transformation goals."
                    </p>
                    <p className="text-white text-lg leading-relaxed">
                      "We're committed to providing reliable, innovative, and scalable solutions that help our clients 
                      stay ahead in the digital landscape."
                    </p>
                  </div>
                </div>
                
                {/* Service Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="dark-card p-4 rounded-xl dark-border">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Reliable Service</h4>
                        <p className="text-sm text-white">99.9% uptime guarantee</p>
                      </div>
                    </div>
                  </div>
                  <div className="dark-card p-4 rounded-xl dark-border">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                        <p className="text-sm text-gray-600">Round-the-clock assistance</p>
                      </div>
                    </div>
                  </div>
                  <div className="dark-card p-4 rounded-xl dark-border">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Expert Team</h4>
                        <p className="text-sm text-gray-600">Certified professionals</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                        <p className="text-sm text-gray-600">Quick turnaround times</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 light-gradient-bg-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-4xl font-bold text-gray-400 mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Founded with a vision to bridge the gap between innovative technology and business success, 
                  Galaxy Software Hub has been at the forefront of digital transformation for over 5 years.
                </p>
                <p className="text-gray-300 mb-4">
                  Our journey began with a simple belief: every business deserves access to world-class 
                  digital solutions that can propel them to new heights of success.
                </p>
                <p className="text-gray-300">
                  Today, we're proud to have helped hundreds of businesses across various industries 
                  achieve their digital goals through our comprehensive suite of services.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="light-gradient-bg-purple p-8 rounded-2xl border border-purple-100/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                    <div className="text-gray-300">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 light-gradient-bg">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-400 mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                These core values guide everything we do and shape how we serve our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="light-gradient-card p-6 rounded-2xl text-center card-hover glass-effect bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-400 mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 light-gradient-bg-cool">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-400 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our talented team of experts is dedicated to delivering exceptional results for your business.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="light-gradient-card p-6 rounded-2xl text-center card-hover glass-effect bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-400 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}