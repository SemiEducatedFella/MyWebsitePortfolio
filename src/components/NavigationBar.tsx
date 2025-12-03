import React from 'react';

const NavigationBar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-white text-xl font-bold py-4">
            Get Better Websites
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="px-4 py-4 text-white hover:text-purple-200 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-4 text-white hover:text-purple-200 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-4 py-4 text-white hover:text-purple-200 transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-4 py-4 text-white hover:text-purple-200 transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="px-4 py-4 text-white hover:text-purple-200 transition-colors duration-300 font-medium"
            >
              Process
            </button>
         
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-4 text-white hover:text-purple-200 transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;