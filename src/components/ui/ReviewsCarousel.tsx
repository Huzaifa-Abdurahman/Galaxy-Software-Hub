'use client';

import { useEffect, useState } from 'react';
import { Star, Quote, Sparkles, Award } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, Punjab Soap',
    rating: 5,
    review: 'Galaxy Software Hub transformed our business completely. Their web development expertise and attention to detail exceeded our expectations. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    badge: 'Premium Client'
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    role: 'Founder, Huztech',
    rating: 5,
    review: 'Outstanding service and professional team. They delivered our project on time and within budget. The quality of work is exceptional!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    badge: 'Enterprise'
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Marketing Director, Zentix',
    rating: 5,
    review: 'The team at Galaxy Software Hub is incredibly talented. They understood our vision perfectly and delivered beyond our expectations.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    badge: 'VIP Client'
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Owner, Al Hoos Store',
    rating: 5,
    review: 'Professional, reliable, and innovative. They helped us create a stunning e-commerce platform that boosted our sales significantly.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    badge: 'Gold Partner'
  },
  {
    id: 5,
    name: 'Fatima Ali',
    role: 'Manager, Punjab Soap Management',
    rating: 5,
    review: 'Excellent communication and technical expertise. They made our management system user-friendly and efficient. Great partnership!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    badge: 'Strategic Partner'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'CEO, Dine Market Link Guard',
    rating: 5,
    review: 'The team delivered an outstanding security solution for our platform. Their expertise in cybersecurity is top-notch!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    badge: 'Security Expert'
  },
  {
    id: 7,
    name: 'Aisha Khan',
    role: 'Product Manager, TechFlow',
    rating: 5,
    review: 'Incredible attention to detail and innovative solutions. They helped us launch our product successfully with amazing results.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    badge: 'Innovation Partner'
  },
  {
    id: 8,
    name: 'Michael Brown',
    role: 'Director, Digital Solutions',
    rating: 5,
    review: 'Professional team with exceptional skills. They delivered our project on time and the quality exceeded our expectations.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    badge: 'Excellence Award'
  }
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-yellow-400 fill-current drop-shadow-lg'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bubble-gradient-bg-warm relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Client Testimonials</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Galaxy Software Hub.
            </p>
          </div>
        </FadeIn>

        {/* Main Review Display */}
        <div className="flex justify-center items-center mb-16">
          <div className="relative w-full max-w-5xl">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 transform translate-x-0 z-10'
                    : 'opacity-0 scale-75 transform translate-x-full z-0'
                }`}
              >
                <div className="relative">
                  {/* Main review card */}
                  <div className="glass-effect bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                    {/* Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                        <Award className="w-3 h-3" />
                        <span>{review.badge}</span>
                      </div>
                    </div>

                    <div className="text-center">
                      {/* Quote Icon with animation */}
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse">
                        <Quote className="w-10 h-10 text-white" />
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-xl md:text-2xl text-white mb-8 italic leading-relaxed font-medium">
                        "{review.review}"
                      </blockquote>

                      {/* Stars with glow effect */}
                      <div className="flex justify-center mb-8">
                        <div className="flex space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center justify-center space-x-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-purple-200">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl"></div>
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-white text-xl mb-1">
                            {review.name}
                          </h4>
                          <p className="text-gray-300 text-sm font-medium">
                            {review.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-sm animate-bounce"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Indicators */}
        <div className="flex justify-center space-x-4 mb-16">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-150 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-125'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Continuous Scrolling Reviews */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll-reviews">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <div className="glass-effect bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  <div className="text-center">
                    {/* Mini Quote Icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-sm text-white mb-4 italic line-clamp-3 leading-relaxed">
                      "{review.review}"
                    </blockquote>

                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h5 className="font-semibold text-white text-sm">
                          {review.name}
                        </h5>
                        <p className="text-gray-300 text-xs">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 shadow-2xl">
              <div className="flex space-x-1">
                {renderStars(5)}
              </div>
              <span className="text-white font-bold text-lg">
                4.9/5 Average Rating
              </span>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes scroll-reviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-reviews {
          animation: scroll-reviews 35s linear infinite;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
} 