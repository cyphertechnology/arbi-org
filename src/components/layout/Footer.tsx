import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-2">ARBI</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Africa Restoring Bridges Initiative — Working towards healed, reconciled, and prosperous communities in the DRC.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Where We Work", path: "/where-we-work" },
                { name: "Partners", path: "#" },
                { name: "Contact", path: "/contact" },
                { name: "Donate", path: "/donate" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, North Kivu, DRC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+243-971 944 496</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">sewimfuratheo@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Our Values */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Our Values</h4>
            <ul className="space-y-2">
              {[
                "Dedication with excellence",
                "Humanity and compassion",
                "Equality",
                "Unity in diversity",
                "Transparency",
                "Stewardship",
              ].map((value) => (
                <li key={value}>
                  <span className="text-muted-foreground text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Africa Restoring Bridges Initiative. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
