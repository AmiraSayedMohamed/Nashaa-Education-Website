import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "ابدأ التعلم", labelEn: "Start Learning", href: "#courses" },
    { label: "من نحن", labelEn: "About Us", href: "#about" },
    { label: "الدورات", labelEn: "Courses", href: "#programs" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoWhite} 
              alt="NASHA Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="group relative px-4 py-2 text-foreground hover:text-secondary transition-colors"
              >
                <span className="block font-ar text-lg font-bold">{item.label}</span>
                <span className="block font-en text-sm text-muted-foreground group-hover:text-secondary">
                  {item.labelEn}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-border animate-fade-in">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-center py-3 px-4 rounded-xl bg-card hover:bg-muted transition-colors"
              >
                <span className="block font-ar text-lg font-bold text-foreground">{item.label}</span>
                <span className="block font-en text-sm text-muted-foreground">{item.labelEn}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
