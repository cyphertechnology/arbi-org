import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Calendar, Award, ArrowRight, Globe, HandHeart, Shield, MapPin } from "lucide-react";
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

const teamMembers = [
  {
    name: "Dr. Mary Mosetorozoro",
    role: "Founder & Executive Director",
    bio: "With over 15 years in community development and peace-building, Dr. Mosetorozoro founded ARBI to address the deep wounds of conflict and restore hope in North Kivu.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "John Ssempala",
    role: "Programs Director",
    bio: "John brings 12 years of nonprofit experience, overseeing all healing, peace-building, and community development initiatives across North Kivu.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Grace Auma",
    role: "Community Outreach & Psychosocial Manager",
    bio: "Grace leads our mental health and psychosocial support programs, connecting with communities to provide trauma healing and reconciliation services.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Peter Okello",
    role: "Youth Resilience Coordinator",
    bio: "Peter leads our youth programs, focusing on delinquency prevention, substance abuse awareness, and reintegration pathways for vulnerable young people.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  },
];

const milestones = [
  { year: "2011", event: "ARBI founded to bring healing and peace to communities in Eastern DRC" },
  { year: "2013", event: "Launched Healing, Peace-Building & Reconciliation program in Goma" },
  { year: "2015", event: "Expanded operations to Rutshuru and Masisi territories" },
  { year: "2018", event: "Started Abundant Leadership Development program" },
  { year: "2020", event: "Launched Promoting Resilience Among Youth (PRAY) initiative" },
  { year: "2023", event: "Reached 2M+ people impacted across 4+ regions in North Kivu" },
  { year: "2024", event: "Established 6+ partner organizations for greater impact" },
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full animate-fade-in-up">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-bold text-white tracking-[2px] uppercase">About Us</span>
          </div>
          <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
            Our Story of Healing & Restoration
          </h1>
          <p className="text-white/75 text-xl max-w-xl">
            Since 2011, ARBI has been rebuilding bridges within and between communities in North Kivu, DRC.
          </p>
        </div>

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

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80"
                alt="Community healing in North Kivu"
                className="rounded-3xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card">
                <div className="flex items-center gap-4">
                  <Calendar className="w-10 h-10 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">14+</p>
                    <p className="text-sm text-muted-foreground">Years of Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Heart className="w-4 h-4" />
                Africa Restoring Bridges Initiative
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Restoring Bridges Within and Between Communities
              </h2>
              <p className="text-muted-foreground leading-relaxed">
              In 2011, Dr. Mary Mosetorozoro witnessed the devastating impact of conflict on communities in North Kivu. 
              Driven by a vision of healed, reconciled, and prosperous communities, she founded ARBI to rebuild the 
              bridges that violence had broken.
              </p>
              <p className="text-muted-foreground leading-relaxed">
              Today, we've grown into a comprehensive organization serving 4+ regions across North Kivu, 
              empowering over 3,950 people and impacting more than 2 million lives. Our programs touch every 
              aspect of community healing – from mental health and peace-building to leadership development 
              and youth resilience.
              </p>
              <div className="flex gap-4">
                <div className="text-center p-3 bg-muted/20 rounded-xl">
                  <p className="text-2xl font-bold text-primary">3,950+</p>
                  <p className="text-xs text-muted-foreground">People Empowered</p>
                </div>
                <div className="text-center p-3 bg-muted/20 rounded-xl">
                  <p className="text-2xl font-bold text-primary">2M+</p>
                  <p className="text-xs text-muted-foreground">People Impacted</p>
                </div>
                <div className="text-center p-3 bg-muted/20 rounded-xl">
                  <p className="text-2xl font-bold text-primary">6+</p>
                  <p className="text-xs text-muted-foreground">Partners</p>
                </div>
              </div>
              <Link to="/programs">
                <Button variant="hero">
                  Explore Our Programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Journey of Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Since our founding in 2011, we have worked tirelessly to bring healing and peace to communities in Eastern DRC.
            </p>
          </div>
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
                icon: Eye,
                title: "Our Vision",
                description:
                  "To see healed, reconciled, and prosperous communities living in peace in the DRC and other regions of Africa affected through violence.",
                color: "primary",
              },
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To rebuild bridges within and between affected communities through integral community-based approaches fostering inclusive cooperation, capacity building for sustainable healing, peace building, and development.",
                color: "teal",
              },
              {
                icon: Heart,
                title: "Who We Are",
                description:
                  "Restoring bridges within and between communities. Working towards healed, reconciled, and prosperous communities in the DRC.",
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

      {/* Our Reach Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Reach Across North Kivu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Making a difference across five territories in Eastern DRC
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { location: "Goma", desc: "Headquarters & main operational center", icon: MapPin },
              { location: "Rutshuru", desc: "Community development & peace-building", icon: Shield },
              { location: "Masisi", desc: "Psychosocial support & advocacy", icon: Heart },
              { location: "Walikale", desc: "Environmental protection & community health", icon: Globe },
              { location: "Beni", desc: "Relief operations & community empowerment", icon: HandHeart },
            ].map((item) => (
              <div key={item.location} className="text-center p-4 bg-card rounded-xl border border-border">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-foreground">{item.location}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
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
              Dedicated individuals working tirelessly to bring healing and restoration to communities in North Kivu.
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

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            These values guide everything we do as we work towards healed, reconciled, and prosperous communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Dedication with excellence",
              "Humanity and compassion",
              "Equality",
              "Unity in diversity",
              "Transparency",
              "Stewardship",
            ].map((value, idx) => (
              <span key={idx} className="px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We work together with like-minded organizations to maximize our impact
          </p>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {["CPA", "IICBS", "Rucher", "MICAH", "PDD"].map((partner, idx) => (
              <div key={idx} className="bg-card px-8 py-4 rounded-xl shadow-soft border border-border">
                <p className="font-bold text-foreground text-xl">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Verse */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <p className="text-xl md:text-2xl italic text-foreground max-w-3xl mx-auto">
            "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
          </p>
          <p className="text-md text-primary mt-3">— Isaiah 58:12</p>
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
              Together, we can rebuild bridges, restore hope, and create lasting peace in North Kivu and beyond.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/donate">
                <Button variant="hero" size="lg">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  <Users className="w-4 h-4 mr-2" />
                  Become a Partner
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