import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const allReviews = [
  { name: "Zayn Ali", text: "Excellent service and really good quality beds at very reasonable prices. Highly recommended for anyone looking for proper furniture in Manchester.", rating: 5 },
  { name: "Zayna M", text: "Full upstairs rooms installed and ordered lounge furniture. The team were professional, punctual, and the quality exceeded expectations.", rating: 5 },
  { name: "Nazakat Ali", text: "Trustworthy, delivered what they promised. The bed frame is solid and looks stunning. Will be coming back for a mattress upgrade.", rating: 5 },
  { name: "Sarah K", text: "Lovely showroom with a great selection. Staff were very helpful and not pushy at all. Bought a beautiful ottoman bed.", rating: 5 },
  { name: "Mohammed R", text: "Best furniture shop in Manchester. Prices are fair and the quality is top notch. Bought a full bedroom set and couldn't be happier.", rating: 5 },
  { name: "Amina B", text: "Ordered a mattress and divan set. Delivery was quick and the lads who brought it were really careful. Five stars from me.", rating: 5 },
];

const Reviews = () => (
  <main className="pt-20">
    <section className="section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-12">
          <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">Testimonials</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">Customer Reviews</h1>
          <p className="text-muted-foreground">Don't just take our word for it — hear from our happy customers.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((r, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="bg-card rounded-lg p-6 border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
              </div>
              <p className="text-muted-foreground mb-4 italic leading-relaxed">"{r.text}"</p>
              <p className="font-semibold text-sm">{r.name}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Reviews;
