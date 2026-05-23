import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoARBI from "@/assets/LogoARBIPNG.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const dark = localStorage.getItem("theme") === "dark";
    setIsDark(dark);
    if (dark) document.documentElement.classList.add("dark");
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false); // also close menu when hiding
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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Where We Work", path: "/where-we-work" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <style>{`
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileMenuOpen {
          from { opacity: 0; transform: translateY(-6px) scaleY(0.97); }
          to   { opacity: 1; transform: translateY(0)  scaleY(1); }
        }
        .nav-link-item {
          animation: navSlideDown 0.4s ease both;
        }
        .mobile-menu-enter {
          animation: mobileMenuOpen 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
          transform-origin: top center;
        }
        /* Sliding underline on hover */
        .nav-underline::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(var(--primary));
          border-radius: 9999px;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-underline:hover::after { width: 100%; }
        .nav-underline.active-link::after { width: 100%; }

        /* Mobile link slide-in stagger */
        .mobile-link {
          opacity: 0;
          transform: translateX(-10px);
          animation: mobileLinkIn 0.3s ease forwards;
        }
        @keyframes mobileLinkIn {
          to { opacity: 1; transform: translateX(0); }
        }

        /* Icon spin on theme toggle */
        .theme-icon {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
        }
        .theme-icon:hover { transform: rotate(30deg) scale(1.15); }

        /* Hamburger icon morph */
        .menu-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease;
        }
        .menu-icon-enter { animation: iconPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        @keyframes iconPop {
          from { transform: scale(0.6) rotate(-90deg); opacity: 0; }
          to   { transform: scale(1)   rotate(0deg);   opacity: 1; }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo with ARBI Text */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              style={{ transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={LogoARBI} alt="ARBI logo" className="h-8 w-auto rounded-lg" />
              <span className="text-xl font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-primary">
                ARBI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link-item nav-underline relative text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary active-link"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors duration-300 overflow-hidden"
                aria-label="Toggle theme"
              >
                <span key={isDark ? "sun" : "moon"} className="theme-icon menu-icon-enter block">
                  {isDark
                    ? <Sun className="w-4 h-4 text-foreground" />
                    : <Moon className="w-4 h-4 text-foreground" />
                  }
                </span>
              </button>
              <Link to="/donate">
                <Button
                  variant="hero"
                  size="default"
                  className="py-1.5 text-sm transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95"
                >
                  Donate
                </Button>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                <span key={isDark ? "sun-m" : "moon-m"} className="theme-icon menu-icon-enter block">
                  {isDark
                    ? <Sun className="w-4 h-4 text-foreground" />
                    : <Moon className="w-4 h-4 text-foreground" />
                  }
                </span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Toggle menu"
              >
                <span key={isOpen ? "close" : "open"} className="menu-icon-enter block">
                  {isOpen
                    ? <X className="w-5 h-5 text-foreground" />
                    : <Menu className="w-5 h-5 text-foreground" />
                  }
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mobile-menu-enter lg:hidden py-3 border-t border-border bg-background rounded-lg mt-2">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`mobile-link px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(link.path)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                    }`}
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-3 px-4 mobile-link" style={{ animationDelay: `${navLinks.length * 45}ms` }}>
                  <Link to="/donate" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="hero"
                      className="w-full py-1.5 text-sm transition-all duration-300 active:scale-95"
                    >
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;