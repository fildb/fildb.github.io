import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg animate-glow"></div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FiloDataBroker
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering content creators to monetize their data for the AI era through decentralized blockchain technology.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#technology" className="hover:text-foreground transition-colors">Technology</a></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">WordPress Plugin</span></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Filecoin Storage</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">NFT Access Control</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">USDFC Payments</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">MCP Server</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Documentation</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Beta Program</span></li>
              <li><span className="hover:text-foreground transition-colors cursor-pointer">Support</span></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 FiloDataBroker. Built on Filecoin blockchain technology.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;