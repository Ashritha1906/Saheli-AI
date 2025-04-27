
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Event = {
  id: string;
  title: string;
  type: 'Workshop' | 'Webinar' | 'Meetup' | 'Conference';
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  description: string;
  host: string;
  image?: string;
};

const events: Event[] = [
  {
    id: '1',
    title: 'Women in Leadership Summit',
    type: 'Conference',
    date: '2023-05-15',
    time: '14:00 - 17:00',
    location: 'Virtual Event',
    isVirtual: true,
    description: 'Join leading women executives for a series of talks and panels on navigating leadership roles, overcoming barriers, and building supportive networks.',
    host: 'Women in Tech Association',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: '2',
    title: 'Technical Interview Preparation Workshop',
    type: 'Workshop',
    date: '2023-05-12',
    time: '10:00 - 12:30',
    location: 'Virtual Event',
    isVirtual: true,
    description: 'Learn effective strategies for technical interviews, practice problem-solving techniques, and get feedback from industry professionals.',
    host: 'CodeHers Community',
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: '3',
    title: 'Networking Mixer for Creative Professionals',
    type: 'Meetup',
    date: '2023-05-13',
    time: '18:00 - 21:00',
    location: 'Design Hub, 123 Creative Ave',
    isVirtual: false,
    description: 'Connect with fellow creative professionals in a relaxed setting. Build meaningful connections and explore collaboration opportunities.',
    host: 'Creative Women Collective',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: '4',
    title: 'Salary Negotiation Strategies Webinar',
    type: 'Webinar',
    date: '2023-05-18',
    time: '19:00 - 20:30',
    location: 'Virtual Event',
    isVirtual: true,
    description: 'Expert tips on researching fair compensation, communicating your value, and negotiating job offers or raises with confidence.',
    host: 'Equal Pay Initiative',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: '5',
    title: 'Building Your Personal Brand Workshop',
    type: 'Workshop',
    date: '2023-05-20',
    time: '13:00 - 16:00',
    location: 'Career Center, 456 Professional Blvd',
    isVirtual: false,
    description: 'Learn how to craft your professional narrative, build an impactful online presence, and position yourself for career advancement.',
    host: 'Professional Women\'s Network',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80'
  },
];

const eventTypes = ['All', 'Workshop', 'Webinar', 'Meetup', 'Conference'];

export const EventsList = () => {
  const [activeTab, setActiveTab] = useState('All');
  const currentDate = new Date().toISOString().split('T')[0];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredEvents = events.filter(event => {
    // Filter by event type
    if (activeTab !== 'All' && event.type !== activeTab) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
        <p className="text-gray-600">
          Join workshops, webinars, and networking events to grow your skills and connections
        </p>
      </div>

      <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8 w-full justify-start overflow-x-auto">
          {eventTypes.map(type => (
            <TabsTrigger key={type} value={type} className="px-4">
              {type}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="card-hover overflow-hidden">
                {event.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={`
                        ${event.type === 'Workshop' ? 'bg-asha-teal text-white' : ''}
                        ${event.type === 'Webinar' ? 'bg-asha-blue text-white' : ''}
                        ${event.type === 'Meetup' ? 'bg-asha-lavender text-white' : ''}
                        ${event.type === 'Conference' ? 'bg-asha-lavender-dark text-white' : ''}
                      `}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                )}

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <p className="text-sm text-gray-500">Hosted by {event.host}</p>
                </CardHeader>

                <CardContent className="py-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 line-clamp-2">{event.description}</p>
                </CardContent>

                <CardFooter className="pt-2">
                  <Button className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            ))}

            {filteredEvents.length === 0 && (
              <div className="col-span-1 md:col-span-2 text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-1">No events found</h3>
                <p className="text-gray-500">Check back later for {activeTab === 'All' ? 'upcoming events' : `upcoming ${activeTab} events`}</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
