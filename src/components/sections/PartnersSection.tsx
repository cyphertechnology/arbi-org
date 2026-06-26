import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

const partners = ["CPA", "IICBS", "Rucher", "MICAH", "PDD"];

const PartnersSection = () => {
  return (
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
          className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              className="bg-card px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-soft border border-border"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <p className="font-bold text-foreground text-lg sm:text-xl">{partner}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PartnersSection;