import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ExternalLink, Eye } from "lucide-react";
import antoniosImage from "@/assets/antonios-restaurant.png";
import moveProImage from "@/assets/dallas-move-pros.png"; 
import premierDriveImage from "@/assets/dallas-premier-drive.png";

// Import your images


const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

 const projects = [
  {
    title: "Antonio's Dallas Essence",
    description: "A sophisticated restaurant website featuring authentic Italian dining experience with online reservations.",
    detailedDescription: "A premium restaurant website showcasing Antonio's authentic Italian cuisine and Dallas location. Features elegant design, menu highlights, online reservation system, location details, and customer testimonials. Perfect example of how to establish a strong online presence for fine dining establishments.",
    image: antoniosImage,
    liveUrl: "https://antonios-dallas-essence.lovable.app",
    features: ["Online Reservation System", "Interactive Menu Display", "Location & Hours", "Customer Reviews", "Mobile Responsive Design", "Contact Information"],
  },
  {
    title: "Dallas Move Pros",
    description: "Professional moving company website with service details, quotes, and customer testimonials.",
    detailedDescription: "A comprehensive moving company website designed to build trust and generate leads. Features service offerings, quote request system, customer testimonials, service areas, and professional team showcase. Optimized for local SEO and conversion.",
    image: moveProImage,
    liveUrl: "https://dallas-move-pros.lovable.app/",
    features: ["Quote Request System", "Service Area Coverage", "Customer Testimonials", "Team Showcase", "Service Packages", "Contact & Booking"],
  },
  {
    title: "Dallas Premier Drive",
    description: "Auto repair shop website showcasing services, expertise, and customer satisfaction.",
    detailedDescription: "A professional auto repair website that builds credibility and attracts local customers. Features comprehensive service listings, expert team information, customer reviews, location details, and appointment booking. Designed to convert visitors into customers.",
    image: premierDriveImage,
    liveUrl: "https://dallas-premier-drive.lovable.app",
    features: ["Service Listings", "Expert Team Profiles", "Customer Reviews", "Appointment Booking", "Location & Hours", "Warranty Information"],
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
              Live Website Examples
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
              View Live Examples
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
                {selectedProject ? selectedProject.title : "Live Website Examples"}
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
                    
                    {/* Two Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 flex-1"
                      >
                        <Eye className="mr-2 w-4 h-4" />
                        View Live Site
                      </Button>
                      <Button 
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 flex-1"
                      >
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Get One Like This
                      </Button>
                    </div>
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
                  Click on any project below to see details and visit the live website
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer group"
                    >
                      <div className="overflow-hidden rounded-lg mb-4 relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          LIVE
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90"
                    >
                      Start Your Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Click any project above to view the live website
                  </p>
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