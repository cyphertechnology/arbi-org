import { motion } from "framer-motion";

const milestones = [
  { 
    year: "2009", 
    event: "After fifteen years, Théophile returned to Masisi on an exploratory mission to gain a deeper understanding of the realities on the ground." 
  },
  { 
    year: "2011", 
    event: "ARBI was founded to promote healing, reconciliation, and sustainable peace within communities in eastern Democratic Republic of the Congo." 
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Journey of Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Since our founding in 2011, we have worked consistently to promote healing, reconciliation, 
            and sustainable peace within communities in eastern Democratic Republic of the Congo.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className="flex gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {milestone.year.slice(2)}
                </motion.div>
                {index < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <p className="text-sm text-primary font-semibold mb-1">{milestone.year}</p>
                <p className="text-foreground leading-relaxed">{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-lg italic text-foreground/80 leading-relaxed">
            "To envision healed, reconciled, and thriving communities living in peace across the 
            Democratic Republic of the Congo and other violence-affected regions of Africa"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;