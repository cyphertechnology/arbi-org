import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      backgroundColor: "hsl(var(--primary))",
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-2">ARBI</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Africa Restoring Bridges Initiative — Working towards healed, reconciled, and prosperous communities in the DRC.
              </p>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Where We Work", path: "/where-we-work" },
                { name: "Partners", path: "#" },
                { name: "Contact", path: "/contact" },
                { name: "Donate", path: "/donate" },
              ].map((link, idx) => (
                <motion.li key={link.path} variants={linkVariants} custom={idx}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              {[
                { Icon: MapPin, text: "Avenue Jacarandas, 32 D, Q. Les Volcans, Goma, North Kivu, DRC" },
                { Icon: Phone, text: "+243-971 944 496" },
                { Icon: Mail, text: "sewimfuratheo@gmail.com" },
              ].map(({ Icon, text }, idx) => (
                <motion.li key={idx} className="flex items-start gap-3" variants={linkVariants}>
                  <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Values */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-semibold text-foreground mb-4">Our Values</h4>
            <ul className="space-y-2">
              {[
                "Dedication with excellence",
                "Humanity and compassion",
                "Equality",
                "Unity in diversity",
                "Transparency",
                "Stewardship",
              ].map((value, idx) => (
                <motion.li
                  key={value}
                  variants={linkVariants}
                  custom={idx}
                  whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                >
                  <span className="text-muted-foreground text-sm transition-colors">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Africa Restoring Bridges Initiative. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
