// CTASection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Be Part of the Restoration
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed italic">
            "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
          </p>
          <p className="text-md text-primary-foreground/80 mb-10 leading-relaxed">
            Your support can help rebuild bridges within and between communities. Whether through donations, 
            partnerships, or volunteering, every contribution brings us closer to healed, reconciled, 
            and prosperous communities in the DRC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Make a Donation
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                <HandHeart className="w-5 h-5 mr-2" />
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;