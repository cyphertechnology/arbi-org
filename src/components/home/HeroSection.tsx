import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import KidsImage from "@/assets/kids7.jpg";
import { ArrowRight, Heart, Users, Droplets } from "lucide-react";

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
              <Heart className="w-4 h-4" fill="currentColor" />
              <span>Together we make a difference</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-in-up [animation-delay:100ms]">
              Uplifting Children,{" "}
              <span>Empowering Communities</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-in-up [animation-delay:200ms]">
              arbi org is dedicated to transforming lives through education, 
              healthcare, and community support. Join us in creating a brighter future 
              for children and families in need.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:300ms]">
              <Link to="/get-involved">
                <Button className="text-white" size="xl">
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="hero-outline" size="xl">
                  Volunteer
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in-up [animation-delay:400ms]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">75+</p>
                  <p className="text-sm text-muted-foreground">Children Supported</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-cta flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary-foreground" fill="currentColor" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Active Volunteers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1,200+</p>
                  <p className="text-sm text-muted-foreground">Blood Units Collected</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] animate-fade-in-up [animation-delay:200ms]">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-card">
              <img
                src={KidsImage}
                alt="Children smiling and playing together"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" /> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
