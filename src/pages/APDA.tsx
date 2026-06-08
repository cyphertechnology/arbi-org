import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Building2,
  Sprout,
  HeartPulse,
  Cpu,
  Leaf,
  Palette,
  BookOpen,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";
import { useState, useEffect } from "react";
import { programs } from "@/data/programs";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/21.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/19.jpg";
import img7 from "@/assets/7.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const apdaProgram = programs.find((p) => p.id === "apda")!;

const APDA_INSTITUTIONS = [
  {
    icon: BookOpen,
    title: "School of Peace, Governance and Leadership",
    description:
      "Focused on peacebuilding, mediation, human rights, and accountable governance.",
  },
  {
    icon: Wrench,
    title: "Technical and Vocational Training Center",
    description:
      "Providing practical skills for employment and entrepreneurship.",
  },
  {
    icon: Sprout,
    title: "Agricultural Innovation and Food Security Institute",
    description: "Promoting sustainable agriculture and rural development.",
  },
  {
    icon: Building2,
    title: "Women and Youth Empowerment Center",
    description:
      "Supporting entrepreneurship, leadership, and social inclusion.",
  },
  {
    icon: HeartPulse,
    title: "Health and Trauma Healing Center",
    description:
      "Addressing physical and psychological recovery from conflict.",
  },
  {
    icon: Cpu,
    title: "Center for Science, Technology and Innovation",
    description: "Preparing youth for the digital economy.",
  },
  {
    icon: Leaf,
    title: "Environmental and Natural Resource Institute",
    description:
      "Advancing conservation and sustainable resource management.",
  },
  {
    icon: Palette,
    title: "Cultural and Arts Center",
    description:
      "Promoting identity, unity, creativity, and healing through culture.",
  },
];

const APDA = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <motion.section
        className="relative min-h-[520px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/programs#apda"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Programs
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-bold text-white tracking-[2px] uppercase">
                Program 6
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <GraduationCap className="w-4 h-4" />
              Special Initiative
            </div>

            <h1 className="text-4xl lg:text-[56px] font-bold text-white leading-tight max-w-[800px] mb-6">
              Africa Peace and Development Academy (APDA)
            </h1>

            <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
              A proposed multidisciplinary institution dedicated to advancing peacebuilding,
              ethical leadership, education, economic empowerment, and sustainable development
              in North Kivu Province, Democratic Republic of Congo.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={apdaProgram.image}
                alt="Africa Peace and Development Academy"
                className="rounded-[24px] shadow-soft w-full aspect-[4/3] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                APDA envisions transforming a region affected by conflict and instability into a
                center for learning, innovation, entrepreneurship, reconciliation, and regional
                cooperation.
              </p>
              <p>
                Rooted in the principle of integral development, APDA seeks to promote the holistic
                growth of individuals and communities by strengthening education, livelihoods, social
                cohesion, health, environmental stewardship, and civic responsibility. The academy
                aims to equip young people, women, community leaders, and vulnerable populations with
                the skills, knowledge, and opportunities needed to build resilient and
                self-sustaining communities.
              </p>
              <p>
                Supported by modern infrastructure including research facilities, student housing,
                renewable energy systems, clean water services, and innovation hubs, APDA aims to
                serve as a model for community transformation and sustainable development across
                the region.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-[40px] font-bold text-foreground mb-4">
              APDA&apos;s Proposed Institutions
            </h2>
            <p className="text-muted-foreground max-w-3xl text-lg">
              Eight specialized centers designed to address the full spectrum of community needs —
              from peace and governance to technology, health, and culture.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {APDA_INSTITUTIONS.map((institution) => (
              <motion.div
                key={institution.title}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <institution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground leading-snug">
                  {institution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {institution.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <motion.div
            className="relative overflow-hidden min-h-[320px] flex items-center justify-center text-center px-8 py-16 rounded-[20px]"
            style={{
              backgroundImage: `url(${img7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Partner with us to bring APDA to life
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Join ARBI in building a transformative academy that will equip the next generation
                of peacebuilders and community leaders in North Kivu.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="font-medium">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                  >
                    Support APDA
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default APDA;
