import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Heart, Droplets, ArrowRight } from "lucide-react";
import Imagekid from "@/assets/kids.jpg";
import Imagekid2 from "@/assets/kids 2.jpg";
import Imagekid4 from "@/assets/kids 4.jpg";
import Blood from "@/assets/blood.jpg";
const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Kids Uplift Program",
      description:
        "Providing school fees, books, and uniforms to ensure every child has access to quality education.",
      image: Imagekid,
      color: "primary",
    },
    {
      icon: Home,
      title: "Home Support Program",
      description:
        "Supporting families with food, clothing, and essential hygiene supplies for a dignified life.",
      image: Imagekid4,
      color: "teal",
    },
    {
      icon: Heart,
      title: "KidsSupport Care",
      description:
        "Mental health support and mentorship programs helping children build resilience and confidence.",
      image: Imagekid2,
      color: "gold",
    },
    {
      icon: Droplets,
      title: "Blood Donation Program",
      description:
        "Organizing regular blood drives to save lives and support healthcare facilities in our community.",
      image: Blood,
      color: "destructive",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive initiatives designed to address the most pressing needs of 
              children and families in our community.
            </p>
          </div>
          <Link to="/programs">
            <Button variant="outline" className="shrink-0">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              to="/programs"
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    program.color === "primary"
                      ? "bg-primary/10"
                      : program.color === "teal"
                      ? "bg-teal/10"
                      : program.color === "gold"
                      ? "bg-gold/10"
                      : "bg-destructive/10"
                  }`}
                >
                  <program.icon
                    className={`w-6 h-6 ${
                      program.color === "primary"
                        ? "text-primary"
                        : program.color === "teal"
                        ? "text-teal"
                        : program.color === "gold"
                        ? "text-gold"
                        : "text-destructive"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
