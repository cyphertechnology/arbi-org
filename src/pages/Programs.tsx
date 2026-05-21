import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Home,
  Heart,
  Droplets,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Imagekid from "@/assets/kids.jpg";
import Imagekid2 from "@/assets/kids 5.jpg";
import Imagekid4 from "@/assets/kids 4.jpg";
import Blood from "@/assets/blood.jpg";

const programs = [
  {
    id: "kids-uplift",
    icon: GraduationCap,
    title: "Kids Uplift Program",
    tagline: "Education for Every Child",
    description:
      "Our flagship education program ensures that financial barriers never stand between a child and their dreams. We provide comprehensive educational support including school fees, learning materials, and uniforms.",
    color: "primary",
    image: Imagekid4,
    goals: [
      "Ensure 100% school enrollment for registered children",
      "Provide quality learning materials for academic success",
      "Support students through primary and secondary education",
    ],
    targetGroup: "Children aged 5-18 from low-income families",
    impact: "2,500+ children currently enrolled",
    howToHelp: [
      "Sponsor a child's education ($30/month)",
      "Donate school supplies",
      "Volunteer as a tutor",
    ],
  },
  {
    id: "home-support",
    icon: Home,
    title: "Home Support Program",
    tagline: "Dignity for Every Family",
    description:
      "We believe that a stable home environment is crucial for a child's development. This program provides essential support to families including food, clothing, and hygiene supplies.",
    color: "teal",
    image: Imagekid2,
    goals: [
      "Eliminate food insecurity in registered families",
      "Provide dignity through access to basic necessities",
      "Build sustainable household practices",
    ],
    targetGroup: "Families with children in our programs",
    impact: "850+ families supported monthly",
    howToHelp: [
      "Donate food or household items",
      "Support our monthly family packages",
      "Help with home improvement projects",
    ],
  },
  {
    id: "kidssupport-care",
    icon: Heart,
    title: "KidsSupport Care Initiative",
    tagline: "Nurturing Minds, Building Futures",
    description:
      "Mental health matters. Our care initiative provides psychological support, mentorship, and life skills training to help children build resilience and confidence.",
    color: "gold",
    image: Imagekid,
    goals: [
      "Provide accessible mental health support",
      "Connect every child with a mentor",
      "Build emotional intelligence and life skills",
    ],
    targetGroup: "Children and youth facing emotional challenges",
    impact: "1,200+ children in mentorship programs",
    howToHelp: [
      "Become a mentor (training provided)",
      "Support counseling sessions",
      "Sponsor life skills workshops",
    ],
  },
  {
    id: "blood-donation",
    icon: Droplets,
    title: "Health & Blood Donation Program",
    tagline: "Every Drop Saves Lives",
    description:
      "Our health initiative addresses critical blood shortages in local hospitals through regular donation drives and health awareness campaigns.",
    color: "destructive",
    image: Blood,
    goals: [
      "Organize monthly community blood drives",
      "Maintain adequate blood supply in partner hospitals",
      "Educate community on health and blood donation",
    ],
    targetGroup: "Community members aged 18-65",
    impact: "1,200+ blood units collected annually",
    howToHelp: [
      "Donate blood at our drives",
      "Volunteer at donation events",
      "Spread awareness in your community",
    ],
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span>Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:100ms]">
              Comprehensive initiatives designed to address the most pressing needs
              of children and families in our community. Each program is carefully
              crafted to create lasting, transformational impact.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-3xl shadow-card w-full aspect-[4/3] object-cover"
                    />

                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p
                    className={`text-sm font-semibold mb-2 ${program.color === "primary"
                        ? "text-primary"
                        : program.color === "teal"
                          ? "text-teal"
                          : program.color === "gold"
                            ? "text-gold"
                            : "text-destructive"
                      }`}
                  >
                    {program.tagline}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Goals */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Goals
                    </h4>
                    <ul className="space-y-2">
                      {program.goals.map((goal) => (
                        <li key={goal} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Target Group</p>
                      <p className="font-medium text-foreground">{program.targetGroup}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Impact</p>
                      <p className="font-medium text-foreground">{program.impact}</p>
                    </div>
                  </div>

                  {/* How to Help */}
                  <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      How You Can Help
                    </h4>
                    <ul className="space-y-1">
                      {program.howToHelp.map((help) => (
                        <li key={help} className="text-sm text-muted-foreground">
                          • {help}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/donate">
                    <Button variant="hero">
                      Support This Program
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Every Contribution Matters
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Whether you donate, volunteer, or spread the word, you're helping us
              create a brighter future for children in need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Get Involved Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
