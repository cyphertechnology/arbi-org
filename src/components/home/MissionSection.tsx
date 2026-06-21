import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

import visionImg from "@/assets/vision.png";
import missionImg from "@/assets/mission.png";
import whoWeAreImg from "@/assets/who we are.png";

const items = [
  {
    title: "Our Vision",
    description:
      "To see healed, reconciled, and prosperous communities living in peace in the DRC and other regions of Africa affected through violence.",
    image: visionImg,
    accent: "hsl(var(--primary))",
  },
  {
    title: "Our Mission",
    description:
      "To rebuild bridges within and between affected communities through integral community-based approaches fostering inclusive cooperation, capacity building for sustainable healing, peace building, and development.",
    image: missionImg,
    accent: "hsl(var(--teal))",
  },
  {
    title: "Who We Are",
    description:
      "Restoring bridges within and between communities. Working towards healed, reconciled, and prosperous communities in the DRC.",
    image: whoWeAreImg,
    accent: "hsl(var(--gold))",
  },
];

const MissionSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <style dangerouslySetInnerHTML={{ __html: `
          .mv-flip-wrapper {
            perspective: 1200px;
            height: 380px;
          }
          .mv-flip-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
            transform-style: preserve-3d;
          }
          .mv-flip-wrapper:hover .mv-flip-inner {
            transform: rotateY(180deg);
          }
          .mv-flip-face {
            position: absolute;
            inset: 0;
            border-radius: 1.25rem;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            overflow: hidden;
          }
          .mv-flip-back {
            transform: rotateY(180deg);
          }
        `}} />

        {/* ── Section Header ─────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Restoring Bridges Within and Between Communities
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Since 2011, ARBI has worked tirelessly to bring healing and peace to
            communities torn apart by violence in Eastern DRC.
          </motion.p>
        </motion.div>

        {/* ── Flip Cards Grid ────────────────────────────────────── */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="mv-flip-wrapper"
            >
              <div className="mv-flip-inner">
                {/* ── FRONT: Image + Title ────────────────────────── */}
                <div className="mv-flip-face bg-card border border-border shadow-soft">
                  <div className="h-full flex flex-col items-center justify-center px-8 gap-6">
                    <div className="w-40 h-40 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain drop-shadow-sm"
                        draggable={false}
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <div
                        className="mt-2 mx-auto h-[2px] w-10 rounded-full opacity-70"
                        style={{ background: item.accent }}
                      />
                    </div>
                  </div>
                </div>

                {/* ── BACK: Description ───────────────────────────── */}
                <div
                  className="mv-flip-back mv-flip-face bg-card border shadow-card"
                  style={{ borderColor: `${item.accent.replace(")", " / 0.2)")}` }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[1.25rem]"
                    style={{ background: item.accent }}
                  />

                  <div className="h-full flex flex-col items-center justify-center px-8 text-center gap-5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: item.accent }}
                    />

                    <h3
                      className="text-xl font-serif font-semibold"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Scripture Quote ────────────────────────────────────── */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm italic text-muted-foreground">
            &ldquo;You will be called Repairer of Broken Walls, Restorer of
            Streets with Dwellings.&rdquo; — Isaiah 58:12
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;