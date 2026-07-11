import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, MapPin, Users, Globe, Shield, HandHeart } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardHoverVariants } from "@/lib/animationVariants";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Create custom icon
const customIcon = L.divIcon({
  className: "custom-map-marker",
  html: `<div style="color: #ea4335; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.4));">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="white"/></svg>
  </div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";


const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const OPERATIONAL_AREAS = [
  { name: "Goma", role: "Headquarters & main operational center", desc: "The heart of our operations, where we coordinate all programs and maintain our administrative offices in Avenue Jacarandas, Q. Les Volcans.", lat: -1.6585, lng: 29.2205 },
  { name: "Rutshuru", role: "Community Development & Peace-Building", desc: "Running active community development and peace-building programs to address ethnic tensions and strengthen social cohesion.", lat: -1.1833, lng: 29.4500 },
  { name: "Masisi", role: "Psychosocial Support & Advocacy", desc: "Providing mental health, psychosocial support, and advocacy for vulnerable populations affected by ongoing conflict.", lat: -1.4000, lng: 28.8000 },
  { name: "Walikale", role: "Environmental Protection & Community Health", desc: "Environmental prevention and protection projects alongside community health initiatives for sustainable livelihoods.", lat: -1.4333, lng: 28.0667 },
  { name: "Beni", role: "Relief Operations & Community Empowerment", desc: "Relief operations paired with long-term empowerment strategies for communities impacted by humanitarian crises.", lat: 0.4911, lng: 29.4731 }
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
        
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full flex flex-col items-center justify-center text-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="flex flex-col items-center"
  >
    <motion.div
      className="flex items-center justify-center gap-3 mb-5"
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
      <span className="text-sm font-bold text-white tracking-[2px] uppercase">
        Our Presence
      </span>
      <motion.div
        className="w-8 h-0.5 bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>

    <motion.h1
      className="text-5xl md:text-6xl lg:text-[56px] font-bold text-white leading-tight max-w-4xl mt-2 mb-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      Touching Hearts <br />
      Transforming Nations
    </motion.h1>

    <motion.p
      className="text-white/80 text-lg md:text-xl max-w-2xl text-center leading-relaxed"
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
            className="text-center mb-10"
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
          
          {/* Single Map replacing the individual maps */}
          <motion.div 
            className="rounded-[24px] overflow-hidden shadow-soft border border-border bg-card p-2 sm:p-4 mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[16px] overflow-hidden w-full h-[500px] md:h-[600px] relative bg-muted z-0">
              <MapContainer 
                center={[-0.8, 29.0]} 
                zoom={7} 
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%", zIndex: 0 }}
              >
                {/* Google Maps Tile Layer to match previous map style */}
                <TileLayer
                  attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
                  url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                  subdomains={['mt0','mt1','mt2','mt3']}
                />
                {OPERATIONAL_AREAS.map((area, idx) => (
                  <Marker key={idx} position={[area.lat, area.lng]} icon={customIcon}>
                    <Popup>
                      <div className="p-1">
                        <h3 className="font-bold text-base mb-1">{area.name}</h3>
                        <p className="text-xs text-primary font-semibold mb-2">{area.role}</p>
                        <p className="text-xs text-muted-foreground">{area.desc}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
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
                className="rounded-[20px] border border-border hover:border-primary hover:shadow-lg transition-all overflow-hidden bg-card flex flex-col h-full group p-8"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div className="font-bold text-foreground text-xl">{area.name}</div>
                    </div>
                    <div className="text-primary text-xs font-bold uppercase tracking-wide mt-1">{area.role}</div>
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
                  whileHover={{ x: 10, borderColor: "hsl(var(--primary))", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-start gap-3">
                    
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

      {/* Our Locations Map Section
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
      </motion.section> */}

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

    </Layout>
  );
};

export default WhereWeWork;