// HeroSection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Users, Globe, HandHeart } from "lucide-react";
import { useState, useEffect } from "react";

// Import your hero images
import img1 from "@/assets/kids 2.jpg";
import img2 from "@/assets/kids 3.jpg";
import img3 from "@/assets/kids 4.jpg";
import img4 from "@/assets/kids 5.jpg";
import img5 from "@/assets/kids 6.jpg";
import img6 from "@/assets/kids.jpg";
import img7 from "@/assets/kids7.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden transition-all duration-1000 ease-in-out bg-fixed" 
      style={{ 
        backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000 ease-in-out"></div>
      
      {/* Background decoration - removed since we have slideshow */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 my-5 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium animate-fade-in-up text-white/90">
              <Heart className="w-4 h-4 fill-white/20" />
              <span>Africa Restoring Bridges Initiative</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight animate-fade-in-up [animation-delay:100ms]">
              Touching{" "}
              <span className="text-primary">Hearts</span>
              <br />
              Transforming Nations
            </h1>

            <p className="text-xl text-white/90 italic animate-fade-in-up [animation-delay:150ms]">
              "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
            </p>
            <p className="text-md text-white/80 animate-fade-in-up [animation-delay:200ms]">
              — Isaiah 58:12
            </p>

            <p className="text-lg text-white/90 leading-relaxed max-w-lg animate-fade-in-up [animation-delay:250ms]">
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
                <Button variant="hero-outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Quick stats - ARBI specific */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in-up [animation-delay:400ms]">
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl p-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3,950+</p>
                  <p className="text-sm text-white/80">People Empowered</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl p-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4+</p>
                  <p className="text-sm text-white/80">Regions in North Kivu</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl p-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">6+</p>
                  <p className="text-sm text-white/80">Partner Organizations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - empty now since we removed the static image */}
          <div className="hidden lg:block">
            {/* This space is intentionally left empty - the slideshow is full width */}
          </div>
        </div>
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
  );
};

export default HeroSection;