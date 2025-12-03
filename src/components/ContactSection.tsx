import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, ExternalLink, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Start? Let's Build Your Website.
          </h2>
          <p className="text-xl text-muted-foreground">
            Click the button below to fill out my project form and get started.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Project Form Link */}
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Start Your Project
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Ready to get started? Fill out my detailed project form to tell me about your needs, 
                timeline, and vision. I'll review your submission and get back to you within 24 hours 
                with next steps and a custom quote.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">What to expect:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Quick 5-minute form</li>
                  <li>• Custom quote within 24 hours</li>
                  <li>• No obligation to proceed</li>
                </ul>
              </div>
              
              <Button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6" 
                size="lg"
              >
                Start Your Project Form
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Opens in a new tab • Takes about 5 minutes to complete
              </p>
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
                      <div className="text-muted-foreground">benyamyers@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">+1 (945) 265-5233</div>
                    </div>
                  </div>

                  {/* Instagram Link */}
                  <div className="flex items-center">
                    <div className="w-6 h-6 mr-4 flex items-center justify-center">
                      <div className="w-5 h-5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded flex items-center justify-center">
                        <Instagram className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Instagram</div>
                      <a 
                        href="https://www.instagram.com/masterdude191919/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @masterdude191919
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    Prefer to email directly? Just mention "Website Project" in the subject line.
                  </p>
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