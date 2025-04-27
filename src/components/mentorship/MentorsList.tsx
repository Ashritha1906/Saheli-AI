
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Mentor = {
  id: string;
  name: string;
  title: string;
  company: string;
  experience: string;
  expertise: string[];
  tagline: string;
  bio: string;
  image: string;
};

const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Jennifer Lee',
    title: 'Chief Technology Officer',
    company: 'InnovateTech',
    experience: '15+ years',
    expertise: ['Leadership', 'Tech Strategy', 'Engineering Management'],
    tagline: 'Helping women break barriers in tech leadership',
    bio: 'Former SVP of Engineering at Fortune 500 companies. Passionate about increasing diversity in technology leadership roles.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    name: 'Sophia Rodriguez',
    title: 'Marketing Director',
    company: 'Global Brands Inc.',
    experience: '12 years',
    expertise: ['Brand Strategy', 'Digital Marketing', 'Team Leadership'],
    tagline: 'Guiding marketers to leadership positions',
    bio: 'Led award-winning marketing campaigns for global brands. Specializes in helping women develop their personal brand and leadership style.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '3',
    name: 'Aisha Khan',
    title: 'UX Design Director',
    company: 'DesignWorks',
    experience: '10 years',
    expertise: ['UX Research', 'Design Systems', 'Product Design'],
    tagline: 'Supporting women in design and creative fields',
    bio: 'Award-winning designer who has built design teams from the ground up. Focuses on helping women in design advance to leadership roles.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '4',
    name: 'Maya Johnson',
    title: 'Financial Advisor',
    company: 'Wealth Partners',
    experience: '8 years',
    expertise: ['Investment Strategy', 'Financial Planning', 'Wealth Management'],
    tagline: 'Helping women build financial independence',
    bio: 'Certified financial planner specializing in helping women build wealth and financial security through strategic career choices.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
];

export const MentorsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  // Get all unique areas of expertise
  const allExpertise = Array.from(
    new Set(mentors.flatMap(mentor => mentor.expertise))
  );

  const toggleExpertise = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== expertise));
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };

  const filteredMentors = mentors.filter(mentor => {
    // Filter by search query
    const matchesSearch = 
      searchQuery === '' ||
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by expertise
    const matchesExpertise = 
      selectedExpertise.length === 0 ||
      mentor.expertise.some(expertise => selectedExpertise.includes(expertise));
    
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Connect with Mentors</h1>
        <p className="text-gray-600">
          Find experienced professionals ready to guide you on your career journey
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-white rounded-lg p-4 shadow-sm border">
            <h3 className="font-semibold mb-4">Filter by Expertise</h3>
            <div className="space-y-2">
              {allExpertise.map(expertise => (
                <div key={expertise} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`expertise-${expertise}`}
                    checked={selectedExpertise.includes(expertise)}
                    onChange={() => toggleExpertise(expertise)}
                    className="w-4 h-4 text-asha-teal border-gray-300 rounded focus:ring-asha-teal"
                  />
                  <label htmlFor={`expertise-${expertise}`} className="ml-2 text-sm text-gray-700">
                    {expertise}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mentors grid */}
        <div className="lg:col-span-3">
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by name, title, or company..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredMentors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="card-hover overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex gap-4">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-xl">{mentor.name}</CardTitle>
                        <div className="text-sm text-gray-600">
                          {mentor.title} at {mentor.company}
                        </div>
                        <div className="text-sm text-asha-teal mt-1">
                          {mentor.experience} experience
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="py-2">
                    <p className="text-gray-600 italic mb-3">"{mentor.tagline}"</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <Button className="w-full">
                      Connect with {mentor.name.split(' ')[0]}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No mentors found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
