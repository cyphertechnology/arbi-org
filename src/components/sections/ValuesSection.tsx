import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HandHeart, Shield, Users, Globe, Sparkles } from "lucide-react";

const values = [
  {
    title: "Reconciliation",
    description: "We are committed to restoring broken relationships and fostering unity among divided communities.",
    icon: HandHeart,
    color: "rose",
  },
  {
    title: "Human Dignity",
    description: "We uphold the inherent worth of every person and promote respect, inclusion, and justice for all.",
    icon: Shield,
    color: "blue",
  },
  {
    title: "Peacebuilding",
    description: "We actively pursue nonviolence and sustainable solutions to conflict through dialogue and cooperation.",
    icon: Users,
    color: "emerald",
  },
  {
    title: "Community Empowerment",
    description: "We believe lasting transformation is driven by communities themselves and invest in local ownership and capacity.",
    icon: Globe,
    color: "amber",
  },
  {
    title: "Holistic Transformation",
    description: "We address the spiritual, social, psychological, and structural dimensions of healing for lasting change.",
    icon: Sparkles,
    color: "purple",
  }
];

const ValuesSection = () => {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  const toggleValue = (index: number) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  return (
    <section id="values" className="py-20 scroll-mt-20 bg-gradient-to-b from-background to-secondary/20">
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
             Our Core Vafflues </span>
            
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            These values shape everything we do as we strive to foster healing, reconciliation, and prosperity throughout our communities.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className={`bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 ${
                  expandedValue === idx ? "shadow-xl" : "hover:shadow-md hover:border-primary/30"
                }`}
              >
                {/* Header - Shows only title and icon */}
                <button
                  onClick={() => toggleValue(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${value.color}/10 shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <value.icon className={`w-6 h-6 text-${value.color}`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedValue === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Expanded Content - Shows description when expanded */}
                <AnimatePresence>
                  {expandedValue === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border bg-gradient-to-br from-background to-secondary/10">
                        <div className="flex gap-4">
                          <div className={`w-1 bg-${value.color} rounded-full`} />
                          <div className="flex-1">
                            <p className="text-foreground/80 leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;