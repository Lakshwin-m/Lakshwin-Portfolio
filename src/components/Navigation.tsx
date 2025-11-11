import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react"; // Add this import

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Determine active section based on current route
  const getActiveSection = (pathname) => {
    switch (pathname) {
      case "/":
        return "home";
      case "/about":
        return "about";
      case "/resume":
        return "resume";
      default:
        return "home";
    }
  };

  const activeSection = getActiveSection(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar only when at the hero section (top of page)
      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: "home", label: "home", href: "/" },
    { id: "about", label: "about", href: "/about" },
    {
      id: "resume",
      label: "resume",
      href: "https://drive.google.com/file/d/10FHua80D3ovBD3tTFx5_FLGMc3_ekmTp/view?usp=sharing",
      external: true, // mark as external
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/30 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="relative group">
          <div className="w-12 h-12 sm:w-14 sm:h-14">
            <span className="text-2xl font-bold text-primary">LK</span>
          </div>
        </div>

        {/* Navigation Links with Social Icons */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-sm font-medium"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link text-sm font-medium ${
                  activeSection === item.id ? "nav-link-active" : ""
                }`}
              >
                {item.label}
              </a>
            )
          )}

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/lakshwinkrishna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/lakshwin.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
