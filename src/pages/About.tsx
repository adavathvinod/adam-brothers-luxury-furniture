import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => (
  <main className="pt-20">
    {/* HERO */}
    <section
      className="hero-parallax relative py-24 md:py-32"
      style={{ backgroundImage: "url(/images/product-9.png)" }}
    >
      <div className="absolute inset-0 bg-hero-overlay/75" />
      <div className="relative z-10 container-main px-4 md:px-8">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">About Us</h1>
          <p className="text-accent-foreground/80 max-w-xl text-lg">Manchester's trusted destination for luxury beds, mattresses and home furniture.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src="/images/product-6.png" alt="Our Showroom" className="rounded-lg w-full" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">Our Story</p>
            <h2 className="text-3xl font-bold mb-4">Family-Run Quality</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Adam & Brothers Ltd is a family-run furniture business based in Openshaw, Manchester. We specialise in luxury beds, premium mattresses, and high-quality living room furniture at prices that won't break the bank.</p>
              <p>Our showroom at 1417 Ashton Old Road is filled with handpicked pieces — from Chesterfield beds and ottoman frames to orthopaedic mattresses and recliner sofas. Every item is selected for quality, comfort, and lasting style.</p>
              <p>We believe everyone deserves a great night's sleep and a beautiful home, which is why we offer competitive prices, free consultations, and delivery across the UK.</p>
            </div>
            <Button asChild variant="accent" className="mt-6">
              <Link to="/contact">Visit Our Showroom</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </main>
);

export default About;
