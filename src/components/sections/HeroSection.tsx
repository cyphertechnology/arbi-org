import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import hero images for slideshow
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="relative min-h-[500px] flex flex-col justify-center transition-all duration-1000 ease-in-out bg-fixed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/65 transition-opacity duration-1000 ease-in-out"></div>

      <motion.div
        className="relative max-w-[1280px] mx-auto px-4 sm:px-8 py-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="w-8 h-0.5 bg-primary" layoutId="accent-line" />
          <span className="text-sm font-bold text-white tracking-[2px] uppercase">About Us</span>
        </motion.div>
        <motion.h1
          className="text-5xl lg:text-[56px] font-bold text-white leading-tight max-w-[640px] mt-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Story of Healing & Restoration
        </motion.h1>
        <motion.p
          className="text-white/75 text-xl max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Since 2011, ARBI has led transformative initiatives that foster healing, empowerment, and resilience across communities in North Kivu, DRC.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {HERO_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="rounded-full transition-all"
            animate={{
              width: index === currentImageIndex ? 32 : 8,
              height: 8,
              backgroundColor: index === currentImageIndex ? "var(--primary-color)" : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;