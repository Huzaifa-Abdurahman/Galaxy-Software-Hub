import FadeIn from '@/components/animations/FadeIn';

export default function Privacy() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white-800 mb-8 text-center">
              Privacy Policy
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="prose prose-lg max-w-none text-white-700">
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services.
              </p>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@galaxysoftwarehub.com.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}