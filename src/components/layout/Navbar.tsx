import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoARBI from "@/assets/LogoARBIPNG.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isPublicationsOpen, setIsPublicationsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const publicationsDropdownRef = useRef<HTMLDivElement>(null);
  const programsDropdownRef = useRef<HTMLDivElement>(null);
  const publicationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const programsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Program items for dropdown
  const programItems = [
    { name: "Healing, Peace-Building & Reconciliation", path: "/programs#healing-peace", shortName: "Healing & Peace" },
    { name: "Abundant Leadership Development", path: "/programs#leadership", shortName: "Leadership" },
    { name: "Integral Community Development", path: "/programs#community-dev", shortName: "Community Development" },
    { name: "Promoting Resilience Among Youth (PRAY)", path: "/programs#youth-resilience", shortName: "Youth Resilience" },
  ];

  useEffect(() => {
    const dark = localStorage.getItem("theme") === "dark";
    setIsDark(dark);
    if (dark) document.documentElement.classList.add("dark");
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsPublicationsOpen(false);
    setIsProgramsOpen(false);
  }, [location.pathname]);

  // Handle hover for Publications dropdown (works on all devices)
  const handlePublicationsMouseEnter = () => {
    if (publicationsTimeoutRef.current) clearTimeout(publicationsTimeoutRef.current);
    setIsPublicationsOpen(true);
  };

  const handlePublicationsMouseLeave = () => {
    publicationsTimeoutRef.current = setTimeout(() => {
      setIsPublicationsOpen(false);
    }, 150);
  };

  // Handle hover for Programs dropdown (works on all devices)
  const handleProgramsMouseEnter = () => {
    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    setIsProgramsOpen(true);
  };

  const handleProgramsMouseLeave = () => {
    programsTimeoutRef.current = setTimeout(() => {
      setIsProgramsOpen(false);
    }, 150);
  };

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (publicationsTimeoutRef.current) clearTimeout(publicationsTimeoutRef.current);
      if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Check if any program route is active
  const isProgramsActive = location.pathname === "/programs";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Programs",
      isDropdown: true,
      isProgramsDropdown: true,
      items: programItems,
    },
    { name: "Where We Work", path: "/where-we-work" },
    { name: "Partners", path: "/partners" },
    {
      name: "Publications",
      isDropdown: true,
      items: [
        { name: "News", path: "/news" },
        { name: "Events", path: "/events" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="flex items-center gap-3 group">
                <img src={LogoARBI} alt="ARBI logo" className="h-8 w-auto rounded-lg" />
                <span className="text-xl font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-primary">
                  ARBI
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path || link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {link.isDropdown ? (
                    <div 
                      className="relative"
                      ref={link.isProgramsDropdown ? programsDropdownRef : publicationsDropdownRef}
                      onMouseEnter={link.isProgramsDropdown ? handleProgramsMouseEnter : handlePublicationsMouseEnter}
                      onMouseLeave={link.isProgramsDropdown ? handleProgramsMouseLeave : handlePublicationsMouseLeave}
                    >
                      <button
                        className={`nav-link-item text-sm font-medium transition-colors duration-300 ${
                          (link.isProgramsDropdown && isProgramsActive) ||
                          (link.isProgramsDropdown && location.pathname === "/programs") ||
                          (!link.isProgramsDropdown && (location.pathname === "/news" || location.pathname === "/events"))
                            ? "text-primary"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                      >
                        {link.name}
                      </button>
                      
                      <AnimatePresence>
                        {((link.isProgramsDropdown && isProgramsOpen) || (!link.isProgramsDropdown && isPublicationsOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
                          >
                            {link.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                  if (link.isProgramsDropdown) setIsProgramsOpen(false);
                                  else setIsPublicationsOpen(false);
                                }}
                                className={`block px-4 py-3 text-sm transition-colors ${
                                  (link.isProgramsDropdown && location.pathname + location.hash === item.path) ||
                                  (!link.isProgramsDropdown && location.pathname === item.path)
                                    ? "bg-primary/10 text-primary font-medium"
                                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                                }`}
                              >
                                <div>
                                  <div className="font-medium">{item.shortName || item.name}</div>
                                  {link.isProgramsDropdown && item.name !== item.shortName && (
                                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                      {item.name}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      className={`nav-link-item nav-underline relative text-sm font-medium transition-colors duration-300 ${
                        isActive(link.path!)
                          ? "text-primary active-link"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/donate">
                  <Button variant="hero" size="default" className="py-1.5 text-sm">
                    Donate
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-1">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu - Now also supports hover for dropdowns */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-3 border-t border-border bg-card rounded-lg mt-2">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.path || link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        {link.isDropdown ? (
                          <div 
                            className="relative"
                            onMouseEnter={link.isProgramsDropdown ? handleProgramsMouseEnter : handlePublicationsMouseEnter}
                            onMouseLeave={link.isProgramsDropdown ? handleProgramsMouseLeave : handlePublicationsMouseLeave}
                          >
                            <div className="px-4 py-2 text-sm font-medium text-foreground/70 cursor-pointer">
                              {link.name}
                            </div>
                            <AnimatePresence>
                              {((link.isProgramsDropdown && isProgramsOpen) || (!link.isProgramsDropdown && isPublicationsOpen)) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="pl-6 flex flex-col gap-1 overflow-hidden"
                                >
                                  {link.items.map((item) => (
                                    <Link
                                      key={item.path}
                                      to={item.path}
                                      onClick={() => setIsOpen(false)}
                                      className={`px-4 py-2 rounded-lg transition-colors text-sm ${
                                        (link.isProgramsDropdown && location.pathname + location.hash === item.path) ||
                                        (!link.isProgramsDropdown && location.pathname === item.path)
                                          ? "bg-primary/10 text-primary font-medium"
                                          : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                                      }`}
                                    >
                                      <div>
                                        <div>{item.shortName || item.name}</div>
                                        {link.isProgramsDropdown && item.name !== item.shortName && (
                                          <div className="text-xs text-muted-foreground mt-0.5">
                                            {item.name}
                                          </div>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={link.path!}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                              isActive(link.path!)
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                            }`}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                      className="mt-3 px-4"
                    >
                      <Link to="/donate" onClick={() => setIsOpen(false)}>
                        <Button variant="hero" className="w-full py-1.5 text-sm">
                          Donate Now
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;