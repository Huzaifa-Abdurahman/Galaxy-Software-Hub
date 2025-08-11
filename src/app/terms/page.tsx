import FadeIn from '@/components/animations/FadeIn';

export default function Terms() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white-800 mb-8 text-center">
              Terms & Conditions
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="prose prose-lg max-w-none text-white-700">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h2>Services</h2>
              <p>
                Galaxy Software Hub provides web development, graphic design, SEO services, and 
                AI automation solutions. All services are subject to availability and our approval.
              </p>

              <h2>Payment Terms</h2>
              <p>
                Payment terms vary by service and will be clearly outlined in your service agreement. 
                We accept various payment methods and require payment according to agreed schedules.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website is owned by Galaxy Software Hub and protected by copyright laws. 
                Work delivered to clients becomes their property upon full payment.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Galaxy Software Hub shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of our services.
              </p>

              <h2>Contact Information</h2>
              <p>
                For questions regarding these terms, please contact us at legal@galaxysoftwarehub.com.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}