import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, ArrowRight } from "lucide-react";
import { containerVariants, itemVariants, pulseVariants } from "@/lib/animationVariants";

const StorySection = () => {
  return (
    <section id="story" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80"
              alt="Community healing in North Kivu"
              className="rounded-3xl shadow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              variants={pulseVariants}
              animate="pulse"
            >
              <div className="flex items-center gap-4">
                <Calendar className="w-10 h-10 text-primary" />
                <div>
                  <p className="text-3xl font-bold text-foreground">14+</p>
                  <p className="text-sm text-muted-foreground">Years of Service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="w-4 h-4" />
              Africa Restoring Bridges Initiative
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Story of Healing and Restoration
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Since the 1990s, communities in North Kivu have endured the devastating 
              and ongoing impact of cycles of ethnic-based violence and trauma, 
              shaping generations with deep wounds and persistent divisions.
               Out of this long history of suffering and resilience, a vision 
               emerged—one of healed, reconciled, and thriving communities where 
               broken relationships could be restored and peace made possible.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              In response to this lived reality, ARBI was founded to help rebuild the bridges 
              that violence had broken. Rooted in a commitment to healing and restoration,
               the initiative was born as a faith-driven and community-centered response 
               to pain, carrying a vision that transformation is possible even in 
               the most affected contexts.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
             Today, ARBI has grown into a comprehensive organization working
              across the territories of Goma, Nyiragongo, Rutshuru, Masisi, and 
              Walikale in North Kivu. Its programs support holistic community healing, 
              spanning mental health, peacebuilding, leadership development, and
               community development—working toward lasting restoration and renewed hope for communities across the region.
            </motion.p>
            <motion.div
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: "3,950+", label: "People Empowered" },
                { value: "2M+", label: "People Impacted" },
                { value: "6+", label: "Partners" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center p-3 bg-muted/20 rounded-xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/programs">
                <Button variant="hero">
                  Explore Our Programs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;