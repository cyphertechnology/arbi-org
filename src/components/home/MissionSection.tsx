// MissionSection.tsx
import { Target, Eye, Heart, Shield, Users, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

const MissionSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { duration: 0.3 },
    },
  };

  return (
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
            Since 2011, ARBI has worked tirelessly to bring healing and peace to communities torn apart by violence in Eastern DRC.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 ${
                  item.color === "primary"
                    ? "bg-primary/10"
                    : item.color === "teal"
                    ? "bg-teal/10"
                    : "bg-gold/10"
                }`}
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
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
              <motion.h3
                className="text-xl font-serif font-semibold text-foreground mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm italic text-muted-foreground">
            "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." — Isaiah 58:12
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionSection;