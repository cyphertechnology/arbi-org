import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Heart,
  Home,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, cardHoverVariants, pulseVariants } from "@/lib/animationVariants";
import { useState, useEffect, useRef } from "react";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const programs = [
  {
    id: "healing-peace",
    icon: Heart,
    title: "Healing, Peace-Building & Reconciliation",
    shortTitle: "Healing & Peace",
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
    shortTitle: "Leadership Development",
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
    shortTitle: "Community Development",
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
    shortTitle: "Youth Resilience",
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
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Get current program from URL hash
  const getCurrentProgramFromHash = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const program = programs.find(p => p.id === hash);
      if (program) return program;
    }
    return programs[0];
  };

  const [currentProgram, setCurrentProgram] = useState(getCurrentProgramFromHash());

  // Update current program when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentProgram(getCurrentProgramFromHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProgramDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const scrollToProgram = (programId: string) => {
    setIsProgramDropdownOpen(false);
    const element = document.getElementById(programId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = programId;
    }
  };

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
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-sm font-bold text-white tracking-[2px] uppercase">Our Programs</span>
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
              Comprehensive initiatives designed to heal, empower, and transform communities in the DRC.
            </motion.p>

            {/* Program Dropdown Menu */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProgramDropdownOpen(!isProgramDropdownOpen)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20"
                >
                  <span className="text-sm font-medium">Jump to Program:</span>
                  <span className="text-sm font-semibold">{currentProgram.shortTitle}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProgramDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isProgramDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
                    >
                      {programs.map((program) => (
                        <button
                          key={program.id}
                          onClick={() => scrollToProgram(program.id)}
                          className={`w-full text-left px-4 py-3 transition-colors flex items-center gap-3 ${
                            currentProgram.id === program.id
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                          }`}
                        >
                          <program.icon className="w-4 h-4" />
                          <div>
                            <div className="text-sm font-medium">{program.shortTitle}</div>
                            <div className="text-xs text-muted-foreground">{program.title.substring(0, 50)}...</div>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>

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

      {/* Programs with scroll animations */}
      <motion.section 
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <motion.div 
            className="space-y-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                ref={(el) => (programRefs.current[index] = el)}
                id={program.id}
                className="grid lg:grid-cols-2 gap-16 items-center scroll-mt-24"
                variants={itemVariants}
              >
                {/* Image Side */}
                <motion.div 
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="relative group"
                    whileHover="hover"
                  >
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      className="rounded-[24px] shadow-soft w-full aspect-[4/3] object-cover"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[24px] opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <program.icon className="w-4 h-4" />
                    <span>{program.tagline}</span>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl lg:text-[40px] font-bold text-foreground leading-tight mb-4"
                    whileHover={{ scale: 1.02, color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.3 }}
                  >
                    {program.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-muted-foreground leading-relaxed mb-8 text-lg"
                    initial={{ opacity: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {program.description}
                  </motion.p>

                  {/* Key Projects */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.h4 
                      className="font-bold text-foreground mb-4 uppercase tracking-[1px] text-sm flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <program.icon className="w-4 h-4 text-primary" />
                      Key Projects
                    </motion.h4>
                    <motion.ul 
                      className="space-y-3"
                      initial="hidden"
                      whileInView="visible"
                      variants={containerVariants}
                      viewport={{ once: true }}
                    >
                      {program.projects.map((project, idx) => (
                        <motion.li 
                          key={project} 
                          className="flex items-start gap-3 text-muted-foreground text-sm group/project"
                          variants={itemVariants}
                          custom={idx}
                          whileHover={{ x: 8, color: "hsl(var(--primary))" }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          </motion.div>
                          <span>{project}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link to="/donate">
                      <Button className="w-full sm:w-auto font-medium rounded shadow-lg" size="lg">
                        Support This Program
                        <motion.span
                          className="ml-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section with Animation */}
      <motion.section 
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <motion.div
            ref={ctaRef}
            className="relative overflow-hidden min-h-[384px] flex items-center justify-center text-center px-8 py-16 rounded-[20px]"
            style={{ 
              backgroundImage: `url(${img7})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                    className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded shadow-lg"
                  >
                    Donate Now 
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded shadow-lg hover:bg-gray-100 transition-colors"
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

// Add AnimatePresence import at the top
import { AnimatePresence } from "framer-motion";

export default Programs;