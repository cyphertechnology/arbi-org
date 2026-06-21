import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import pastorKastuva from "@/assets/astor_Kastuva_Kasereka_Jean-removebg-preview.png";
import azizaNdonga from "@/assets/Aziza_Ndonga_Miriam_-removebg-preview.png";
import kivanzangaKahindo from "@/assets/Kivanzanga Kahindo Marlyne.JPG.jpeg";
import mulangiKashawa from "@/assets/Mulangi_Kashawa_Moise_Executive_Director-removebg-preview.png";
import ngendoLucien from "@/assets/Ngendo_Lucien-removebg-preview.png";
import sewimfuraTheophile from "@/assets/Sewimfura Theophile Founder.jpg.jpeg";
import bahatiGrace from "@/assets/Bahati Kazingufu Grace.png";

const teamMembers = [
  {
    name: "Sewimfura Theophile",
    role: "Founder",
    image: sewimfuraTheophile,
    bio: "Visionary leader dedicated to building peace and restoring hope across conflict-affected communities in North Kivu, DRC.",
    initials: "ST",
  },
  {
    name: "Mulangi Kashawa Moise",
    role: "Executive Director",
    image: mulangiKashawa,
    bio: "Leading strategic operations and program implementation to advance community healing and sustainable development.",
    initials: "MK",
  },
  {
    name: "Kivanzanga Kahindo Marlyne",
    role: "Head of Community Development",
    image: kivanzangaKahindo,
    bio: "Driving grassroots initiatives that empower local communities through participatory development approaches.",
    initials: "KK",
  },
  {
    name: "Bahati Kazingufu Grace",
    role: "Head of Physical & Social",
    image: bahatiGrace,
    bio: "Coordinating social and physical infrastructure projects that restore dignity and foster community well-being.",
    initials: "BK",
  },
  {
    name: "Aziza Ndonga Miriam",
    role: "Head of Leadership Development",
    image: azizaNdonga,
    bio: "Cultivating the next generation of ethical leaders through transformative training and mentorship programs.",
    initials: "AN",
  },
  {
    name: "Pastor Kastuva Kasereka Jean",
    role: "Head of Journey of Generosity",
    image: pastorKastuva,
    bio: "Inspiring a culture of generosity and reconciliation through faith-based community engagement.",
    initials: "KJ",
  },
  {
    name: "Ngendo Lucien",
    role: "Public Relations & Communication Officer",
    image: ngendoLucien,
    bio: "Amplifying the organization's voice and sharing stories of hope, healing, and transformation.",
    initials: "NL",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const TeamSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>("");

  const openLightbox = useCallback((image: string, name: string) => {
    setSelectedImage(image);
    setSelectedName(name);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    setSelectedName("");
  }, []);

  const founder = teamMembers[0];
  const rest = teamMembers.slice(1);

  return (
    <section
      id="team"
      className="relative py-24 scroll-mt-20 overflow-hidden bg-gradient-to-b from-background via-primary/[0.02] to-background"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .tm-img-wrap {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, hsl(var(--primary) / 0.06), hsl(var(--accent-blue) / 0.06));
        }
        .tm-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 8px;
          transition: transform 0.5s ease;
        }
        .tm-img-wrap:hover img {
          transform: scale(1.04);
        }
        .tm-img-overlay {
          position: absolute;
          inset: 0;
          background: hsl(var(--primary) / 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .tm-img-wrap:hover .tm-img-overlay {
          opacity: 1;
        }
        .tm-img-icon {
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 999px;
          background: hsl(var(--background) / 0.25);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transform: translateY(10px);
          transition: transform 0.35s ease;
          border: 1px solid hsl(0 0% 100% / 0.25);
          box-shadow: 0 4px 20px hsl(0 0% 0% / 0.2);
        }
        .tm-img-wrap:hover .tm-img-icon {
          transform: translateY(0);
        }
        .tm-founder-img-wrap {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .tm-founder-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 12px;
          transition: transform 0.5s ease;
        }
        .tm-founder-img-wrap:hover img {
          transform: scale(1.04);
        }
        .tm-founder-overlay {
          position: absolute;
          inset: 0;
          background: hsl(var(--primary) / 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .tm-founder-img-wrap:hover .tm-founder-overlay {
          opacity: 1;
        }
        /* Lightbox */
        .tm-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(0 0% 0% / 0.88);
          backdrop-filter: blur(12px);
          padding: 2rem;
          cursor: pointer;
        }
        .tm-lightbox-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          cursor: default;
        }
        .tm-lightbox-content img {
          max-width: min(90vw, 700px);
          max-height: 80vh;
          object-fit: contain;
          border-radius: 1rem;
          box-shadow: 0 20px 60px hsl(0 0% 0% / 0.5);
        }
        .tm-lightbox-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .tm-lightbox-close {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: hsl(var(--primary) / 0.15);
          color: white;
          border: 1px solid hsl(0 0% 100% / 0.15);
          cursor: pointer;
          transition: background 0.2s ease;
          margin-left: auto;
        }
        .tm-lightbox-close:hover {
          background: hsl(var(--primary) / 0.35);
        }
        .tm-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .tm-card:hover {
          transform: translateY(-6px);
        }
        @media (max-width: 700px) {
          .tm-founder-row {
            flex-direction: column !important;
          }
          .tm-founder-img-col {
            width: 100% !important;
            min-width: 100% !important;
            height: 300px !important;
          }
          .tm-founder-body {
            padding: 1.5rem !important;
          }
        }
      `}} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Our People
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Meet the Team Behind the Mission
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent-blue rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dedicated individuals working tirelessly to bring healing, restoration, and lasting peace to communities in North Kivu.
          </p>
        </motion.div>

        {/* Founder — featured large card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="tm-founder-row flex items-stretch bg-card border border-border/60 shadow-card rounded-[1.25rem] overflow-hidden max-w-[720px] mx-auto">
            {/* Photo side */}
            <div className="tm-founder-img-col w-[260px] min-w-[260px] h-[320px] overflow-hidden flex-shrink-0 relative bg-gradient-to-br from-primary/10 to-accent-blue/10">
              {founder.image ? (
                <>
                  <div className="tm-founder-img-wrap w-full h-full">
                    <img
                      src={founder.image}
                      alt={founder.name}
                    />
                    <div
                      className="tm-founder-overlay"
                      onClick={() => openLightbox(founder.image, founder.name)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openLightbox(founder.image, founder.name);
                        }
                      }}
                      aria-label={`View ${founder.name}`}
                    >
                      <div className="tm-img-icon">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent-blue/10 text-4xl font-bold text-primary/40">
                  {founder.initials}
                </div>
              )}
            </div>
            {/* Content side */}
            <div className="tm-founder-body p-9 flex-1 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
                {founder.role}
              </span>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                {founder.name}
              </h3>
              <div className="w-10 h-[3px] bg-gradient-to-r from-primary to-accent-blue rounded-full mb-3" />
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {founder.bio}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="text-center mb-10">
          <div className="flex items-center gap-4 max-w-[400px] mx-auto">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground/50 tracking-widest uppercase font-medium">
              Leadership
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        {/* Rest of team — grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="tm-card bg-card border border-border/60 shadow-soft hover:shadow-card rounded-2xl overflow-hidden group"
            >
              {/* Photo */}
              <div className="tm-img-wrap h-[300px]">
                {member.image ? (
                  <>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                    />
                    {/* Zoom overlay */}
                    <div
                      className="tm-img-overlay"
                      onClick={() => openLightbox(member.image, member.name)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openLightbox(member.image, member.name);
                        }
                      }}
                      aria-label={`View ${member.name}`}
                    >
                      <div className="tm-img-icon">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent-blue/10 text-3xl font-bold text-primary/30">
                    {member.initials}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 pb-6">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-2.5">
                  {member.role}
                </span>
                <h3 className="text-base font-serif font-bold text-foreground leading-tight">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-primary to-accent-blue rounded-full mx-auto" />
        </motion.div>
      </div>

      {/* ─── Lightbox Modal ─────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="tm-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedName}`}
          >
            <motion.div
              className="tm-lightbox-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] as const }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="tm-lightbox-header">
                <span className="text-white/80 text-sm font-medium">{selectedName}</span>
                <button
                  className="tm-lightbox-close"
                  onClick={closeLightbox}
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <img
                src={selectedImage}
                alt={selectedName}
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;