import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const ServicesSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      description: "Perfect for new businesses",
      features: [
        "Single page website",
        "Mobile responsive design",
        "Contact form",
        "Basic SEO setup",
        "2 weeks delivery",
        "1 month support"
      ]
    },
    {
      name: "Professional",
      price: "$1,999",
      description: "Most popular choice",
      features: [
        "Up to 5 pages",
        "Custom design",
        "Contact forms & booking",
        "Advanced SEO",
        "Google Analytics",
        "3 weeks delivery",
        "3 months support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$3,499",
      description: "For growing businesses",
      features: [
        "Up to 10 pages",
        "E-commerce ready",
        "Custom functionality",
        "Premium SEO package",
        "Performance optimization",
        "4 weeks delivery",
        "6 months support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Plans for Every Stage of Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the package that fits your needs. All sites are fully responsive, 
            mobile-ready, and easy to manage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-elegant' : 'shadow-soft'} 
                         hover:shadow-elegant transition-all duration-300 border-0`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-primary hover:bg-primary/90' 
                    : 'variant-outline border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;