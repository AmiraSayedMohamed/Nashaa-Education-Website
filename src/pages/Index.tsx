import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import TrialForm from "@/components/TrialForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Programs />
      <Features />
      <TrialForm />
    </div>
  );
};

export default Index;
