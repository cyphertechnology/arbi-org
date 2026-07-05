import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

const CTASection = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-card rounded-3xl p-8 md:p-12 shadow-card text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 text-primary mx-auto mb-6"
          >
            <Award className="w-full h-full" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Join Our Mission
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Together, we can rebuild bridges, restore hope, and create lasting peace in North Kivu and beyond.
          </p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/donate">
                <Button variant="hero" size="lg">
                  {/* <Heart className="w-4 h-4 mr-2" /> */}
                  Donate Now
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  <Users className="w-4 h-4 mr-2" />
                  Become a Partner
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;