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
      <section className="py-20 bubble-gradient-bg">
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
                  Visionary leader and software engineer with a passion for creating innovative digital solutions that transform businesses and drive growth.
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a href="https://linkedin.com/in/huzaifa-abdurahman" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com/huzaifa_dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://github.com/huzaifa-abdurahman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://huzaifa-portfolio.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* CEO Message */}
            <FadeIn delay={0.2}>
              <div className="dark-card p-8 rounded-2xl dark-shadow">
                <div className="flex items-center mb-6">
                  <Crown className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Message from CEO</h3>
                </div>
                <blockquote className="text-white text-lg leading-relaxed italic mb-6">
                  "At Galaxy Software Hub, we believe that technology should be a catalyst for growth, not a barrier. Our mission is to empower businesses with innovative digital solutions that drive real results. We combine technical excellence with creative vision to deliver solutions that exceed expectations."
                </blockquote>
                <p className="text-white">
                  Every project we undertake is an opportunity to make a meaningful impact. We're not just building websites or applications – we're creating digital experiences that connect, engage, and convert. Our team's passion for innovation and commitment to excellence ensures that every solution we deliver is built to last and designed to perform.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From humble beginnings to becoming a trusted partner for businesses worldwide, 
                our journey has been driven by innovation, excellence, and unwavering commitment to client success.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="dark-card p-6 rounded-2xl text-center dark-shadow">
                <div className="text-4xl font-bold text-purple-400 mb-2">2020</div>
                <h3 className="text-xl font-bold text-white mb-3">Founded</h3>
                <p className="text-gray-300">Started with a vision to transform businesses through technology</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="dark-card p-6 rounded-2xl text-center dark-shadow">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <h3 className="text-xl font-bold text-white mb-3">Projects</h3>
                <p className="text-gray-300">Successfully delivered projects across various industries</p>
                  </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="dark-card p-6 rounded-2xl text-center dark-shadow">
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <h3 className="text-xl font-bold text-white mb-3">Satisfaction</h3>
                <p className="text-gray-300">Client satisfaction rate with our services and solutions</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bubble-gradient-bg-warm">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape the way we work with our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="dark-card p-6 rounded-2xl text-center dark-shadow hover:dark-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the talented professionals who make Galaxy Software Hub a success.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="dark-card p-6 rounded-2xl text-center dark-shadow hover:dark-hover transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <member.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}