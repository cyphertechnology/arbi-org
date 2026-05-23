import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

import img1 from "@/assets/kids 2.jpg";
import img2 from "@/assets/kids 3.jpg";
import img3 from "@/assets/kids 4.jpg";
import img4 from "@/assets/kids 5.jpg";
import img5 from "@/assets/kids 6.jpg";
import img6 from "@/assets/kids.jpg";
import img7 from "@/assets/kids7.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const OPERATIONAL_AREAS = [
  { name: "Goma", role: "Headquarters & main operational center", desc: "The heart of our operations, where we coordinate all programs and maintain our administrative offices in Avenue Jacarandas, Q. Les Volcans." },
  { name: "Rutshuru", role: "Community Development & Peace-Building", desc: "Running active community development and peace-building programs to address ethnic tensions and strengthen social cohesion." },
  { name: "Masisi", role: "Psychosocial Support & Advocacy", desc: "Providing mental health, psychosocial support, and advocacy for vulnerable populations affected by ongoing conflict." },
  { name: "Walikale", role: "Environmental Protection & Community Health", desc: "Environmental prevention and protection projects alongside community health initiatives for sustainable livelihoods." },
  { name: "Beni", role: "Relief Operations & Community Empowerment", desc: "Relief operations paired with long-term empowerment strategies for communities impacted by humanitarian crises." }
];

const WHO_WE_SERVE = [
  { group: "Influential community leaders", desc: "Local leaders trained to be catalysts for peace and development" },
  { group: "Youth & University students", desc: "Young people equipped with resilience and leadership skills" },
  { group: "Women victims of violence", desc: "Survivors empowered through healing and livelihood programs" },
  { group: "IDPs & Refugees", desc: "Displaced persons supported with psychosocial care and reintegration" },
  { group: "Children born out of rape / orphans", desc: "Vulnerable children given dignity, care and opportunity" },
  { group: "Ex-Combatants", desc: "Former fighters supported in their journey toward peaceful reintegration" }
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const WhereWeWork = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed" 
        style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-primary"></div>
            <span className="text-sm font-bold text-white tracking-[2px] uppercase">Our Presence</span>
          </div>
          <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
            Touching Hearts Transforming Nations
          </h1>
          <p className="text-white/75 text-xl max-w-xl">
            Making a difference across Northern Kivu Province, Democratic Republic of Congo.
          </p>
        </div>
      </section>

      {/* Operational Areas */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center gap-3 mb-5 justify-center">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Operational Areas</span>
              </div>
              <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight max-w-xl mx-auto">
                Five areas of active operations
              </h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPERATIONAL_AREAS.map((area, idx) => (
              <FadeIn key={area.name} delay={idx * 150}>
                <div className="rounded-[20px] border border-border hover:border-primary hover:shadow-md transition-all overflow-hidden bg-card flex flex-col h-full">
                  <div className="h-48 w-full relative bg-muted">
                    <iframe 
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(area.name + ", North Kivu, DRC")}&t=&z=10&ie=UTF8&iwloc=&output=embed`} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade" 
                      className="absolute inset-0" 
                      title={`Map of ${area.name}`}
                    ></iframe>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="mb-4">
                      <div className="font-bold text-foreground text-lg">{area.name}</div>
                      <div className="text-primary text-xs font-bold uppercase tracking-wide mt-0.5">{area.role}</div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section 
        className="py-24 relative transition-all duration-1000 ease-in-out bg-fixed"
        style={{ backgroundImage: `url(${HERO_IMAGES[(currentImageIndex + 1) % HERO_IMAGES.length]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <span className="text-sm font-bold text-white tracking-[2px] uppercase">Who We Serve</span>
                </div>
                <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight mb-6">Reaching the most vulnerable communities</h2>
                <p className="text-white/75 leading-relaxed">Our programs are designed to serve those most affected by conflict and violence across Northern Kivu, with a particular focus on those who are often overlooked or marginalized.</p>
              </div>
            </FadeIn>
            <div className="space-y-4">
              {WHO_WE_SERVE.map((group, idx) => (
                <FadeIn key={group.group} delay={idx * 100}>
                  <div className="p-5 bg-card rounded-[16px] shadow-sm">
                    <div>
                      <div className="font-bold text-foreground text-base">{group.group}</div>
                      <div className="text-muted-foreground text-sm mt-0.5">{group.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Map */}
      <section className="py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center gap-3 mb-5 justify-center">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Our Locations</span>
              </div>
              <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight">Find us across Northern Kivu</h2>
              <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                We operate across multiple territories in Northern Kivu, with our headquarters located centrally in Goma.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="rounded-[24px] overflow-hidden shadow-soft border border-border bg-card p-2 sm:p-4">
              <div className="rounded-[16px] overflow-hidden w-full h-[400px] md:h-[500px] relative bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15939.704316239702!2d29.2108!3d-1.6741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c6e2b5b8e7c7e7%3A0x7e5a8b9c0d1e2f3a!2sGoma%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="ARBI Office Location - Goma, DRC"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <FadeIn>
            <div className="relative overflow-hidden min-h-[384px] flex items-center justify-center text-center px-8 py-16 rounded-[20px]" style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-[805px] mx-auto mb-8">
                  You can help us rebuild bridges and restore hope in the DRC
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/donate" className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity">
                    Donate Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link to="/contact" className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded hover:opacity-90 transition-opacity">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default WhereWeWork;
