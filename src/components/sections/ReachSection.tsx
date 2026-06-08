import { motion } from "framer-motion";
import { MapPin, Shield, Heart, Globe, HandHeart } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

const ReachSection = () => {
  const locations = [
    { location: "Goma", desc: "Headquarters & main operational center", icon: MapPin },
    { location: "Rutshuru", desc: "Community development & peace-building", icon: Shield },
    { location: "Masisi", desc: "Psychosocial support & advocacy", icon: Heart },
    { location: "Walikale", desc: "Environmental protection & community health", icon: Globe },
    { location: "Beni", desc: "Relief operations & community empowerment", icon: HandHeart },
  ];

  return (
    <motion.section
      className="py-20 bg-muted/20"
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Reach Across North Kivu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Making a difference across five territories in Eastern DRC
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {locations.map((item) => (
            <motion.div
              key={item.location}
              className="text-center p-4 bg-card rounded-xl border border-border"
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: "var(--primary-color)" }}
            >
              <motion.div whileHover={{ rotate: 20, scale: 1.2 }} transition={{ duration: 0.3 }}>
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              </motion.div>
              <h4 className="font-bold text-foreground">{item.location}</h4>
              <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ReachSection;