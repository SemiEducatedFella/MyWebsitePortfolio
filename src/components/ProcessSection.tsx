import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Send, Eye, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Tell me what you need",
      description: "Fill out the quick project form."
    },
    {
      icon: Send,
      title: "Get a clear proposal",
      description: "I'll send you pricing and timeline details."
    },
    {
      icon: Eye,
      title: "Review your first draft",
      description: "You can request changes before launch."
    },
    {
      icon: Rocket,
      title: "Go live",
      description: "Your website is published and ready for your customers."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center shadow-soft hover:shadow-elegant transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;