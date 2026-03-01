import AnimatedSection from "@/components/AnimatedSection";

const Privacy = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container-main max-w-3xl">
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p>Adam & Brothers Ltd ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Information We Collect</h2>
            <p>We collect information you provide when placing an order, booking a consultation, or contacting us — including your name, email, phone number, delivery address, and payment details.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">How We Use Your Information</h2>
            <p>Your information is used to process orders, arrange deliveries, respond to enquiries, and improve our services. We do not sell your data to third parties.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. Payment processing is handled securely through our payment providers.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Your Rights</h2>
            <p>Under UK GDPR, you have the right to access, rectify, or delete your personal data. Contact us at +44 7903 424724 to exercise these rights.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Contact</h2>
            <p>Adam & Brothers Ltd, 1417 Ashton Old Rd, Openshaw, Manchester M11 1HJ. Phone: +44 7903 424724.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default Privacy;
