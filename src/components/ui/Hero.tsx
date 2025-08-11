'use client';

import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import FadeIn from '../animations/FadeIn';

// Custom hook for counting animation
function useCountAnimation(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16); // 60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, end, duration, delay]);

  return { count, ref };
}

export default function Hero() {
  const projectsCount = useCountAnimation(500, 2500, 800);
  const clientsCount = useCountAnimation(100, 2000, 1000);
  const yearsCount = useCountAnimation(5, 1500, 1200);
  const supportCount = useCountAnimation(24, 1800, 1400);

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <Star className="h-6 w-6 text-white/30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse-slow">
          <Sparkles className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce-slow" style={{ animationDelay: '1s' }}>
          <Star className="h-4 w-4 text-white/40" />
        </div>
        <div className="absolute bottom-40 right-1/3 float">
          <Sparkles className="h-6 w-6 text-white/30" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Galaxy Software Hub
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transform your digital presence with cutting-edge web development, stunning graphic design, 
            powerful SEO strategies, and revolutionary AI automation solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 flex items-center space-x-2 card-hover">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.8}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div ref={projectsCount.ref} className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                {projectsCount.count}+
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Projects Completed</div>
            </div>
            <div ref={clientsCount.ref} className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                {clientsCount.count}+
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Happy Clients</div>
            </div>
            <div ref={yearsCount.ref} className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {yearsCount.count}+
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Years Experience</div>
            </div>
            <div ref={supportCount.ref} className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {supportCount.count}/7
              </div>
              <div className="text-white/70 group-hover:text-white/90 transition-colors duration-300">Support</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}