// ImpactSection.tsx
import { useEffect, useState, useRef } from "react";
import { Users, MapPin, HandHeart, Calendar, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: 3950,
    suffix: "+",
    label: "People Empowered",
    color: "primary",
  },
  {
    icon: Globe,
    value: 2000000,
    suffix: "+",
    label: "People Impacted",
    color: "teal",
    format: true,
  },
  {
    icon: MapPin,
    value: 4,
    suffix: "+",
    label: "Areas Reached",
    color: "gold",
  },
  {
    icon: HandHeart,
    value: 6,
    suffix: "+",
    label: "Partner Organizations",
    color: "destructive",
  },
];

const Counter = ({ value, suffix, format }: { value: number; suffix: string; format?: boolean }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = format && count >= 1000000 ? (count / 1000000).toFixed(1) + "M" : count.toLocaleString();

  return (
    <motion.div
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-foreground"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.span animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        {displayValue}
        {!format && suffix}
      </motion.span>
    </motion.div>
  );
};

const ImpactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="py-20 bg-gradient-hero relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our Impact Across North Kivu
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Since our founding in 2011, we have worked tirelessly to bring healing and peace to communities 
            torn apart by violence in Eastern DRC.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm shadow-soft"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                  stat.color === "primary"
                    ? "bg-primary/10"
                    : stat.color === "teal"
                    ? "bg-teal/10"
                    : stat.color === "gold"
                    ? "bg-gold/10"
                    : "bg-destructive/10"
                }`}
                whileHover={{ rotate: 20, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon
                  className={`w-8 h-8 ${
                    stat.color === "primary"
                      ? "text-primary"
                      : stat.color === "teal"
                      ? "text-teal"
                      : stat.color === "gold"
                      ? "text-gold"
                      : "text-destructive"
                  }`}
                />
              </motion.div>
              <Counter value={stat.value} suffix={stat.suffix} format={stat.format} />
              <motion.p
                className="text-muted-foreground mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-soft">
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Calendar className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-foreground font-semibold">2011</span>
            <span className="text-muted-foreground">Year Founded</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;