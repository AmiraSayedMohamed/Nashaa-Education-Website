import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import TrialForm from "@/components/TrialForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Courses />
      <Features />
      <TrialForm />
    </div>
  );
};

export default Index;
