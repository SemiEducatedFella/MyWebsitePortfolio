import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Start? Let's Build Your Website.
          </h2>
          <p className="text-xl text-muted-foreground">
            Fill out the form below, and I'll get back to you with next steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Start Your Project
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              
              <div>
                <Label htmlFor="business">Business/Project Type</Label>
                <Input id="business" placeholder="Restaurant, consulting, e-commerce, etc." />
              </div>
              
              <div>
                <Label htmlFor="message">Tell me about your project</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe what you need, any specific features, timeline, etc."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                Start Your Project
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">myers.makarenkov@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">+1 (945) 265-5233</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Response Time
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond to project inquiries within 24 hours. 
                  For urgent requests, feel free to call directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;