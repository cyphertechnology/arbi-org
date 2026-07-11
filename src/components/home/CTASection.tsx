// CTASection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="py-20 bg-gradient-cta relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Be Part of the Restoration
          </motion.h2>
          <motion.p
            className="text-lg text-primary-foreground/90 mb-6 leading-relaxed italic"
            variants={itemVariants}
          >
            "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
          </motion.p>
          <motion.p
            className="text-md text-primary-foreground/80 mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Your support can help rebuild bridges within and between communities. Whether through donations, 
            partnerships, or volunteering, every contribution brings us closer to healed, reconciled, 
            and prosperous communities in the DRC.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/donate">
                <Button
                  size="xl"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mr-2"
                  >
                    {/* <Heart className="w-5 h-5" /> */}
                  </motion.div>
                  Make a Donation
                </Button>
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/contact">
                <Button
                  size="xl"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                >
                  <HandHeart className="w-5 h-5 mr-2" />
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