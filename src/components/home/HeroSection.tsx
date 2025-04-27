
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-12 lg:pt-16 pb-20 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-asha-teal-light/20 via-white to-asha-lavender-light/20 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-asha-teal/10 -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-asha-lavender/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-asha-teal to-asha-lavender text-transparent bg-clip-text">
                Asha:
              </span> <br className="hidden lg:block" />
              Your AI Companion for Career Success
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Empowering women through personalized career guidance, job opportunities, and mentorship connections—all in one place.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/chat">
                <Button 
                  className="bg-gradient-to-r from-asha-teal to-asha-teal-dark hover:opacity-90 text-white px-8 py-6 rounded-full text-lg w-full sm:w-auto"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Chat with Asha
                  <ArrowRight 
                    className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                    size={20} 
                  />
                </Button>
              </Link>
              <Link to="/jobs">
                <Button 
                  variant="outline" 
                  className="bg-white border-2 border-asha-lavender text-asha-lavender-dark hover:bg-asha-lavender/10 px-8 py-6 rounded-full text-lg w-full sm:w-auto"
                >
                  Explore Jobs
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-2xl shadow-xl overflow-hidden transform md:translate-x-10 lg:translate-x-0 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Professional woman with AI companion" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-asha-teal/40 to-asha-lavender/40 mix-blend-overlay" />
              
              {/* AI glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-asha-teal/30 to-asha-lavender/30 blur-md rounded-2xl -z-10" />
              
              {/* Floating UI elements */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-pulse-soft">
                <div className="h-6 w-24 bg-asha-teal/30 rounded-md" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-bounce-soft">
                <div className="h-6 w-16 bg-asha-lavender/30 rounded-md" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-asha-teal/20 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-asha-lavender/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
