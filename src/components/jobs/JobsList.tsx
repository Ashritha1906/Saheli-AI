
import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Briefcase, MapPin, Calendar, CircleDot } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  postedDate: string;
  logo?: string;
};

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote'];
const industries = ['Technology', 'Healthcare', 'Finance', 'Marketing', 'Education'];

export const JobsList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);
  
  // Mock data loading
  useEffect(() => {
    const mockJobs: Job[] = [
      {
        id: '1',
        title: 'Senior Product Manager',
        company: 'TechCorp',
        location: 'San Francisco, CA (Remote)',
        type: 'Full-time',
        description: 'Join our team as a Senior Product Manager to lead product strategy and execution. You\'ll work with cross-functional teams to deliver exceptional user experiences and drive business growth.',
        postedDate: '2 days ago'
      },
      {
        id: '2',
        title: 'Marketing Director',
        company: 'BrandWave',
        location: 'New York, NY',
        type: 'Full-time',
        description: 'Lead our marketing team in developing and implementing comprehensive marketing strategies to increase brand awareness and drive customer acquisition.',
        postedDate: '1 week ago'
      },
      {
        id: '3',
        title: 'UX Designer',
        company: 'CreativeMinds',
        location: 'Remote',
        type: 'Contract',
        description: 'Design intuitive user experiences for web and mobile applications. Collaborate with product managers and developers to create visually appealing and user-friendly interfaces.',
        postedDate: '3 days ago'
      },
      {
        id: '4',
        title: 'Financial Analyst',
        company: 'Global Finance',
        location: 'Chicago, IL',
        type: 'Full-time',
        description: 'Analyze financial data, prepare reports, and provide insights to support business decisions. Develop financial models and forecasts to guide strategic planning.',
        postedDate: '1 day ago'
      },
      {
        id: '5',
        title: 'Content Writer',
        company: 'MediaHub',
        location: 'Remote',
        type: 'Part-time',
        description: 'Create engaging content for various platforms including blogs, social media, and newsletters. Adapt tone and style to match brand voice and target audience.',
        postedDate: '5 days ago'
      },
      {
        id: '6',
        title: 'HR Manager',
        company: 'PeopleFirst',
        location: 'Boston, MA',
        type: 'Full-time',
        description: 'Oversee all aspects of human resources including recruitment, employee relations, benefits administration, and performance management. Develop and implement HR policies and programs.',
        postedDate: '1 week ago'
      },
    ];
    
    setTimeout(() => {
      setJobs(mockJobs);
      setLoading(false);
    }, 1500);
  }, []);
  
  const toggleJobType = (type: string) => {
    if (selectedJobTypes.includes(type)) {
      setSelectedJobTypes(selectedJobTypes.filter(t => t !== type));
    } else {
      setSelectedJobTypes([...selectedJobTypes, type]);
    }
  };
  
  const toggleIndustry = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter(i => i !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };
  
  const filteredJobs = jobs.filter(job => {
    // Filter by job type
    if (selectedJobTypes.length > 0 && !selectedJobTypes.includes(job.type)) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !job.company.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !job.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const FilterPanel = () => (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <h3 className="font-semibold mb-3">Job Type</h3>
      <div className="space-y-2 mb-6">
        {jobTypes.map(type => (
          <div key={type} className="flex items-center">
            <input
              type="checkbox"
              id={`job-type-${type}`}
              checked={selectedJobTypes.includes(type)}
              onChange={() => toggleJobType(type)}
              className="w-4 h-4 text-asha-teal border-gray-300 rounded focus:ring-asha-teal"
            />
            <label htmlFor={`job-type-${type}`} className="ml-2 text-sm text-gray-700">
              {type}
            </label>
          </div>
        ))}
      </div>
      
      <h3 className="font-semibold mb-3">Industry</h3>
      <div className="space-y-2">
        {industries.map(industry => (
          <div key={industry} className="flex items-center">
            <input
              type="checkbox"
              id={`industry-${industry}`}
              checked={selectedIndustries.includes(industry)}
              onChange={() => toggleIndustry(industry)}
              className="w-4 h-4 text-asha-teal border-gray-300 rounded focus:ring-asha-teal"
            />
            <label htmlFor={`industry-${industry}`} className="ml-2 text-sm text-gray-700">
              {industry}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Your Perfect Role</h1>
        <p className="text-gray-600">
          Discover opportunities aligned with your skills and career goals
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
          >
            {isMobileFilterVisible ? 'Hide Filters' : 'Show Filters'}
          </Button>
          
          {isMobileFilterVisible && (
            <div className="mt-4">
              <FilterPanel />
            </div>
          )}
        </div>
        
        {/* Desktop filter sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <FilterPanel />
        </div>
        
        {/* Jobs list */}
        <div className="flex-1">
          {/* Search bar */}
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search job titles, companies, or keywords..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Results count */}
          <div className="mb-4 text-sm text-gray-500">
            {loading ? (
              <Skeleton className="h-5 w-32" />
            ) : (
              `${filteredJobs.length} opportunities found`
            )}
          </div>
          
          {/* Jobs grid */}
          <div className="grid grid-cols-1 gap-6">
            {loading ? (
              // Loading skeletons
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-9 w-24" />
                  </CardFooter>
                </Card>
              ))
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <Card key={job.id} className="card-hover overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{job.company}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-asha-teal/10 text-asha-teal border-asha-teal/20">
                        {job.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="py-2">
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <p className="text-gray-600 line-clamp-2">
                      {job.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between items-center pt-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                    <Button size="sm">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <CircleDot className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
          
          {/* Load more button */}
          {filteredJobs.length > 0 && (
            <div className="mt-8 text-center">
              <Button variant="outline">
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
