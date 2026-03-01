import AnimatedSection from "@/components/AnimatedSection";

const Terms = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container-main max-w-3xl">
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            <p>These terms govern your use of the Adam & Brothers Ltd website and your purchase of products from us.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Orders & Payment</h2>
            <p>All prices are in GBP and include VAT. Payment is required at the time of ordering. We accept major credit/debit cards and PayPal.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Delivery</h2>
            <p>We deliver across the UK. Free delivery on orders over £500. Standard delivery is £49. Delivery times are typically 5–10 working days.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Returns & Refunds</h2>
            <p>You may return unused items within 14 days of delivery for a full refund. Items must be in their original packaging. Custom orders are non-refundable.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Warranty</h2>
            <p>All products carry a minimum 1-year manufacturer's warranty. Mattresses carry up to a 10-year guarantee depending on the product.</p>
            <h2 className="text-foreground font-display text-xl font-semibold">Contact</h2>
            <p>For any queries regarding these terms, contact us at +44 7903 424724 or visit our showroom.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default Terms;
