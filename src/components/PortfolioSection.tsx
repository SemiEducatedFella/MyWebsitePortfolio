import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ExternalLink, Eye, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// Import your actual images
import antoniosImage from "@/assets/antonios-restaurant.png";
import moveProImage from "@/assets/dallas-move-pros.png"; 
import premierDriveImage from "@/assets/dallas-premier-drive.png";
import casaMexicanaImage from "@/assets/casa-mexicana.png";
import strategyBricksImage from "@/assets/strategy-bricks1.png";

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [modalView, setModalView] = useState('gallery'); // 'gallery' or 'details'

  const projects = [
    {
      title: "Antonio's Dallas Essence",
      description: "A sophisticated restaurant website featuring authentic Italian dining experience with online reservations.",
      detailedDescription: "A premium restaurant website showcasing Antonio's authentic Italian cuisine and Dallas location. Features elegant design, menu highlights, online reservation system, location details, and customer testimonials. Perfect example of how to establish a strong online presence for fine dining establishments.",
      image: antoniosImage,
      liveUrl: "https://antonios-dallas-essence.lovable.app",
      features: ["Online Reservation System", "Interactive Menu Display", "Location & Hours", "Customer Reviews", "Mobile Responsive Design", "Contact Information"],
      category: "Restaurant"
    },
    {
      title: "Dallas Move Pros",
      description: "Professional moving company website with service details, quotes, and customer testimonials.",
      detailedDescription: "A comprehensive moving company website designed to build trust and generate leads. Features service offerings, quote request system, customer testimonials, service areas, and professional team showcase. Optimized for local SEO and conversion.",
      image: moveProImage,
      liveUrl: "https://dallas-move-pros.lovable.app/",
      features: ["Quote Request System", "Service Area Coverage", "Customer Testimonials", "Team Showcase", "Service Packages", "Contact & Booking"],
      category: "Service Business"
    },
    {
      title: "Dallas Premier Drive",
      description: "Auto repair shop website showcasing services, expertise, and customer satisfaction.",
      detailedDescription: "A professional auto repair website that builds credibility and attracts local customers. Features comprehensive service listings, expert team information, customer reviews, location details, and appointment booking. Designed to convert visitors into customers.",
      image: premierDriveImage,
      liveUrl: "https://dallas-premier-drive.lovable.app",
      features: ["Service Listings", "Expert Team Profiles", "Customer Reviews", "Appointment Booking", "Location & Hours", "Warranty Information"],
      category: "Auto Services"
    },
    {
      title: "Mexican Restaurant Template",
      description: "Vibrant Mexican restaurant website with authentic design, interactive menu, and cultural elements.",
      detailedDescription: "An authentic Mexican restaurant website featuring vibrant colors, cultural design elements, interactive menu with spicy level indicators, shopping cart functionality, and immersive user experience. Showcases traditional Mexican cuisine with modern web functionality.",
      image: casaMexicanaImage,
      liveUrl: "https://mexican-restaurant-template.lovable.app/",
      features: ["Interactive Menu with Cart", "Spicy Level Indicators", "Cultural Design Elements", "Mobile Responsive", "Contact & Location", "Authentic Branding"],
      category: "Restaurant"
    },
    {
      title: "Strategy Bricks",
      description: "A Tech Startup that Transforms ideas into tangible solutions with LEGO® Serious Play® workshops.",
      detailedDescription: "LEGO® Serious Play® is a powerful facilitation approach where teams use LEGO bricks to transform ideas into tangible models. These models create a shared language that sparks solutions and builds alignment in ways traditional meetings can't.",
      image: strategyBricksImage,
      liveUrl: "https://strategy-bricks.lovable.app/",
      features: ["Product Features", "Pricing Plans", "Customer Testimonials", "Blog Section", "Contact Form", "Responsive Design"],
      category: "Tech Startup"

    }
  ];

  // Show first 3 projects initially
  const displayedProjects = projects.slice(0, 3);

  const openProjectDetails = (project) => {
    const projectIndex = projects.findIndex(p => p.title === project.title);
    setSelectedProject(project);
    setCurrentProjectIndex(projectIndex);
    setModalView('details');
    setShowModal(true);
  };

  const openGalleryModal = () => {
    setModalView('gallery');
    setCurrentProjectIndex(0);
    setSelectedProject(projects[0]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setModalView('gallery');
  };

  const navigateProject = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentProjectIndex + 1) % projects.length
      : currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1;
    
    setCurrentProjectIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  const goToProject = (index) => {
    setCurrentProjectIndex(index);
    setSelectedProject(projects[index]);
  };

  return (
    <>
      <section ref={ref} className="py-20 bg-gray-50">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Live Website Examples
            </h2>
            <p className="text-xl text-gray-600">
              Real websites I've built for clients - click to explore live sites
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openProjectDetails(project)}
              >
                <CardContent className="p-0">
                  <div className="overflow-hidden rounded-t-lg relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      LIVE
                    </div>
                    <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={openGalleryModal}
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Show More Examples
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden relative">
            
            {modalView === 'gallery' ? (
              // Gallery View - 3 Column Grid
              <>
                {/* Header */}
                <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center z-10">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Portfolio Gallery
                    </h3>
                    <div className="text-sm text-gray-500">
                      {projects.length} Projects
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Gallery Grid Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(95vh-80px)]">
                  <div className="text-center mb-8">
                    <p className="text-gray-600 text-lg">
                      Browse all my live website examples
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Click on any project to see details and visit the live website
                    </p>
                  </div>
                  
                  {/* 3 Column Grid */}
                  <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
                    {projects.map((project, index) => (
                      <div 
                        key={index}
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentProjectIndex(index);
                          setModalView('details');
                        }}
                        className="cursor-pointer group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="overflow-hidden rounded-t-xl relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Eye className="w-10 h-10 text-white" />
                            </div>
                          </div>
                          {/* Live and Category badges */}
                          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            LIVE
                          </div>
                          <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                            {project.category}
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {project.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                          </p>
                          
                          {/* Quick action buttons */}
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.liveUrl, '_blank');
                              }}
                              className="flex-1 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              View Live
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(project);
                                setCurrentProjectIndex(index);
                                setModalView('details');
                              }}
                              className="flex-1 bg-blue-600 hover:bg-blue-700"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Add more placeholder cards to show expandability */}
                    {[...Array(1)].map((_, index) => (
                      <div 
                        key={`placeholder-${index}`}
                        className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 min-h-[300px]"
                      >
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                          <Eye className="w-8 h-8" />
                        </div>
                        <p className="text-center font-medium mb-2">More Projects Coming</p>
                        <p className="text-sm text-center">New websites added regularly</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to Action Section */}
                  <div className="text-center space-y-6 border-t pt-8 bg-gradient-to-r from-blue-50 to-purple-50 -mx-6 px-6 pb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
                      <p className="text-gray-600">Get a professional website like these examples</p>
                    </div>
                    <Button 
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      Start Your Project Now
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-sm text-gray-500">
                      Free consultation • Custom design • Professional results
                    </p>
                  </div>
                </div>
              </>
            ) : (
              // Details View (existing modal content)
              <>
                <div className="flex-shrink-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => setModalView('gallery')}
                      variant="outline"
                      size="sm"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back to Gallery
                    </Button>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedProject?.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div 
                  className="flex-1 min-h-0"
                  style={{ 
                    overflowY: 'scroll', 
                    overflowX: 'hidden',
                    height: 'calc(90vh - 80px)',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#6366f1 #f1f5f9'
                  }}
                >
                  <div className="p-8 space-y-8">
                    {/* Project Image - Back to larger size */}
                    <div className="w-full">
                    <img 
                      src={selectedProject?.image} 
                      alt={selectedProject?.title}
                      className="w-full max-w-5xl mx-auto object-contain rounded-lg shadow-lg"
                      style={{ 
                        maxHeight: 'min(70vh, 500px)',  // Max 70% viewport height OR 500px, whichever is smaller
                        height: 'auto'                  // Maintain aspect ratio
                      }}
                    />
                  </div>

                    {/* Project Content - Back to spacious layout */}
                    <div className="max-w-6xl mx-auto">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                              {selectedProject?.category}
                            </span>
                          </div>
                          
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Project Details</h4>
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {selectedProject?.detailedDescription}
                            </p>
                          </div>
                          
                          {/* Action Buttons - Back to larger */}
                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button 
                              onClick={() => window.open(selectedProject?.liveUrl, '_blank')}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg"
                              size="lg"
                            >
                              <Eye className="mr-2 w-5 h-5" />
                              View Live Site
                            </Button>
                            <Button 
                              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg"
                              size="lg"
                            >
                              <ExternalLink className="mr-2 w-5 h-5" />
                              Get One Like This
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h4>
                            <ul className="space-y-3">
                              {selectedProject?.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700 text-lg">
                                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-4 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-700">Status:</span>
                                <span className="text-green-600 font-bold text-lg">Live & Active</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-700">Category:</span>
                                <span className="font-medium text-gray-900">{selectedProject?.category}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-700">Project Type:</span>
                                <span className="font-medium text-gray-900">Custom Website</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional CTA at bottom */}
                    <div className="max-w-4xl mx-auto text-center pt-8 border-t">
                      <h5 className="text-xl font-bold text-gray-900 mb-3">
                        Want a website like this?
                      </h5>
                      <p className="text-gray-600 mb-6">
                        Let's discuss your project and create something amazing together
                      </p>
                      <Button 
                        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTsI4j0vOwQ9AhRWciFgIp6lhLVv_jNVthEKUqC-_HcWHNOQ/viewform?usp=header', '_blank')}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                        size="lg"
                      >
                        Start Your Project
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>
                    </div>

                    {/* Extra padding at bottom to ensure content is accessible */}
                    <div className="h-16"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioSection;