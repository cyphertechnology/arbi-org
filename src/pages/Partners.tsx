import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ArrowRight, Heart, Users, HandHeart, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardHoverVariants } from "@/lib/animationVariants";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";


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

  return (
    <Layout>
      <main className="pt-24">
        {/* Hero Section with Slideshow Background */}
        <motion.section
          className="relative min-h-[500px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed -mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ 
            backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out" />
          
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="w-8 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-sm font-bold text-white tracking-[2px] uppercase">Collaboration</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Touching Hearts <br />Transforming Nations
              </motion.h1>
              
              <motion.p 
                className="text-white/75 text-xl max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Alone, we go faster. Together, we go further.
              </motion.p>
            </motion.div>
          </div>

          {/* Slideshow indicator dots */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {HERO_IMAGES.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className="rounded-full transition-all"
                animate={{
                  width: index === currentImageIndex ? 32 : 8,
                  height: 8,
                  backgroundColor: index === currentImageIndex ? "hsl(var(--primary))" : "rgba(255, 255, 255, 0.5)",
                }}
                transition={{ duration: 0.3 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.section>

        {/* Intro + Featured Logos */}
        <motion.section 
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-0.5 bg-primary" />
                  <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Our Partners</span>
                </div>
                <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight mb-6">
                  Building a network of change-makers
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ARBI works with a diverse network of local and international partner organizations who share our vision for healed, reconciled, and prosperous communities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our partnerships strengthen our capacity to reach more communities and deliver more effective programs across North Kivu.
                </p>
                
                {/* Quick stats */}
                <motion.div 
                  className="flex gap-6 mt-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Users, value: "3,950+", label: "People Empowered" },
                    { icon: Globe, value: "4+", label: "Regions Reached" },
                    { icon: HandHeart, value: "7+", label: "Partners" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="text-center p-3 bg-primary/5 rounded-xl flex-1"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                    >
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Logo Marquee */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <div className="marquee">
                    <div className="marquee-track flex items-center gap-6 py-6">
                      {PARTNER_LOGOS.map((l) => (
                        <motion.div 
                          key={l.src} 
                          className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white rounded-[20px] border border-border shadow-soft"
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                        >
                          <img src={l.src} alt={l.alt} className="max-h-20 max-w-full object-contain" />
                        </motion.div>
                      ))}
                      {PARTNER_LOGOS.map((l) => (
                        <motion.div 
                          key={l.src + "-dup"} 
                          className="flex-shrink-0 w-40 h-40 flex items-center justify-center bg-white rounded-[20px] border border-border shadow-soft"
                          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                        >
                          <img src={l.src} alt={l.alt} className="max-h-20 max-w-full object-contain" />
                        </motion.div>
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
                  .marquee-track:hover { animation-play-state: paused; }
                  .marquee-track > * { flex: 0 0 auto; }
                `}</style>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* All Partners Section with Parallax Background */}
        <motion.section 
          className="py-24 relative bg-fixed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ 
            backgroundImage: `url(${img3})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5 justify-center">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-bold text-white tracking-[2px] uppercase">All Partners</span>
              </div>
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-xl mx-auto">
                Our partner organizations
              </h2>
            </motion.div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {ALL_PARTNERS.map((p, idx) => (
                <motion.div 
                  key={p.key} 
                  className="bg-white dark:bg-gray-900 p-8 rounded-[20px] border border-border shadow-soft"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="h-20 flex items-center justify-center mb-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-3 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section 
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5 justify-center">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Join Us</span>
              </div>
              <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight max-w-xl mx-auto mt-2 mb-6">
                Interested in Partnership?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Join us in our mission to transform communities in the DRC. Whether you are an NGO, faith organization, or institution, we welcome collaboration.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Us 
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <motion.div 
              className="relative overflow-hidden min-h-[384px] flex items-center justify-center text-center px-8 py-16 rounded-[20px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                backgroundImage: `url(${img4})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-black/60"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-4xl lg:text-[48px] font-bold text-white leading-tight max-w-[805px] mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  You can help us rebuild bridges and restore hope in the DRC
                </motion.h2>
                
                <motion.div 
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/donate" 
                      className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Donate Now 
                      <motion.span whileHover={{ x: 5 }}>
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      to="/contact" 
                      className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Get in Touch
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Scripture Verse Section */}
        <motion.section 
          className="py-16 bg-primary/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl italic text-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
            </motion.p>
            <motion.p 
              className="text-md text-primary mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              — Isaiah 58:12
            </motion.p>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default Partners;