import Hero from '@/components/ui/Hero';
import Services from '@/components/ui/Services';
import LogoCarousel from '@/components/ui/LogoCarousel';
import ReviewsCarousel from '@/components/ui/ReviewsCarousel';

export default function Home() {
  return (
    <div className="dark-theme-bg min-h-screen">
      {/* Giant transparent overlapping bubbles */}
      <div className="giant-bubble giant-bubble-1"></div>
      <div className="giant-bubble giant-bubble-2"></div>
      <div className="giant-bubble giant-bubble-3"></div>
      
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>
      <div className="floating-orb floating-orb-3"></div>
      <div className="floating-orb floating-orb-4"></div>
      <div className="floating-orb floating-orb-5"></div>
      <div className="floating-orb floating-orb-6"></div>

      <Hero />
      <Services />
      <LogoCarousel />
      <ReviewsCarousel />
      
      {/* Call to Action Section with Dark Theme */}
      <section className="py-20 dark-reviews-bg relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="dark-glass dark-card-hover p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 dark-heading-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl dark-text-primary mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have revolutionized their digital presence with our expert solutions. Let's create something extraordinary together.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="dark-btn-primary px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 dark-card-hover group">
                <span className="flex items-center space-x-2">
                  <span>Start Your Project Today</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="dark-btn-secondary px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 dark-card-hover group">
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Get Free Consultation</span>
                </span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm dark-text-secondary">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>500+ Projects Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                  <span>24/7 Premium Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decoration elements */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
      </section>
    </div>
  );
}