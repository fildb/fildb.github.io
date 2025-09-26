import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg animate-glow"></div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            FiloDataBroker
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('technology')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Technology
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;