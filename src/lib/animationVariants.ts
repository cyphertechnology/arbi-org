// Animation variants for Framer Motion - reusable across all components
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const cardHoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
};

export const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const iconRotateVariants = {
  initial: { rotate: 0 },
  hover: { rotate: 15, scale: 1.2 },
};

export const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
