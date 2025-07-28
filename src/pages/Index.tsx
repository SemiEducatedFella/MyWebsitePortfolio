import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="process">
        <ProcessSection />
      </section>
      
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;