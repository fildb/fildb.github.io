import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Coins, Shield, Zap, Globe, Code2, Network } from "lucide-react";

const TechnologyStack = () => {
  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built on Cutting-Edge <span className="bg-gradient-network bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging the best of Web3 infrastructure to create a secure, scalable, and transparent data marketplace
          </p>
        </div>

        {/* Core Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 shadow-card border-filecoin/20 bg-gradient-to-br from-filecoin/10 to-filecoin/5 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <CardHeader className="text-center pb-4">
              <Database className="w-12 h-12 text-filecoin mx-auto mb-4" />
              <CardTitle className="text-xl">Filecoin Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• PDP (Proof of Data Possession)</li>
                <li>• Decentralized hot storage</li>
                <li>• Filecoin Web Services</li>
                <li>• Synapse SDK integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <CardHeader className="text-center pb-4">
              <Coins className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">HTTP 402 Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• USDFC token payments</li>
                <li>• HTTP 402 standard integration</li>
                <li>• Automatic creator payouts</li>
                <li>• Transparent fee structure</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <CardHeader className="text-center pb-4">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-xl">Account Abstraction</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Simplified user onboarding</li>
                <li>• Gasless transactions</li>
                <li>• Web3 accessibility</li>
                <li>• Seamless crypto integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-network/20 bg-gradient-to-br from-network/10 to-network/5 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <CardHeader className="text-center pb-4">
              <Globe className="w-12 h-12 text-network mx-auto mb-4" />
              <CardTitle className="text-xl">FilCDN Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Instant data availability</li>
                <li>• HTTP 402 monetization</li>
                <li>• Global content delivery</li>
                <li>• Edge caching optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-data/20 bg-gradient-to-br from-data/10 to-data/5 animate-fade-in" style={{animationDelay: "0.5s"}}>
            <CardHeader className="text-center pb-4">
              <Code2 className="w-12 h-12 text-data mx-auto mb-4" />
              <CardTitle className="text-xl">LLMs.txt Standard</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• AI application integration</li>
                <li>• Standardized data format</li>
                <li>• Automated discovery</li>
                <li>• Schema validation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-500/5 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <CardHeader className="text-center pb-4">
              <Network className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <CardTitle className="text-xl">IPFS Protocol</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Distributed content addressing</li>
                <li>• Peer-to-peer data sharing</li>
                <li>• Immutable content hashing</li>
                <li>• Decentralized file system</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* WordPress Plugin Showcase */}
        <div id="install" className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              WordPress Plugin - <span className="bg-gradient-network bg-clip-text text-transparent">Start Monetizing Today</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your WordPress site into a data monetization powerhouse with our one-click solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Install & Activate</h4>
                    <p className="text-muted-foreground">Download and activate the plugin in seconds</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Configure Settings</h4>
                    <p className="text-muted-foreground">Set pricing and choose what data to monetize</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Start Earning</h4>
                    <p className="text-muted-foreground">Watch revenue flow in as AI companies access your data</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="https://github.com/fildb/wordpress-plugin/releases/latest/download/filo-data-broker.zip" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-colors">
                  Download Plugin
                </a>
                {/* <button className="border border-primary text-primary hover:bg-primary/10 font-semibold py-4 px-8 rounded-lg transition-colors">
                  View Documentation
                </button> */}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Rq-aPSLYfzo"
                  title="FiloDataBroker WordPress Plugin - Installation & Setup Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold text-xl">0</span>
              </div>
              <h5 className="font-semibold mb-1">Code Required</h5>
              <p className="text-sm text-muted-foreground">Pure drag-and-drop interface</p>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold text-xl">5</span>
              </div>
              <h5 className="font-semibold mb-1">Minute Setup</h5>
              <p className="text-sm text-muted-foreground">From install to earning</p>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-network/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-network font-bold text-xl">∞</span>
              </div>
              <h5 className="font-semibold mb-1">Revenue Streams <span className="text-xs bg-yellow-500/20 text-yellow-600 px-1 py-0.5 rounded ml-1">TODO</span></h5>
              <p className="text-sm text-muted-foreground">Multiple data monetization options (coming soon)</p>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <div className="w-12 h-12 bg-data/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-data font-bold text-xl">24/7</span>
              </div>
              <h5 className="font-semibold mb-1">Passive Income <span className="text-xs bg-yellow-500/20 text-yellow-600 px-1 py-0.5 rounded ml-1">TODO</span></h5>
              <p className="text-sm text-muted-foreground">Earn while you sleep (feature in development)</p>
            </div>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">System Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-muted/50 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <h4 className="font-semibold text-primary mb-2">WordPress Sites</h4>
              <p className="text-sm text-muted-foreground">Content sources with plugin integration</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h4 className="font-semibold text-accent mb-2">Filecoin Network</h4>
              <p className="text-sm text-muted-foreground">Decentralized storage and PDP verification</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <h4 className="font-semibold text-network mb-2">Payment Infrastructure</h4>
              <p className="text-sm text-muted-foreground">HTTP 402 standard with USDFC tokens</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <h4 className="font-semibold text-data mb-2">Data Consumers</h4>
              <p className="text-sm text-muted-foreground">AI companies and analytics platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;