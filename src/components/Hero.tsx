import { ArrowDown, Bot, Laptop, User, Sparkles, Brain, Code2 } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("free-trial-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero px-4 py-32 md:py-20 overflow-hidden">
      {/* Fun Decorative Elements for Kids */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-accent/20 rounded-full animate-float blur-sm" />
      <div className="absolute top-40 left-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 right-10 w-20 h-20 bg-accent/30 rounded-full animate-float blur-sm" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 right-32 w-12 h-12 bg-secondary/25 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-10 w-28 h-28 bg-primary/20 rounded-full animate-float blur-md" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-5 w-14 h-14 bg-accent/25 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />
      
      {/* Colorful Stars/Sparkles */}
      <Sparkles className="absolute top-24 right-1/4 w-8 h-8 text-accent animate-float" style={{ animationDelay: "0.3s" }} />
      <Sparkles className="absolute bottom-24 left-1/4 w-6 h-6 text-secondary animate-float" style={{ animationDelay: "1.8s" }} />
      <Brain className="absolute top-1/4 left-1/3 w-10 h-10 text-secondary/40 animate-float" style={{ animationDelay: "1.2s" }} />
      <Code2 className="absolute bottom-1/3 right-1/3 w-12 h-12 text-accent/40 animate-float" style={{ animationDelay: "2.2s" }} />

      {/* Fun Icons Around Logo */}
      <div className="absolute top-1/3 left-1/4 animate-float" style={{ animationDelay: "0.8s" }}>
        <div className="bg-gradient-to-br from-secondary to-primary p-4 rounded-2xl shadow-2xl">
          <Bot className="w-12 h-12 text-background" />
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: "1.3s" }}>
        <div className="bg-gradient-to-br from-accent to-secondary p-4 rounded-2xl shadow-2xl">
          <Laptop className="w-12 h-12 text-background" />
        </div>
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: "1.8s" }}>
        <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl shadow-2xl">
          <User className="w-12 h-12 text-background" />
        </div>
      </div>

      {/* Logo - Larger and More Prominent */}
      <div className="animate-fade-in mb-12 relative z-10">
        <div className="relative">
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 scale-110" />
          <img 
            src={logoWhite} 
            alt="نشأ NASHA Logo" 
            className="relative w-80 md:w-[28rem] lg:w-[36rem] h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-5xl mx-auto space-y-6 animate-slide-up relative z-10">
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
        className="absolute bottom-10 animate-bounce cursor-pointer hover:scale-110 transition-transform z-10"
        aria-label="Scroll to free trial form"
      >
        <ArrowDown className="w-10 h-10 text-secondary" />
      </button>
    </section>
  );
};

export default Hero;
