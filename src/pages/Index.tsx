import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Truck, Shield, Headphones } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";

const reviews = [
  { name: "Zayn Ali", text: "Excellent service and really good quality beds at very reasonable prices." },
  { name: "Zayna M", text: "Full upstairs rooms installed and ordered lounge furniture." },
  { name: "Nazakat Ali", text: "Trustworthy, delivered what they promised." },
];

const features = [
  { icon: Truck, title: "UK-Wide Delivery", desc: "Free delivery on orders over £500" },
  { icon: Shield, title: "Quality Guarantee", desc: "Premium materials, built to last" },
  { icon: Headphones, title: "Expert Advice", desc: "Book a free consultation" },
];

const featured = products.filter(p => p.originalPrice).slice(0, 8);

const Index = () => (
  <main>
    {/* HERO */}
    <section
      className="relative min-h-screen flex items-center justify-center hero-parallax"
      style={{ backgroundImage: "url(/images/product-10.png)" }}
    >
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-accent-foreground leading-tight mb-6"
        >
          Luxury Beds &<br />Mattresses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-accent-foreground/80 mb-8 font-body"
        >
          Manchester Based — Delivery Across the UK
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild variant="accent" size="lg" className="text-base px-8 h-12">
            <Link to="/shop">Shop Now</Link>
          </Button>
          <Button asChild variant="hero-outline" size="lg" className="text-base px-8 h-12">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* FEATURES BAR */}
    <AnimatedSection className="bg-card border-b border-border">
      <div className="container-main py-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <f.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>

    {/* FEATURED PRODUCTS */}
    <section className="section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">Our Collection</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* SHOWROOM BANNER */}
    <section
      className="hero-parallax relative py-24 md:py-32"
      style={{ backgroundImage: "url(/images/product-6.png)" }}
    >
      <div className="absolute inset-0 bg-hero-overlay/70" />
      <AnimatedSection className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-accent-foreground mb-4">
          Visit Our Manchester Showroom
        </h2>
        <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
          See and feel our furniture in person. Expert staff on hand to help you find the perfect pieces.
        </p>
        <Button asChild variant="accent" size="lg">
          <Link to="/contact">Get Directions</Link>
        </Button>
      </AnimatedSection>
    </section>

    {/* REVIEWS */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{r.text}"</p>
              <p className="font-semibold text-sm">{r.name}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* INSTAGRAM */}
    <section className="section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-8">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">Follow Us</p>
          <h2 className="text-2xl md:text-3xl font-bold">@adambrothersltd</h2>
        </AnimatedSection>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {[1, 2, 3, 7, 10].map((n) => (
            <a
              key={n}
              href="https://www.instagram.com/adambrothersltd"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-sm group"
            >
              <img
                src={`/images/product-${n}.png`}
                alt="Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* MAP */}
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <AnimatedSection className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Find Us</h2>
        </AnimatedSection>
        <div className="rounded-lg overflow-hidden border border-border aspect-video max-h-96">
          <iframe
            title="Adam & Brothers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.0!2d-2.1745!3d53.4755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3c4a0000001%3A0x1!2s1417+Ashton+Old+Rd%2C+Openshaw%2C+Manchester+M11+1HJ!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </main>
);

export default Index;
