import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  programs,
  getProgramColorClasses,
  type Program,
} from "@/data/programs";

const APDA_EXTENDED = `APDA envisions transforming a region affected by conflict and instability into a center for learning, innovation, entrepreneurship, reconciliation, and regional cooperation.

Rooted in the principle of integral development, APDA seeks to promote the holistic growth of individuals and communities by strengthening education, livelihoods, social cohesion, health, environmental stewardship, and civic responsibility. The academy aims to equip young people, women, community leaders, and vulnerable populations with the skills, knowledge, and opportunities needed to build resilient and self-sustaining communities.

Supported by modern infrastructure including research facilities, student housing, renewable energy systems, clean water services, and innovation hubs, APDA aims to serve as a model for community transformation and sustainable development across the region.`;

const getLabel = (id: string) => {
  if (id === "apda") return "APDA's Proposed Institutions";
  if (id === "creation-stewardship") return "Key Activities";
  return "Key Projects & Activities";
};

// ── Shared Modal ──────────────────────────────────────────────────────────────
const ProgramModal = ({
  program,
  onClose,
}: {
  program: Program;
  onClose: () => void;
}) => {
  const cc = getProgramColorClasses(program.color);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
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

        {/* Panel */}
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

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              {program.description}
            </p>

            {program.id === "apda" && (
              <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line mb-6 border-l-4 border-primary/30 pl-4 italic">
                {APDA_EXTENDED}
              </p>
            )}

            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full bg-primary" />
              <h3 className="font-bold text-foreground uppercase tracking-widest text-xs">
                {getLabel(program.id)}
              </h3>
            </div>

            <ul className="space-y-4 mb-8">
              {program.projects.map((project) => (
                <motion.li
                  key={project}
                  className="flex items-start gap-3 text-foreground/80 text-sm"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${cc.text}`} />
                  <span className="leading-relaxed">{project}</span>
                </motion.li>
              ))}
            </ul>

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

// ── Card Variants ─────────────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

// ── Section ───────────────────────────────────────────────────────────────────
const ProgramsSection = () => {
  const navigate = useNavigate();
  const [modalProgram, setModalProgram] = useState<Program | null>(null);

  const openModal = (program: Program) => {
    if (program.isSpecialPage) {
      navigate("/programs/apda");
      return;
    }
    setModalProgram(program);
  };

  return (
    <>
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                What We Do
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Six programs transforming communities. Since 2011, ARBI has run
                comprehensive initiatives designed to heal, empower, and transform
                communities across North Kivu, DRC. Click{" "}
                <strong>Read More</strong> to explore each program in full detail.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/programs">
                <Button variant="outline" className="shrink-0">
                  View All Programs
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* All 6 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, i) => {
              const cc = getProgramColorClasses(program.color);
              return (
                <motion.article
                  key={program.id}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card border border-border hover:border-primary/25 transition-all duration-300 flex flex-col"
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
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${cc.bg} ${cc.text}`}
                    >
                      {program.tagline}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cc.bg}`}
                      >
                        <program.icon className={`w-5 h-5 ${cc.text}`} />
                      </div>
                      <h3 className="font-serif font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                      {program.summary}
                    </p>

                    {/* First 2 sub-items */}
                    <ul className="space-y-1.5 mb-5">
                      {program.projects.slice(0, 2).map((proj) => (
                        <li
                          key={proj}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${cc.text}`}
                          />
                          <span className="line-clamp-1">{proj}</span>
                        </li>
                      ))}
                      {program.projects.length > 2 && (
                        <li className={`text-xs font-semibold ${cc.text}`}>
                          +{program.projects.length - 2} more…
                        </li>
                      )}
                    </ul>

                    {/* Read More */}
                    <div className="mt-auto">
                      <Button
                        variant={program.isSpecialPage ? "default" : "ghost"}
                        size="sm"
                        className={`w-full font-medium group/btn ${
                          !program.isSpecialPage
                            ? "text-primary hover:text-primary hover:bg-primary/5"
                            : ""
                        }`}
                        onClick={() => openModal(program)}
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
      </motion.section>

      {/* Modal portal */}
      {modalProgram && (
        <ProgramModal
          program={modalProgram}
          onClose={() => setModalProgram(null)}
        />
      )}
    </>
  );
};

export default ProgramsSection;
