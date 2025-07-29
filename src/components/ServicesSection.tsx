import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const ServicesSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$200-400",
      description: "Perfect for new businesses",
      features: [
        "1 page website",
        "Mobile responsive design",
        "Basic features only",
        "Online payment: Not included",
        "Custom features: Not included",
        "Setup fee: +$40",
        "Maintenance: +$10/month"
      ]
    },
    {
      name: "Standard",
      price: "$400-600",
      description: "Most popular choice",
      features: [
        "3-5 pages",
        "Choose up to 3 features",
        "Mobile responsive design",
        "Online payment: +$150 extra",
        "Custom features: Not included",
        "Setup fee: +$40",
        "Maintenance: +$10/month"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$600-1000",
      description: "For growing businesses",
      features: [
        "6+ pages",
        "Choose any features",
        "Mobile responsive design",
        "Online payment: +$100 extra",
        "1 small custom feature included",
        "Setup fee: +$40",
        "Maintenance: +$10/month"
      ]
    }
  ];

  const scrollToContact = (planName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
      
      // Optional: Store the selected plan for the contact form
      // You can access this in your contact section with: localStorage.getItem('selectedPlan')
      localStorage.setItem('selectedPlan', planName);
    }
  };

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
                  onClick={() => scrollToContact(plan.name)}
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