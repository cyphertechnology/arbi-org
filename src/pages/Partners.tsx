import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import img1 from "@/assets/kids 2.jpg";
import img2 from "@/assets/kids 3.jpg";
import img3 from "@/assets/kids 4.jpg";
import img4 from "@/assets/kids 5.jpg";
import img5 from "@/assets/kids 6.jpg";
import img6 from "@/assets/kids.jpg";
import img7 from "@/assets/kids7.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

import partnerCPA from "@/assets/partnerlog/cpa.jpeg";
import partnerIICBS from "@/assets/partnerlog/LogoDiapositive.svg";
import partnerRucher from "@/assets/partnerlog/rucher.png";
import partnerMicah from "@/assets/partnerlog/micah.jpg";
import partnerPDD from "@/assets/partnerlog/pdd.jpeg";
import partnerPrison from "@/assets/partnerlog/prisonfellowship.png";
import partnerWay from "@/assets/partnerlog/wayofpeace.webp";

const PARTNER_LOGOS = [
  { src: partnerCPA, alt: "CPA" },
  { src: partnerIICBS, alt: "IICBS" },
  { src: partnerRucher, alt: "Rucher" },
  { src: partnerMicah, alt: "MICAH" },
  { src: partnerPDD, alt: "PDD" },
  { src: partnerPrison, alt: "Prison Fellowship" },
  { src: partnerWay, alt: "Way of Peace" },
];

const ALL_PARTNERS = [
  {
    key: "cpa",
    img: partnerCPA,
    title: "Community Partners Alliance",
    desc: "Supporting community development and peace-building across North Kivu.",
  },
  {
    key: "iicbs",
    img: partnerIICBS,
    title: "International Institute for Community-Based Support",
    desc: "Providing expertise in psychosocial support and conflict transformation.",
  },
  {
    key: "rucher",
    img: partnerRucher,
    title: "Rucher Organization",
    desc: "Collaborating on economic empowerment and livelihoods programs.",
  },
  {
    key: "micah",
    img: partnerMicah,
    title: "MICAH Global Network",
    desc: "Faith-based partner advancing integral mission and holistic development.",
  },
  {
    key: "pdd",
    img: partnerPDD,
    title: "Program for Durable Development",
    desc: "Working together on sustainable development and environmental initiatives.",
  },
  {
    key: "prison",
    img: partnerPrison,
    title: "Prison Fellowship",
    desc: "Partnering on reconciliation and reintegration programs for ex-combatants.",
  },
  {
    key: "way",
    img: partnerWay,
    title: "Way of Peace",
    desc: "Collaborating on peace education and community healing initiatives.",
  },
];

const Partners = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // CSS marquee will handle smooth continuous sliding of logos

  return (
    <Layout>
      <main className="pt-24">
        {/* Hero */}
        <section
          className="relative min-h-[400px] flex flex-col justify-center transition-all duration-1000 ease-in-out -mt-24"
          style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out" />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-foreground" />
              <span className="text-sm font-bold text-white tracking-[2px] uppercase">Collaboration</span>
            </div>
            <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4">
              Touching Hearts Transforming Nations
            </h1>
            <p className="text-white/75 text-xl max-w-xl">Alone, we go faster. Together, we go further.</p>
          </div>
        </section>

        {/* Intro + Featured Logos */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-0.5 bg-primary" />
                  <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Our Partners</span>
                </div>
                <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight mb-6">Building a network of change-makers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">ARBI works with a diverse network of local and international partner organizations who share our vision for healed, reconciled, and prosperous communities.</p>
                <p className="text-muted-foreground leading-relaxed">Our partnerships strengthen our capacity to reach more communities and deliver more effective programs across Northern Kivu.</p>
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div className="marquee">
                    <div className="marquee-track flex items-center gap-6 py-6">
                      {PARTNER_LOGOS.map((l) => (
                        <div key={l.src} className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white rounded-[20px] border border-[#e5e5e5] p-6">
                          <img src={l.src} alt={l.alt} className="max-h-20 max-w-full object-contain" />
                        </div>
                      ))}
                      {PARTNER_LOGOS.map((l) => (
                        <div key={l.src + "-dup"} className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white rounded-[20px] border border-[#e5e5e5] p-6">
                          <img src={l.src} alt={l.alt} className="max-h-20 max-w-full object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <style>{`
                  .marquee { position: relative; }
                  .marquee-track { display: flex; width: max-content; }
                  @keyframes marqueeAnim {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .marquee-track { animation: marqueeAnim 20s linear infinite; }
                  .marquee-track > * { /* ensure no flex-basis shrinking weirdness */ flex: 0 0 auto; }
                `}</style>
              </div>
            </div>
          </div>
        </section>

        {/* All Partners */}
        <section className="py-24 relative bg-fixed" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center gap-3 mb-5 justify-center">
                <div className="w-8 h-0.5 bg-foreground" />
                <span className="text-sm font-bold text-white tracking-[2px] uppercase">All Partners</span>
              </div>
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-xl mx-auto">Our partner organizations</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_PARTNERS.map((p) => (
                <div key={p.key} className="bg-slate-950 p-8 rounded-[20px] border border-slate-800 hover:shadow-xl transition-shadow">
                  <div className="h-20 flex items-center justify-center mb-4 bg-white rounded-xl p-3 shadow-sm">
                    <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="text-sm font-medium text-white mb-1">{p.title}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
            <div className="flex items-center gap-3 mb-5 justify-center">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Join Us</span>
            </div>
            <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight max-w-xl mx-auto mt-2 mb-6">Interested in Partnership?</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">Join us in our mission to transform communities in the DRC. Whether you are an NGO, faith organization, or institution, we welcome collaboration.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="relative overflow-hidden min-h-[384px] flex items-center justify-center text-center px-8 py-16 rounded-[20px]" style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-[805px] mx-auto mb-8">You can help us rebuild bridges and restore hope in the DRC</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/donate" className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity">Donate Now <ArrowRight className="w-4 h-4" /></Link>
                  <Link to="/contact" className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded hover:opacity-90 transition-opacity">Get in Touch</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Partners;
