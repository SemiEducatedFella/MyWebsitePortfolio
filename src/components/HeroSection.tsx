import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Modern, Custom Websites for{" "}
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent animate-float">
            Small Businesses
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s]">
          I design fast, clean websites that help you attract more customers—built with today's best web tools and tailored to your goals.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-primary hover:bg-purple-50 text-lg px-8 py-6 rounded-full shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:0.4s] hover-scale"
        >
          Get Your Website
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;