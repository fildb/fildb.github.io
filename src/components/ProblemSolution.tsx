import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Shield, Zap } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Problem Content Creators Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While AI companies profit from scraping content, creators lose visitors and revenue with no compensation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="p-6 shadow-card border-destructive/20 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <CardHeader className="text-center pb-4">
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <CardTitle className="text-xl">No Compensation for Scraping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                LLM applications present summarized content to users while data owners lose visitors and potential revenue
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-destructive/20 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <CardHeader className="text-center pb-4">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-xl">High Server Loads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                AI crawlers consume massive bandwidth - some users report 30TB+ monthly usage from bot traffic alone
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-destructive/20 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <CardHeader className="text-center pb-4">
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <CardTitle className="text-xl">No Control Over Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Content owners must choose between blocking AI entirely or having their data scraped without permission
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decentralized marketplace that creates fair value exchange between content creators and AI companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 shadow-card bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <CardHeader className="text-center pb-4">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Direct Monetization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-sm">
                Earn revenue from your content through transparent blockchain payments
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <CardHeader className="text-center pb-4">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-lg">Data Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-sm">
                Choose what data to share, set pricing, and control access with NFT passes
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card bg-gradient-to-br from-network/10 to-network/5 border-network/20 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-network rounded-lg mx-auto mb-4 animate-glow"></div>
              <CardTitle className="text-lg">Blockchain Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-sm">
                Immutable proof of licensing and transparent payment distribution
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card bg-gradient-to-br from-data/10 to-data/5 border-data/20 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <CardHeader className="text-center pb-4">
              <Zap className="w-12 h-12 text-data mx-auto mb-4" />
              <CardTitle className="text-lg">Easy Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-sm">
                Simple WordPress plugin setup with no technical expertise required
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;