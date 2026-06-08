import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const ScriptureSection = () => {
  return (
    <motion.section
      className="py-16 bg-primary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl italic text-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
        </motion.p>
        <motion.p
          className="text-md text-primary mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          — Isaiah 58:12
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ScriptureSection;