import { Button } from "@/components/ui/button";
import heroNetwork from "@/assets/hero-network.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroNetwork} 
          alt="Network visualization representing blockchain data connections"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-network/20 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Monetize Your Content for the
            <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Era</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            FiloDataBroker empowers content creators to directly monetize their data for LLM training 
            and AI applications through decentralized blockchain technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border shadow-card animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto animate-glow"></div>
              <h3 className="text-lg font-semibold mb-2">For Content Creators</h3>
              <p className="text-muted-foreground">Turn your WordPress content into a revenue stream with our easy-to-use plugin</p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border shadow-card animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="w-12 h-12 bg-gradient-network rounded-lg mb-4 mx-auto animate-glow"></div>
              <h3 className="text-lg font-semibold mb-2">For AI Companies</h3>
              <p className="text-muted-foreground">Access high-quality, licensed datasets through our decentralized marketplace</p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border shadow-card animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="w-12 h-12 bg-gradient-data rounded-lg mb-4 mx-auto animate-glow"></div>
              <h3 className="text-lg font-semibold mb-2">Blockchain Powered</h3>
              <p className="text-muted-foreground">Built on Filecoin with NFT access passes and transparent payment rails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;