import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  programs,
  getProgramColorClasses,
  type Program,
} from "@/data/programs";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/21.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/19.jpg";
import img7 from "@/assets/7.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const APDA_EXTENDED = `APDA envisions transforming a region affected by conflict and instability into a center for learning, innovation, entrepreneurship, reconciliation, and regional cooperation.

Rooted in the principle of integral development, APDA seeks to promote the holistic growth of individuals and communities by strengthening education, livelihoods, social cohesion, health, environmental stewardship, and civic responsibility. The academy aims to equip young people, women, community leaders, and vulnerable populations with the skills, knowledge, and opportunities needed to build resilient and self-sustaining communities.

Supported by modern infrastructure including research facilities, student housing, renewable energy systems, clean water services, and innovation hubs, APDA aims to serve as a model for community transformation and sustainable development across the region.`;

const getLabel = (id: string) => {
  if (id === "apda") return "APDA's Proposed Institutions";
  if (id === "creation-stewardship") return "Key Activities";
  return "Key Projects & Activities";
};

// ── Program Detail Modal ──────────────────────────────────────────────────────
const ProgramModal = ({
  program,
  onClose,
}: {
  program: Program;
  onClose: () => void;
}) => {
  const cc = getProgramColorClasses(program.color);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Panel */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-card rounded-[28px] shadow-2xl overflow-hidden flex flex-col"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hero image */}
          <div className="relative h-56 sm:h-72 shrink-0 overflow-hidden">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Tagline overlay */}
            <div className="absolute bottom-5 left-6 right-14">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-3 ${cc.bg} ${cc.text} backdrop-blur-sm`}
              >
                <program.icon className="w-3.5 h-3.5" />
                {program.tagline}
              </div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                {program.title}
              </h2>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              {program.description}
            </p>

            {/* Extra APDA block */}
            {program.id === "apda" && (
              <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line mb-6 border-l-4 border-primary/30 pl-4 italic">
                {APDA_EXTENDED}
              </p>
            )}

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-1 h-6 rounded-full ${cc.bg}`} style={{ background: "hsl(var(--primary))" }} />
              <h3 className="font-bold text-foreground uppercase tracking-widest text-xs">
                {getLabel(program.id)}
              </h3>
            </div>

            {/* Projects list */}
            <ul className="space-y-4 mb-8">
              {program.projects.map((project) => (
                <motion.li
                  key={project}
                  className="flex items-start gap-3 text-foreground/80 text-sm"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle
                    className={`w-4 h-4 mt-0.5 shrink-0 ${cc.text}`}
                  />
                  <span className="leading-relaxed">{project}</span>
                </motion.li>
              ))}
            </ul>

            {/* Footer row */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              {program.isSpecialPage ? (
                <Link to="/programs/apda" onClick={onClose}>
                  <Button variant="default" size="lg" className="font-medium">
                    Explore APDA in Full
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ) : (
                <Link to="/programs" onClick={onClose}>
                  <Button variant="outline" size="lg" className="font-medium">
                    View All Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
              <Button variant="ghost" size="lg" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Card variants ─────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const Programs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [heroIdx, setHeroIdx] = useState(0);
  const [modalProgram, setModalProgram] = useState<Program | null>(null);

  // Hero slideshow
  useEffect(() => {
    const t = setInterval(
      () => setHeroIdx((p) => (p + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  // Open modal from hash on mount (e.g. nav link /programs#baho)
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const found = programs.find((p) => p.id === hash);
      if (found && !found.isSpecialPage) {
        setModalProgram(found);
        // Clear hash so back-navigation works cleanly
        navigate("/programs", { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModal = (program: Program) => {
    if (program.isSpecialPage) {
      navigate("/programs/apda");
      return;
    }
    setModalProgram(program);
  };

  const closeModal = () => setModalProgram(null);

  return (
    <Layout>
      {/* ── HERO ── */}
      <motion.section
        className="relative min-h-[480px] flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `url(${HERO_IMAGES[heroIdx]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-bold text-white tracking-[2px] uppercase">
                Our Programs
              </span>
            </div>
            <h1 className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mb-4">
              Touching Hearts <br /> Transforming Nations
            </h1>
            <p className="text-white/75 text-xl max-w-xl">
              Six comprehensive initiatives designed to heal, empower, and
              transform communities in the DRC.
            </p>
          </motion.div>
        </div>

        {/* Slideshow dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_IMAGES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setHeroIdx(i)}
              className="rounded-full"
              animate={{
                width: i === heroIdx ? 32 : 8,
                height: 8,
                backgroundColor:
                  i === heroIdx
                    ? "hsl(var(--primary))"
                    : "rgba(255,255,255,0.45)",
              }}
              transition={{ duration: 0.3 }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </motion.section>

      {/* ── ALL 6 PROGRAM CARDS ── */}
      <section className="py-20 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-sm font-bold text-foreground tracking-[2px] uppercase">
                What We Do
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Programs & Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Since 2011, ARBI has run comprehensive initiatives designed to
              heal, empower, and transform communities across North Kivu, DRC.
              Click <strong>Read More</strong> on any program to see full
              details.
            </p>
          </motion.div>

          {/* 3×2 card grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {programs.map((prog, i) => {
              const cc = getProgramColorClasses(prog.color);
              return (
                <motion.article
                  key={prog.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-card hover:border-primary/25 transition-all duration-300 flex flex-col"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Number badge */}
                    <div
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${cc.bg} ${cc.text}`}
                    >
                      {prog.tagline}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Icon + title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cc.bg}`}
                      >
                        <prog.icon className={`w-5 h-5 ${cc.text}`} />
                      </div>
                      <h3 className="font-serif font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {prog.title}
                      </h3>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                      {prog.summary}
                    </p>

                    {/* First 2 sub-items */}
                    <ul className="space-y-1.5 mb-5">
                      {prog.projects.slice(0, 2).map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${cc.text}`}
                          />
                          <span className="line-clamp-1">{p}</span>
                        </li>
                      ))}
                      {prog.projects.length > 2 && (
                        <li className={`text-xs font-semibold ${cc.text}`}>
                          +{prog.projects.length - 2} more…
                        </li>
                      )}
                    </ul>

                    {/* Read More */}
                    <div className="mt-auto">
                      <Button
                        variant={prog.isSpecialPage ? "default" : "outline"}
                        size="sm"
                        className="w-full font-medium group/btn"
                        onClick={() => openModal(prog)}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        className="py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <motion.div
            className="relative overflow-hidden min-h-[380px] flex items-center justify-center text-center px-8 py-16 rounded-[20px]"
            style={{
              backgroundImage: `url(${img7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60"
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/donate"
                    className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded shadow-lg"
                  >
                    Donate Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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

      {/* ── Program Detail Modal ── */}
      {modalProgram && (
        <ProgramModal program={modalProgram} onClose={closeModal} />
      )}
    </Layout>
  );
};

export default Programs;
