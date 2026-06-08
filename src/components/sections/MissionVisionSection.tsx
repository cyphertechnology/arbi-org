import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { containerVariants, itemVariants, cardHoverVariants } from "@/lib/animationVariants";

const MissionVisionSection = () => {
  const items = [
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
  ];

  return (
    <section id="mission-vision" className="py-20 scroll-mt-20">
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
    </section>
  );
};

export default MissionVisionSection;