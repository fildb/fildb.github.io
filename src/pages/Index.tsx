import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import TechnologyStack from "@/components/TechnologyStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <TechnologyStack />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
