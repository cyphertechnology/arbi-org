import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Calendar, Award, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Mary Nakamya",
    role: "Founder & Executive Director",
    bio: "With over 15 years in community development, Dr. Nakamya founded arbi to address the educational needs of underprivileged children.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "John Ssempala",
    role: "Programs Director",
    bio: "John brings 10 years of nonprofit experience, overseeing all educational and home support initiatives.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Grace Auma",
    role: "Community Outreach Manager",
    bio: "Grace connects with local communities, building partnerships that extend our reach and impact.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Peter Okello",
    role: "Health Programs Coordinator",
    bio: "Peter leads our blood donation drives and health initiatives, saving countless lives in our community.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  },
];

const milestones = [
  { year: "2015", event: "arbi org established with 50 children in the program" },
  { year: "2017", event: "Launched Home Support Program reaching 200 families" },
  { year: "2019", event: "Started Blood Donation Program with first community drive" },
  { year: "2021", event: "Expanded to 5 districts, serving 1,500+ children" },
  { year: "2023", event: "Reached milestone of 2,500 children supported annually" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-fade-in-up">
              Our Story of <span>Compassion</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:100ms]">
              Born from a deep desire to see every child thrive, arbi org has been 
              transforming lives since 2015. What started as a small initiative to help 
              50 children access education has grown into a comprehensive support system 
              for thousands of families.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80"
                alt="Children learning together"
                className="rounded-3xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card">
                <div className="flex items-center gap-4">
                  <Calendar className="w-10 h-10 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">9+</p>
                    <p className="text-sm text-muted-foreground">Years of Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                How It All Began
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In 2015, Dr. Mary Nakamya witnessed firsthand the struggles of children 
                in her community who couldn't afford school fees. Driven by compassion 
                and a vision for change, she started arbi org in her living room.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've grown into a full-fledged organization with dedicated staff, 
                hundreds of volunteers, and programs that touch every aspect of a child's 
                life – from education and nutrition to mental health and community support.
              </p>
              <Link to="/programs">
                <Button variant="hero">
                  Explore Our Programs
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-sm text-primary font-semibold mb-1">{milestone.year}</p>
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide holistic support to underprivileged children and families through education, healthcare, and community development programs, ensuring every child has the opportunity to thrive.",
                color: "primary",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "A world where every child, regardless of their circumstances, has access to quality education, healthcare, and the support they need to reach their full potential.",
                color: "teal",
              },
              {
                icon: Heart,
                title: "Core Purpose",
                description:
                  "To create lasting, transformational change by empowering communities with resources, knowledge, and compassionate support that builds resilience and hope.",
                color: "gold",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    item.color === "primary"
                      ? "bg-primary/10"
                      : item.color === "teal"
                      ? "bg-teal/10"
                      : "bg-gold/10"
                  }`}
                >
                  <item.icon
                    className={`w-8 h-8 ${
                      item.color === "primary"
                        ? "text-primary"
                        : item.color === "teal"
                        ? "text-teal"
                        : "text-gold"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals working tirelessly to bring hope and change to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Together, we can reach more children, support more families, and create 
              lasting change in our communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/get-involved">
                <Button variant="hero" size="lg">
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="outline" size="lg">
                  <Users className="w-4 h-4" />
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
