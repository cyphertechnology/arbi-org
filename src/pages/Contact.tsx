import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Heart,
  Shield,
  Award,
  Globe,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

// Import hero images for slideshow
import img1 from "@/assets/kids 2.jpg";
import img2 from "@/assets/kids 3.jpg";
import img3 from "@/assets/kids 4.jpg";
import img4 from "@/assets/kids 5.jpg";
import img5 from "@/assets/kids 6.jpg";
import img6 from "@/assets/kids.jpg";
import img7 from "@/assets/kids7.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const Contact = () => {
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thank you for reaching out. Our team will get back to you within 24-48 hours. 'You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings.' — Isaiah 58:12",
      duration: 6000,
    });
    // Reset form would go here if using state
  };

  return (
    <Layout>
      {/* Hero Section with Slideshow Background */}
      <section 
        className="relative min-h-[500px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed" 
        style={{ 
          backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full animate-fade-in-up">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-bold text-white tracking-[2px] uppercase">Contact Us</span>
          </div>
          <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
            Get in Touch
          </h1>
          <p className="text-white/75 text-xl max-w-xl">
            Have questions about our programs, want to volunteer, or need support? Our team is ready to assist you.
          </p>
        </div>

        {/* Slideshow indicator dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentImageIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info - ARBI Specific */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                Africa Restoring Bridges Initiative
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-6">
                Have questions about our programs, want to volunteer, need mental health support, 
                or want to partner with us? Our team is ready to assist you.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-3 bg-muted/20 rounded-xl">
                  <p className="text-2xl font-bold text-primary">3,950+</p>
                  <p className="text-xs text-muted-foreground">People Empowered</p>
                </div>
                <div className="text-center p-3 bg-muted/20 rounded-xl">
                  <p className="text-2xl font-bold text-primary">4+</p>
                  <p className="text-xs text-muted-foreground">Regions in North Kivu</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Address - Goma, DRC */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Our Office</h4>
                    <p className="text-muted-foreground text-sm">
                      Avenue Jacarandas, 32 D, Q. Les Volcans<br />
                      Goma, North Kivu, Democratic Republic of Congo
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm">
                      +243-971 944 496<br />
                      +243-123 456 789 (Emergency Support)
                    </p>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm">
                      sewimfuratheo@gmail.com (General Inquiries)<br />
                      partnerships@arbi.org (Partnerships)<br />
                      support@arbi.org (Support)
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 8:00 AM - 5:00 PM (CAT)<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Reach - Quick Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-3">Our Reach in North Kivu</h4>
                <div className="flex flex-wrap gap-2">
                  {["Goma", "Rutshuru", "Masisi", "Walikale", "Beni"].map((location) => (
                    <span key={location} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Send Us a Message
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                We'd love to hear from you. Fill out the form below and our team will respond within 24-48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      First Name
                    </label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Last Name
                    </label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Phone Number (Optional)
                  </label>
                  <Input type="tel" placeholder="+243 XXX XXX XXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Subject
                  </label>
                  <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="donation">Donation Questions</option>
                    <option value="volunteer">Volunteering Opportunities</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media & Press</option>
                    <option value="psychosocial">Psychosocial Support Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Your Message
                  </label>
                  <Textarea
                    placeholder="How can we help you? Please share your message here..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We typically respond within 24-48 hours. For urgent matters, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section - Quick Preview */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Our Programs</h2>
            <p className="text-muted-foreground">Transforming communities across North Kivu</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: "Healing & Peace-Building", desc: "Mental Health and Psycho-social Support" },
              { icon: Users, title: "Leadership Development", desc: "Equipping servant leaders" },
              { icon: Globe, title: "Community Development", desc: "Holistic development approaches" },
              { icon: Shield, title: "Youth Resilience", desc: "Prevention & reintegration" },
            ].map((program, idx) => (
              <div key={idx} className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <program.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{program.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Goma, DRC */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-serif font-semibold text-foreground">Find Us in Goma</h3>
            <p className="text-muted-foreground text-sm">Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, North Kivu, DRC</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card h-[400px] bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15939.704316239702!2d29.2108!3d-1.6741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c6e2b5b8e7c7e7%3A0x7e5a8b9c0d1e2f3a!2sGoma%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ARBI Office Location - Goma, DRC"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-serif font-bold text-foreground mb-4">Our Core Values</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Dedication with excellence",
              "Humanity and compassion",
              "Equality",
              "Unity in diversity",
              "Transparency",
              "Stewardship",
            ].map((value, idx) => (
              <span key={idx} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                {value}
              </span>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm italic text-muted-foreground">
              "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
            </p>
            <p className="text-xs text-primary mt-1">— Isaiah 58:12</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;