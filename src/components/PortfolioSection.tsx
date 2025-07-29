import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ExternalLink } from "lucide-react";
import restaurantMockup from "@/assets/restaurant-mockup.jpg";
import freelancerMockup from "@/assets/freelancer-mockup.jpg";
import shopMockup from "@/assets/shop-mockup.jpg";

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Restaurant Landing Page",
      description: "A clean one-page site with menu highlights, booking links, and a map.",
      detailedDescription: "This restaurant website features a modern design with hero section, interactive menu display, online reservation system, customer testimonials, and integrated Google Maps for easy location finding. Perfect for establishing an online presence that drives foot traffic.",
      image: restaurantMockup,
      features: ["Online Menu Display", "Reservation System", "Google Maps Integration", "Customer Reviews", "Mobile Responsive"],
    },
    {
      title: "Freelancer Portfolio",
      description: "A modern personal brand website with contact form and service list.",
      detailedDescription: "A professional portfolio showcasing services, past work, and client testimonials. Includes a contact form, service packages, and a clean design that builds trust and converts visitors into clients.",
      image: freelancerMockup,
      features: ["Portfolio Gallery", "Service Packages", "Contact Form", "Client Testimonials", "Professional Design"],
    },
    {
      title: "Local Shop Website",
      description: "Includes product gallery, customer reviews, and Google Maps integration.",
      detailedDescription: "An e-commerce ready website for local businesses featuring product showcases, customer review system, location finder, and business information. Designed to increase local visibility and online sales.",
      image: shopMockup,
      features: ["Product Gallery", "Customer Reviews", "Location Finder", "Business Hours", "Contact Information"],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section ref={ref} className="py-20 bg-background">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft hover-scale cursor-pointer ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openModal(project)}
              >
                <CardContent className="p-0">
                  <div className="overflow-hidden rounded-t-lg relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
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
            <Button 
              onClick={() => setShowModal(true)}
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View Demos
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedProject ? selectedProject.title : "Demo Gallery"}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {selectedProject ? (
              // Single Project View
              <div className="p-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Project Details</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedProject.detailedDescription}
                    </p>
                    <Button 
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90"
                    >
                      Get Something Similar
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              // All Projects Grid View
              <div className="p-6">
                <p className="text-gray-600 mb-8 text-center">
                  Click on any project below to see more details and features
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer group"
                    >
                      <div className="overflow-hidden rounded-lg mb-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button 
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90"
                  >
                    Start Your Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;