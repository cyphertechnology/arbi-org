import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, MapPin, Users, Globe, Shield, HandHeart } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardHoverVariants } from "@/lib/animationVariants";

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

const WhereWeWork = () => {
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
      <motion.section 
        className="relative min-h-[500px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ 
          backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        
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
              <span className="text-sm font-bold text-white tracking-[2px] uppercase">Our Presence</span>
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
              Making a difference across North Kivu Province, Democratic Republic of Congo.
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

      {/* Operational Areas Section */}
      <motion.section 
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5 justify-center">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Operational Areas</span>
            </div>
            <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight max-w-xl mx-auto">
              Five areas of active operations
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              ARBI operates across five territories in North Kivu, reaching communities with healing, peace-building, and development programs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {OPERATIONAL_AREAS.map((area, idx) => (
              <motion.div 
                key={area.name} 
                className="rounded-[20px] border border-border hover:border-primary hover:shadow-lg transition-all overflow-hidden bg-card flex flex-col h-full group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="h-48 w-full relative bg-muted overflow-hidden">
                  <motion.iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(area.name + ", North Kivu, DRC")}&t=&z=10&ie=UTF8&iwloc=&output=embed`} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className="absolute inset-0"
                    title={`Map of ${area.name}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  ></motion.iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      <div className="font-bold text-foreground text-lg">{area.name}</div>
                    </div>
                    <div className="text-primary text-xs font-bold uppercase tracking-wide mt-0.5">{area.role}</div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Who We Serve Section with Parallax Background */}
      <motion.section 
        className="py-24 relative transition-all duration-1000 ease-in-out bg-fixed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ 
          backgroundImage: `url(${HERO_IMAGES[(currentImageIndex + 1) % HERO_IMAGES.length]})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-primary"></div>
                <span className="text-sm font-bold text-white tracking-[2px] uppercase">Who We Serve</span>
              </div>
              <h2 className="text-4xl lg:text-[48px] font-bold text-white leading-tight mb-6">
                Reaching the most vulnerable communities
              </h2>
              <p className="text-white/75 leading-relaxed text-lg">
                Our programs are designed to serve those most affected by conflict and violence across North Kivu, with a particular focus on those who are often overlooked or marginalized.
              </p>
              
              {/* Impact stat */}
              <motion.div 
                className="mt-8 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center p-3 bg-white/10 rounded-xl flex-1 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-primary">3,950+</p>
                  <p className="text-xs text-white/80">People Empowered</p>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-xl flex-1 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-primary">4+</p>
                  <p className="text-xs text-white/80">Regions Reached</p>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-xl flex-1 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-primary">7+</p>
                  <p className="text-xs text-white/80">Partner Organizations</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {WHO_WE_SERVE.map((group, idx) => (
                <motion.div 
                  key={group.group} 
                  className="p-5 bg-card/90 backdrop-blur-sm rounded-[16px] shadow-sm border border-white/10"
                  variants={itemVariants}
                  whileHover={{ x: 10, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                >
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-base">{group.group}</div>
                      <div className="text-muted-foreground text-sm mt-0.5">{group.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Locations Map Section */}
      <motion.section 
        className="py-24 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5 justify-center">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">Our Locations</span>
            </div>
            <h2 className="text-4xl lg:text-[48px] font-bold text-foreground leading-tight">
              Find us across North Kivu
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              We operate across multiple territories in North Kivu, with our headquarters located centrally in Goma.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-[24px] overflow-hidden shadow-soft border border-border bg-card p-2 sm:p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
            style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
                      <ArrowRight className="w-5 h-5" />
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
    </Layout>
  );
};

export default WhereWeWork;