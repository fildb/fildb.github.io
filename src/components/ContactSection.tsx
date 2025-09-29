import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Replace with actual API endpoint when provided
      // const response = await fetch('YOUR_API_ENDPOINT_HERE', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // For now, simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started with <span className="bg-gradient-primary bg-clip-text text-transparent">FiloDataBroker</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to monetize your content or access licensed datasets? Contact us to learn more or request early access.
          </p>
        </div>

        {/* Contact Form */}
        {/* <Card className="shadow-card animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-primary" />
              Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company / Organization</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-1"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell us about your use case or questions..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card> */}

        {/* Contact Info & Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We're here to help you get started with FiloDataBroker. Whether you're a content creator looking to monetize your data or an AI company seeking licensed datasets, we'd love to hear from you.
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="font-semibold w-20">Email:</span>
                  <span className="text-primary">fidabr@majus.org</span>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold w-20">Status:</span>
                  <span className="text-accent">Beta Program Open</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">For Content Creators</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• WordPress plugin early access</li>
                <li>• Free setup assistance</li>
                <li>• Revenue optimization consultation</li>
                <li>• Priority support during beta</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5">
            <CardHeader>
              <CardTitle className="text-xl">For AI Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• MCP server integration guide</li>
                <li>• Custom dataset requirements</li>
                <li>• Bulk licensing agreements</li>
                <li>• Technical integration support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;