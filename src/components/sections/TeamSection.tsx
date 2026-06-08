import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animationVariants";

const teamMembers = [
  {
    name: "Dr. Mary Mosetorozoro",
    role: "Founder & Executive Director",
    bio: "With over 15 years in community development and peace-building, Dr. Mosetorozoro founded ARBI to address the deep wounds of conflict and restore hope in North Kivu.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "John Ssempala",
    role: "Programs Director",
    bio: "John brings 12 years of nonprofit experience, overseeing all healing, peace-building, and community development initiatives across North Kivu.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Grace Auma",
    role: "Community Outreach & Psychosocial Manager",
    bio: "Grace leads our mental health and psychosocial support programs, connecting with communities to provide trauma healing and reconciliation services.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Peter Okello",
    role: "Youth Resilience Coordinator",
    bio: "Peter leads our youth programs, focusing on delinquency prevention, substance abuse awareness, and reintegration pathways for vulnerable young people.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gradient-hero scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dedicated individuals working tirelessly to bring healing and restoration to communities in North Kivu.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div className="aspect-square overflow-hidden" whileHover={{ scale: 1.05 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;