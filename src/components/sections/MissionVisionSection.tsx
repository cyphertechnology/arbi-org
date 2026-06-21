import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

import visionImg from "@/assets/vision.png";
import missionImg from "@/assets/mission.png";
import whoWeAreImg from "@/assets/who we are.png";

const items = [
  {
    title: "Our Vision",
    description:
      "To see healed, reconciled, and flourishing communities living in peace across the Democratic Republic of the Congo and other violence-affected regions of Africa through holistic transformation.",
    image: visionImg,
    accent: "#2563eb",
  },
  {
    title: "Our Mission",
    description:
      "To rebuild bridges within and between affected communities through an integral, community-based approach that promotes inclusive cooperation, strengthens local capacities, and advances sustainable healing, peacebuilding, and development.",
    image: missionImg,
    accent: "#0d9488",
  },
  {
    title: "Who We Are",
    description:
      "Restoring bridges within and between communities. Working towards healed, reconciled, and prosperous communities in the DRC.",
    image: whoWeAreImg,
    accent: "#e11d48",
  },
];

const MissionVisionSection = () => {
  return (
    <section id="mission-vision" className="py-20 scroll-mt-20">
      <style dangerouslySetInnerHTML={{ __html: `
        .mv-flip-wrapper {
          perspective: 1200px;
          height: 360px;
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

      <div className="container mx-auto px-4">
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

                {/* ─── FRONT: Clean card — image + title ─────────────────── */}
                <div className="mv-flip-face bg-card border border-border shadow-soft">
                  <div className="h-full flex flex-col items-center justify-center px-8 gap-6">
                    {/* Illustration image — displayed cleanly, no overlay */}
                    <div className="w-40 h-40 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain drop-shadow-sm"
                        draggable={false}
                      />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        {item.title}
                      </h3>
                      {/* Thin accent line */}
                      <div
                        className="mt-2 mx-auto h-[2px] w-10 rounded-full opacity-70"
                        style={{ background: item.accent }}
                      />
                    </div>
                  </div>
                </div>

                {/* ─── BACK: Text only — no image ───────────────────────── */}
                <div
                  className="mv-flip-back mv-flip-face bg-card border shadow-card"
                  style={{ borderColor: `${item.accent}30` }}
                >
                  {/* Accent stripe at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[1.25rem]"
                    style={{ background: item.accent }}
                  />

                  <div className="h-full flex flex-col items-center justify-center px-8 text-center gap-5">
                    {/* Small dot icon */}
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: item.accent }}
                    />

                    {/* Title */}
                    <h3
                      className="text-xl font-serif font-semibold"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </h3>

                    {/* Description — pure text, no image */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection;