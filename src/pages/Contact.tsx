import { useState } from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection className="text-center mb-12">
            <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-2">Get in Touch</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Contact & Booking</h1>
            <p className="text-muted-foreground">Visit our showroom or book a free consultation.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-xl font-bold mb-6">Book a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email *" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  <Input type="tel" placeholder="Phone *" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <Input type="date" placeholder="Preferred Date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                <Textarea placeholder="Your message..." rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                <Button type="submit" variant="accent" size="lg" className="w-full">Send Enquiry</Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-xl font-bold mb-6">Visit Our Showroom</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">1417 Ashton Old Rd, Openshaw, Manchester M11 1HJ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+447903424724" className="text-muted-foreground text-sm hover:text-accent">+44 7903 424724</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-muted-foreground text-sm">Mon – Sat: 10:00 – 18:00</p>
                    <p className="text-muted-foreground text-sm">Sun: 11:00 – 16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a href="https://www.instagram.com/adambrothersltd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-accent">@adambrothersltd</a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  title="Adam & Brothers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.0!2d-2.1745!3d53.4755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3c4a0000001%3A0x1!2s1417+Ashton+Old+Rd%2C+Openshaw%2C+Manchester+M11+1HJ!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
