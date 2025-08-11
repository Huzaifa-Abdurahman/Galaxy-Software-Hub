'use client';

import { useEffect, useState } from 'react';
import FadeIn from '../animations/FadeIn';

const logos = [
  {
    name: 'Huztech',
    src: '/images/logos/huztech-logo.PNG',
    alt: 'Huztech Logo'
  },
  {
    name: 'Punjab Soap',
    src: '/images/logos/Gemini_Generated_Image_2bed32bed32bed32.png',
    alt: 'Punjab Soap Logo'
  },
  {
    name: 'Zentix',
    src: '/images/logos/Gemini_Generated_Image_7bnnpa7bnnpa7bnn.png',
    alt: 'Zentix Logo'
  },
  {
    name: 'Al Hoos Store',
    src: '/images/logos/Gemini_Generated_Image_9ix1659ix1659ix1.png',
    alt: 'Al Hoos Store Logo'
  },
  {
    name: 'Management System',
    src: '/images/logos/Gemini_Generated_Image_186np7186np7186n.png',
    alt: 'Management System Logo'
  },
  {
    name: 'Dine Market',
    src: '/images/logos/Gemini_Generated_Image_ishqz4ishqz4ishq.png',
    alt: 'Dine Market Logo'
  },
  {
    name: 'Link Guard',
    src: '/images/logos/Gemini_Generated_Image_op1wxkop1wxkop1w.png',
    alt: 'Link Guard Logo'
  },
  {
    name: 'Tech Solutions',
    src: '/images/logos/Gemini_Generated_Image_std8u3std8u3std8.png',
    alt: 'Tech Solutions Logo'
  }
];

export default function LogoCarousel() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Transparent background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white-800 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg text-white-600 max-w-2xl mx-auto">
              We've helped businesses of all sizes transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </FadeIn>

        {/* Modern Continuous Logo Carousel */}
        <div className="relative">
          {/* First row - moving left */}
          <div className="flex space-x-16 mb-8 animate-scroll-left">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`left-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative">
                  {/* Glass effect container */}
                  <div className="glass-effect bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 group-hover:bg-white/20">
                    <div className="w-32 h-32 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-lg">${logo.name.charAt(0)}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-sm font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        {logo.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - moving right */}
          <div className="flex space-x-16 animate-scroll-right">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`right-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="relative">
                  {/* Glass effect container */}
                  <div className="glass-effect bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 group-hover:bg-white/20">
                    <div className="w-32 h-32 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                <span class="text-white font-bold text-lg">${logo.name.charAt(0)}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-sm font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                        {logo.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 8s linear infinite;
          }
          
          .animate-scroll-right {
            animation: scroll-right 8s linear infinite;
          }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
} 