import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">ADAM & BROTHERS</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Premium beds, mattresses and furniture in Manchester. Delivering luxury comfort across the UK since 2018.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link to="/reviews" className="hover:text-accent transition-colors">Reviews</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
              <span>1417 Ashton Old Rd, Openshaw,<br />Manchester M11 1HJ</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <a href="tel:+447903424724" className="hover:text-accent transition-colors">+44 7903 424724</a>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
              <div>
                <p>Mon – Sat: 10:00 – 18:00</p>
                <p>Sun: 11:00 – 16:00</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Follow Us</h4>
          <a
            href="https://www.instagram.com/adambrothersltd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@adambrothersltd</span>
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Adam & Brothers Ltd. All rights reserved. Company registered in England & Wales.
      </div>
    </div>
  </footer>
);

export default Footer;
