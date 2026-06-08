import { motion } from "framer-motion";

const HistorySection = () => {
  return (
    <section id="history" className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden scroll-mt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              History of{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Africa Restoring Bridges Initiative (ARBI)
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          {/* History Content */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-foreground/80 leading-relaxed"
            >
              The Africa Restoring Bridges Initiative (ARBI) was founded in 2011 by Théophile Sewimfura, with the support of a group of passionate Christians and peace-oriented bystanders committed to peace and development in the Democratic Republic of the Congo. Emerging from lived experiences of ethnic-based violence in Masisi, eastern DRC, and shared encounters with trauma and brokenness, ARBI was born from a collective conviction that healing and restoration are possible, and that even in places marked by suffering, hope can be renewed.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-foreground/80 leading-relaxed"
            >
              ARBI is grounded in a shared belief that lasting peace and sustainable development are rooted in the restoration of relationships—with God, within communities, and across divided groups. From its earliest beginnings, it was shaped by Christian peacebuilders, community leaders, and development-minded individuals who sought to respond to cycles of violence, displacement, and social fragmentation with faith-driven action, compassion, and service.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-foreground/80 leading-relaxed"
            >
              From the outset, ARBI focused on creating safe spaces for dialogue, forgiveness, reconciliation, and healing, recognizing that true transformation begins with the restoration of dignity and relationships. The initiative embraces a holistic approach to peacebuilding—often referred to as integral transformation—addressing not only visible conflict, but also the deeper spiritual, social, cultural, and psychological wounds that sustain division.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-foreground/80 leading-relaxed"
            >
              As its work expanded, ARBI began collaborating with local leaders, churches, grassroots organizations, and regional partners to strengthen community resilience and promote inclusive pathways to peace. Its programs emphasize restoring trust, rebuilding social cohesion, and empowering communities to participate actively in their own transformation processes.
            </motion.p>

            {/* Highlighted Quote / Mission Statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative mt-10 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
            >
              <div className="absolute top-0 left-6 transform -translate-y-1/2 text-5xl text-primary/30 font-serif">
                "
              </div>
              <p className="text-foreground/90 italic leading-relaxed pl-4">
                Today, ARBI continues to serve as a bridge-building platform across the Democratic Republic of the Congo and other violence-affected regions of Africa—supporting communities in a shared journey from brokenness toward healing, from division toward unity, and from despair toward lasting peace and collective transformation.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;