import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Coins, Shield, Zap, Globe, Code2 } from "lucide-react";
import wordpressPlugin from "@/assets/wordpress-plugin.jpg";

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
              <CardTitle className="text-xl">Payment Rails</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• USDFC token payments</li>
                <li>• Smart contract escrow</li>
                <li>• Automatic creator payouts</li>
                <li>• Transparent fee structure</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-card border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <CardHeader className="text-center pb-4">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <CardTitle className="text-xl">NFT Access Control</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• Time-limited access passes</li>
                <li>• Transferable access rights</li>
                <li>• Wallet-based authentication</li>
                <li>• Proof of purchase verification</li>
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

          <Card className="p-6 shadow-card border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <CardHeader className="text-center pb-4">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">MCP Server</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>• SQL query interface (AlaSQL)</li>
                <li>• In-memory data merging</li>
                <li>• Multiple export formats</li>
                <li>• Concurrent query support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* WordPress Plugin Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">WordPress Plugin</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our intuitive WordPress plugin makes it easy for content creators to start monetizing their data without any technical expertise.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span>No-code configuration interface</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span>Automated public/private data splitting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span>Real-time revenue tracking dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span>Secure wallet integration</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src={wordpressPlugin} 
              alt="WordPress plugin dashboard showing data export and monetization settings"
              className="w-full rounded-lg shadow-card border border-border"
            />
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
              <h4 className="font-semibold text-network mb-2">On-chain Registry</h4>
              <p className="text-sm text-muted-foreground">Smart contracts and NFT access control</p>
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