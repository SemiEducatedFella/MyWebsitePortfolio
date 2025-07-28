import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import restaurantMockup from "@/assets/restaurant-mockup.jpg";
import freelancerMockup from "@/assets/freelancer-mockup.jpg";
import shopMockup from "@/assets/shop-mockup.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Restaurant Landing Page",
      description: "A clean one-page site with menu highlights, booking links, and a map.",
      image: restaurantMockup,
    },
    {
      title: "Freelancer Portfolio",
      description: "A modern personal brand website with contact form and service list.",
      image: freelancerMockup,
    },
    {
      title: "Local Shop Website",
      description: "Includes product gallery, customer reviews, and Google Maps integration.",
      image: shopMockup,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            View Demos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;