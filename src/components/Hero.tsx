import { ArrowDown } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("free-trial-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero px-4 py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-secondary/30 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-accent/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-secondary/10 rounded-lg animate-float" style={{ animationDelay: "2s" }} />

      {/* Logo - Large and Prominent */}
      <div className="animate-fade-in mb-12">
        <img 
          src={logoWhite} 
          alt="نشأ NASHA Logo" 
          className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
        />
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-5xl mx-auto space-y-6 animate-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-ar text-foreground mb-4">
          يعني إيه <span className="text-accent">نشأ</span> ومين إحنا ؟
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-en text-secondary">
          What is <span className="text-accent">NASHA</span>?
        </h2>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToForm}
        className="absolute bottom-10 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to free trial form"
      >
        <ArrowDown className="w-10 h-10 text-secondary" />
      </button>
    </section>
  );
};

export default Hero;
