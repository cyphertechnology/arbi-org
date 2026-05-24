// ProgramsSection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, GraduationCap, ArrowRight, HandHeart, Shield } from "lucide-react";
import ProgramImage1 from "@/assets/kids 2.jpg";
import ProgramImage2 from "@/assets/kids 4.jpg";
import ProgramImage3 from "@/assets/kids 3.jpg";
import ProgramImage4 from "@/assets/kids 6.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Heart,
      title: "Healing, Peace-Building & Reconciliation",
      description:
        "Facilitating genuine healing through Mental Health and Psycho-social Support projects, empowering influential leaders and community members.",
      image: ProgramImage1,
      color: "primary",
    },
    {
      icon: Users,
      title: "Abundant Leadership Development",
      description:
        "Equipping communities with servant leaders who promote unity, innovate economic opportunities, and fight corruption.",
      image: ProgramImage2,
      color: "teal",
    },
    {
      icon: Globe,
      title: "Integral Community Development",
      description:
        "Empowering community members as assets and resources of their own communities through holistic development approaches.",
      image: ProgramImage3,
      color: "gold",
    },
    {
      icon: GraduationCap,
      title: "Promoting Resilience Among Youth",
      description:
        "Preventing delinquency, addressing substance abuse, and creating reintegration pathways for vulnerable young people.",
      image: ProgramImage4,
      color: "destructive",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Four programs transforming communities. Since 2011, ARBI has run comprehensive initiatives 
              designed to heal, empower, and transform communities across North Kivu, DRC.
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
                <h3 className="text-md font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
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