import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, DollarSign, Download, Settings, Shield, Coins } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How FiloDataBroker Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple three-step process that connects content creators with AI companies through blockchain technology
          </p>
        </div>

        {/* For Content Creators */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">For Content Creators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative p-6 shadow-card border-primary/20 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
              <CardHeader className="text-center pb-4">
                <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Install & Configure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Install our WordPress plugin and select which content fields you want to monetize. Set up public and private data categories with ease.
                </p>
              </CardContent>
            </Card>

            <Card className="relative p-6 shadow-card border-primary/20 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
              <CardHeader className="text-center pb-4">
                <Upload className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">Upload to Filecoin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Your content is automatically uploaded to Filecoin's decentralized storage network with Proof of Data Possession for guaranteed availability.
                </p>
              </CardContent>
            </Card>

            <Card className="relative p-6 shadow-card border-primary/20 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
              <CardHeader className="text-center pb-4">
                <img src="/usdfc.png" alt="USDFC Token" className="w-12 h-12 mx-auto mb-4" />
                <CardTitle className="text-xl">Earn Revenue <span className="text-xs bg-yellow-500/20 text-yellow-600 px-2 py-1 rounded ml-2">TODO</span></CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Set your pricing and start earning USDFC tokens automatically when AI companies access your licensed content through our platform (monetization features coming soon).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visual Separator */}
        <div className="relative mb-20">
          <img 
            src="/diagram.png" 
            alt="Data flow visualization showing monetization process"
            className="w-full -max-w-2xl mx-auto rounded-lg shadow-card opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-lg"></div>
        </div>

        {/* For AI Companies */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-accent">For AI Companies & Data Consumers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative p-6 shadow-card border-accent/20 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">1</div>
              <CardHeader className="text-center pb-4">
                <Download className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">Discover Datasets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Browse our marketplace of high-quality, licensed datasets. Preview schemas and metadata before purchasing access.
                </p>
              </CardContent>
            </Card>

            <Card className="relative p-6 shadow-card border-accent/20 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">2</div>
              <CardHeader className="text-center pb-4">
                <Coins className="w-12 h-12 text-filecoin mx-auto mb-4" />
                <CardTitle className="text-xl">Purchase Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Pay with USDFC tokens using HTTP 402 protocol. Get instant access to both public datasets and premium private content.
                </p>
              </CardContent>
            </Card>

            <Card className="relative p-6 shadow-card border-accent/20 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">3</div>
              <CardHeader className="text-center pb-4">
                <Shield className="w-12 h-12 text-network mx-auto mb-4" />
                <CardTitle className="text-xl">Access & Integrate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Access datasets through our API, export to common formats, and integrate directly into your AI pipelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Banner */}
        <div className="mt-20 p-8 rounded-lg bg-gradient-primary text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Join the Future of Ethical AI Data
          </h3>
          <p className="text-primary-foreground/90 text-lg">
            Transparent • Decentralized • Fair • Secure
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;