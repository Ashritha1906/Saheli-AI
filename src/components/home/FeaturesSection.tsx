
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Briefcase, Calendar } from "lucide-react";

const features = [
  {
    id: 'conversations',
    title: 'Context-Aware Conversations',
    description: 'Asha remembers your career goals and adapts conversations to provide personalized guidance based on your industry and experience level.',
    icon: MessageSquare
  },
  {
    id: 'opportunities',
    title: 'Career Opportunities Discovery',
    description: 'Get matched with relevant job opportunities tailored to your skills, experience, and career aspirations.',
    icon: Briefcase
  },
  {
    id: 'mentorship',
    title: 'Mentorship Access',
    description: 'Connect with experienced mentors in your field who are dedicated to helping women advance in their careers.',
    icon: Users
  },
  {
    id: 'community',
    title: 'Inclusive Community Support',
    description: 'Join events, workshops, and networking opportunities designed to empower women in the workplace.',
    icon: Calendar
  }
];

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900">
            How Asha Empowers Your Career Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the tools and resources designed to support women at every career stage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className={`card-hover ${activeFeature === feature.id ? 'ring-2 ring-asha-teal' : ''}`}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${activeFeature === feature.id ? 'bg-asha-teal text-white' : 'bg-asha-teal/10 text-asha-teal'} flex items-center justify-center transition-colors duration-300`}>
                  <feature.icon size={24} />
                </div>
                <CardTitle className="mt-4 text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
              
              <CardFooter>
                <button 
                  className="text-sm text-asha-teal hover:text-asha-teal-dark font-medium"
                  onClick={() => {
                    const element = document.getElementById(feature.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Learn more →
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
