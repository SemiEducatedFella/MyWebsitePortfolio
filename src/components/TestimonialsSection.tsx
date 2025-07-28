import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The process was quick, and the result was exactly what we needed. Highly recommended.",
      author: "Sarah Johnson",
      company: "Local Bakery Owner"
    },
    {
      text: "Professional service and amazing attention to detail. Our website looks fantastic!",
      author: "Mike Chen",
      company: "Freelance Consultant"
    },
    {
      text: "Fast turnaround and excellent communication throughout the project. Very satisfied.",
      author: "Emma Davis",
      company: "Boutique Shop Owner"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;