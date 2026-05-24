// HeroSection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Users, Globe, HandHeart } from "lucide-react";
import HeroImage from "@/assets/kids 2.jpg"; // Replace with actual ARBI hero image

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in-up">
              <Heart className="w-4 h-4 fill-primary/20" />
              <span>Africa Restoring Bridges Initiative</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-in-up [animation-delay:100ms]">
              Touching{" "}
              <span className="text-primary">Hearts</span>
              <br />
              Transforming Nations
            </h1>

            <p className="text-xl text-muted-foreground italic animate-fade-in-up [animation-delay:150ms]">
              "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
            </p>
            <p className="text-md text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
              — Isaiah 58:12
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up [animation-delay:250ms]">
              Impacting Hearts — Heads — Hands. Rebuilding bridges within and between communities in the DRC and other regions of Africa affected by violence.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:300ms]">
              <Link to="/donate">
                <Button size="xl" className="shadow-lg">
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="hero-outline" size="xl">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Quick stats - ARBI specific */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in-up [animation-delay:400ms]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3,950+</p>
                  <p className="text-sm text-muted-foreground">People Empowered</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4+</p>
                  <p className="text-sm text-muted-foreground">Regions in North Kivu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">6+</p>
                  <p className="text-sm text-muted-foreground">Partner Organizations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image - Will need actual ARBI image */}
          <div className="relative lg:h-[600px] animate-fade-in-up [animation-delay:200ms]">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-card">
              <img
                src={HeroImage}
                alt="Community healing and restoration in North Kivu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;