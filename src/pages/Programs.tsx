import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Home,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";

import img1 from "@/assets/kids 2.jpg";
import img2 from "@/assets/kids 3.jpg";
import img3 from "@/assets/kids 4.jpg";
import img4 from "@/assets/kids 5.jpg";
import img5 from "@/assets/kids 6.jpg";
import img6 from "@/assets/kids.jpg";
import img7 from "@/assets/kids7.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const programs = [
  {
    id: "healing-peace",
    icon: Heart,
    title: "Healing, Peace-Building & Reconciliation",
    tagline: "Program 1",
    description:
      "We facilitate genuine healing and reconciliation through empowering and working with influential leaders and community members through running Mental Health and Psycho-social Support projects and other related initiatives.",
    color: "primary",
    image: img1,
    projects: [
      "Healing the Wounds of Ethnic Conflicts (HWEC)",
      "Community Based Socio-therapy (CBS) — Niponye Nikuponye",
      "Active Bystandership Development — Sindebera",
      "Prevention of the ideology of hate, genocide and hate crimes in Africa",
      "Cultural Festival of songs and dances for peace",
      "Self-Care and Debriefing",
    ],
  },
  {
    id: "leadership",
    icon: Users,
    title: "Abundant Leadership Development",
    tagline: "Program 2",
    description:
      "Having witnessed what toxic leaders are capable of — destruction, corruption, exploitation and violence — providing communities with servant leaders having a heart for serving their fellows, promoting unity and innovating economic opportunities remains the most vital path to community transformation.",
    color: "teal",
    image: img2,
    projects: [
      "Active Bystandership Development for positive changes",
      "Servant leadership training",
      "Corruption fighting initiatives",
    ],
  },
  {
    id: "community-dev",
    icon: Home,
    title: "Integral Community Development",
    tagline: "Program 3",
    description:
      "We empower and strengthen community members as the assets, resources and strengths of their own communities, enabling them to take ownership of their development.",
    color: "gold",
    image: img3,
    projects: [
      "BAHO for Development (10-day school: ABCD, Gift that Releases)",
      "Environmental prevention, promotion and protection",
      "Community Based Tourism",
      "Pathway for generosity",
      "Women and Children's rights (advocacy)",
    ],
  },
  {
    id: "youth-resilience",
    icon: Target,
    title: "Promoting Resilience Among Youth (PRAY)",
    tagline: "Program 4",
    description:
      "The risk factors related to delinquency among youth are compounded by drug abuse, poverty, political instability, urbanization, and dysfunctional family situations. Young people are at risk not just because they may turn to substance abuse or street living, but also because they are ambitious and in danger of being exploited.",
    color: "destructive",
    image: img4,
    projects: [
      "Establish sustainable measures to prevent the incidence of delinquency",
      "Define and implement appropriate measures to respond to cases of delinquency",
      "Develop and implement a sustainable mechanism for reintegration and follow-up of former delinquents",
    ],
  },
];

const Programs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visiblePrograms, setVisiblePrograms] = useState<number[]>([]);
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = programRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1 && !visiblePrograms.includes(index)) {
              setVisiblePrograms((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "100px" }
    );

    programRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, [visiblePrograms]);

  return (
    <Layout>
      {/* Hero Section - Original transitions preserved */}
      <section 
        className="relative min-h-[400px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed" 
        style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full animate-fade-in-up">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-bold text-white tracking-[2px] uppercase">Our Work</span>
          </div>
          <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
            Touching Hearts Transforming Nations
          </h1>
          <p className="text-white/75 text-xl max-w-xl">
            Comprehensive initiatives designed to heal, empower, and transform communities in the DRC.
          </p>
        </div>
      </section>

      {/* Programs with scroll animations */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="space-y-32">
            {programs.map((program, index) => (
              <div
                key={program.id}
                ref={(el) => (programRefs.current[index] = el)}
                id={program.id}
                className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ease-out ${
                  visiblePrograms.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} transition-all duration-700 delay-300 ${
                  visiblePrograms.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}>
                  <div className="relative group">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-[24px] shadow-soft w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-[24px] transition-all duration-500"></div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} transition-all duration-700 delay-500 ${
                  visiblePrograms.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}>
                  <p className="text-sm font-bold uppercase tracking-[2px] text-muted-foreground mb-4 transition-all duration-300 hover:text-primary">
                    {program.tagline}
                  </p>
                  <h2 className="text-3xl lg:text-[40px] font-bold text-foreground leading-tight mb-4 transition-all duration-300 hover:scale-105 hover:text-primary inline-block">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                    {program.description}
                  </p>

                  {/* Key Projects */}
                  <div className="mb-8">
                    <h4 className="font-bold text-foreground mb-4 uppercase tracking-[1px] text-sm flex items-center gap-2">
                      <program.icon className="w-4 h-4 text-primary" />
                      Key Projects
                    </h4>
                    <ul className="space-y-3">
                      {program.projects.map((project, idx) => (
                        <li 
                          key={project} 
                          className="flex items-start gap-3 text-muted-foreground text-sm transition-all duration-300 hover:translate-x-2 hover:text-primary group/project"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0 transition-transform duration-300 group-hover/project:scale-110" />
                          <span className="transition-colors duration-300">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/donate">
                    <Button className="w-full sm:w-auto font-medium rounded transition-all duration-300 hover:scale-105 hover:shadow-lg group" size="lg">
                      Support This Program
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with animation */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div
            ref={ctaRef}
            className="relative overflow-hidden min-h-[384px] flex items-center justify-center text-center px-8 py-16 rounded-[20px] transition-all duration-1000 ease-out"
            style={{ 
              backgroundImage: `url(${img7})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              opacity: visiblePrograms.length === programs.length ? 1 : 0,
              transform: visiblePrograms.length === programs.length ? 'translateY(0)' : 'translateY(50px)'
            }}
          >
            <div className="absolute inset-0 bg-black/60 transition-all duration-500 group-hover:bg-black/50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-[805px] mx-auto mb-8 transition-all duration-500 hover:scale-105">
                You can help us rebuild bridges and restore hope in the DRC
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/donate" 
                  className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Donate Now 
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;