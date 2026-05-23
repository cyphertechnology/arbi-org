import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    // Compute navbar height dynamically if possible
    const nav = document.querySelector("nav");
    const navHeight = nav ? (nav as HTMLElement).offsetHeight : 64; // Changed from 80 to 64

    // If there's a hash (anchor), scroll to the element adjusted by nav height
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      const el = document.getElementById(id);
      if (el) {
        // Use element's document position minus the nav height
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        window.scrollTo({ top, left: 0, behavior: "smooth" });
        // Ensure final exact position (non-smooth) in case of browser differences
        setTimeout(() => window.scrollTo(0, top), 300);
        return;
      }
    }

    // No hash: scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main> {/* Changed from pt-24 to pt-16 */}
      <Footer />
    </div>
  );
};

export default Layout;