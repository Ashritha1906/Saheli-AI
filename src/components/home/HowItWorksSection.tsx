
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '1',
    title: 'Start Chatting',
    description: 'Share your career goals and challenges with Asha to receive personalized guidance.',
    color: 'from-asha-teal-light to-asha-teal'
  },
  {
    number: '2',
    title: 'Get Job Matches',
    description: 'Discover curated job opportunities that align with your skills and aspirations.',
    color: 'from-asha-blue-light to-asha-blue'
  },
  {
    number: '3',
    title: 'Connect with Mentors',
    description: 'Find mentors who can guide you through career challenges and opportunities.',
    color: 'from-asha-lavender-light to-asha-lavender'
  },
  {
    number: '4',
    title: 'Grow Your Network',
    description: 'Participate in events, workshops, and networking opportunities to advance your career.',
    color: 'from-asha-lavender to-asha-teal'
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900">
            Your Path to Career Success
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple process designed to help you achieve your professional goals
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-4 right-4 h-0.5 bg-gray-200 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  {/* Step number */}
                  <div className={cn(
                    "w-24 h-24 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-4xl font-bold relative z-10",
                    step.color
                  )}>
                    {step.number}
                  </div>
                  
                  {/* Step details */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
