// ProgramsSection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, GraduationCap, ArrowRight, HandHeart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import  Healing from "@/assets/17.jpg";
import  Leadership from "@/assets/20.jpg";
import  Community from "@/assets/2.jpg";
import  Resilience from "@/assets/6.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Heart,
      title: "Healing, Peace-Building & Reconciliation",
      description:
        "Facilitating genuine healing through Mental Health and Psycho-social Support projects, empowering influential leaders and community members.",
      image: Healing,
      color: "primary",
    },
    {
      icon: Users,
      title: "Abundant Leadership Development",
      description:
        "Equipping communities with servant leaders who promote unity, innovate economic opportunities, and fight corruption.",
      image: Leadership,
      color: "teal",
    },
    {
      icon: Globe,
      title: "Integral Community Development",
      description:
        "Empowering community members as assets and resources of their own communities through holistic development approaches.",
      image: Community,
      color: "gold",
    },
    {
      icon: GraduationCap,
      title: "Promoting Resilience Among Youth",
      description:
        "Preventing delinquency, addressing substance abuse, and creating reintegration pathways for vulnerable young people.",
      image: Resilience,
      color: "destructive",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
  };

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
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Four programs transforming communities. Since 2011, ARBI has run comprehensive initiatives 
              designed to heal, empower, and transform communities across North Kivu, DRC.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/programs">
              <Button variant="outline" className="shrink-0">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              variants={cardVariants}
              whileHover="hover"
            >
              <Link
                to="/programs"
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 h-full flex flex-col"
              >
                <motion.div
                  className="aspect-[4/3] overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6 flex-1 flex flex-col">
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      program.color === "primary"
                        ? "bg-primary/10"
                        : program.color === "teal"
                        ? "bg-teal/10"
                        : program.color === "gold"
                        ? "bg-gold/10"
                        : "bg-destructive/10"
                    }`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <program.icon
                      className={`w-6 h-6 ${
                        program.color === "primary"
                          ? "text-primary"
                          : program.color === "teal"
                          ? "text-teal"
                          : program.color === "gold"
                          ? "text-gold"
                          : "text-destructive"
                      }`}
                    />
                  </motion.div>
                  <motion.h3
                    className="text-md font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {program.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed line-clamp-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {program.description}
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProgramsSection;