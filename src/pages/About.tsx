import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Calendar, Award, ArrowRight, Globe, HandHeart, Shield, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardHoverVariants, pulseVariants } from "@/lib/animationVariants";

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
        
        <motion.div
          className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full"
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
            <motion.div className="w-8 h-0.5 bg-primary" layoutId="accent-line" />
            <span className="text-sm font-bold text-white tracking-[2px] uppercase">About Us</span>
          </motion.div>
          <motion.h1
            className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Story of Healing & Restoration
          </motion.h1>
          <motion.p
            className="text-white/75 text-xl max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Since 2011, ARBI has been rebuilding bridges within and between communities in North Kivu, DRC.
          </motion.p>
        </motion.div>

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
                backgroundColor: index === currentImageIndex ? "var(--primary-color)" : "rgba(255, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80"
                alt="Community healing in North Kivu"
                className="rounded-3xl shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                variants={pulseVariants}
                animate="pulse"
              >
                <div className="flex items-center gap-4">
                  <Calendar className="w-10 h-10 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">14+</p>
                    <p className="text-sm text-muted-foreground">Years of Service</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Heart className="w-4 h-4" />
                Africa Restoring Bridges Initiative
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-serif font-bold text-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Restoring Bridges Within and Between Communities
              </motion.h2>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
              In 2011, Dr. Mary Mosetorozoro witnessed the devastating impact of conflict on communities in North Kivu. 
              Driven by a vision of healed, reconciled, and prosperous communities, she founded ARBI to rebuild the 
              bridges that violence had broken.
              </motion.p>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
              Today, we've grown into a comprehensive organization serving 4+ regions across North Kivu, 
              empowering over 3,950 people and impacting more than 2 million lives. Our programs touch every 
              aspect of community healing – from mental health and peace-building to leadership development 
              and youth resilience.
              </motion.p>
              <motion.div
                className="flex gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { value: "3,950+", label: "People Empowered" },
                  { value: "2M+", label: "People Impacted" },
                  { value: "6+", label: "Partners" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center p-3 bg-muted/20 rounded-xl"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                  >
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/programs">
                  <Button variant="hero">
                    Explore Our Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <motion.section
        className="py-20 bg-secondary/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Journey of Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Since our founding in 2011, we have worked tirelessly to bring healing and peace to communities in Eastern DRC.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex gap-6 mb-8 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {milestone.year.slice(2)}
                  </motion.div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-sm text-primary font-semibold mb-1">{milestone.year}</p>
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Purpose */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
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
              <motion.div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-shadow"
                variants={itemVariants}
                whileHover="hover"
                custom={cardHoverVariants}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    item.color === "primary"
                      ? "bg-primary/10"
                      : item.color === "teal"
                        ? "bg-teal/10"
                        : "bg-gold/10"
                    }`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
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
                </motion.div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Reach Section */}
      <motion.section
        className="py-20 bg-muted/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our Reach Across North Kivu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Making a difference across five territories in Eastern DRC
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { location: "Goma", desc: "Headquarters & main operational center", icon: MapPin },
              { location: "Rutshuru", desc: "Community development & peace-building", icon: Shield },
              { location: "Masisi", desc: "Psychosocial support & advocacy", icon: Heart },
              { location: "Walikale", desc: "Environmental protection & community health", icon: Globe },
              { location: "Beni", desc: "Relief operations & community empowerment", icon: HandHeart },
            ].map((item) => (
              <motion.div
                key={item.location}
                className="text-center p-4 bg-card rounded-xl border border-border"
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: "var(--primary-color)" }}
              >
                <motion.div whileHover={{ rotate: 20, scale: 1.2 }} transition={{ duration: 0.3 }}>
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                </motion.div>
                <h4 className="font-bold text-foreground">{item.location}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 bg-gradient-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated individuals working tirelessly to bring healing and restoration to communities in North Kivu.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div className="aspect-square overflow-hidden" whileHover={{ scale: 1.05 }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            These values guide everything we do as we work towards healed, reconciled, and prosperous communities.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              "Dedication with excellence",
              "Humanity and compassion",
              "Equality",
              "Unity in diversity",
              "Transparency",
              "Stewardship",
            ].map((value, idx) => (
              <motion.span
                key={idx}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium"
                variants={itemVariants}
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary-color)", color: "var(--primary-foreground)" }}
              >
                {value}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        className="py-20 bg-secondary/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Partners
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We work together with like-minded organizations to maximize our impact
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {["CPA", "IICBS", "Rucher", "MICAH", "PDD"].map((partner, idx) => (
              <motion.div
                key={idx}
                className="bg-card px-8 py-4 rounded-xl shadow-soft border border-border"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              >
                <p className="font-bold text-foreground text-xl">{partner}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Scripture Verse */}
      <motion.section
        className="py-16 bg-primary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
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

      {/* CTA */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 text-primary mx-auto mb-6"
            >
              <Award className="w-full h-full" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Together, we can rebuild bridges, restore hope, and create lasting peace in North Kivu and beyond.
            </p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/donate">
                  <Button variant="hero" size="lg">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    <Users className="w-4 h-4 mr-2" />
                    Become a Partner
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default About;