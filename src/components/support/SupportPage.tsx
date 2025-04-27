
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const faqs = [
  {
    question: "How does Asha help with career growth?",
    answer: "Asha provides personalized career guidance through AI-powered conversations, connects you with relevant job opportunities based on your skills and goals, facilitates mentorship connections with experienced professionals in your field, and offers access to workshops and networking events designed to help you advance your career."
  },
  {
    question: "Is Asha only for women?",
    answer: "While Asha is designed with women's career advancement in mind, addressing specific challenges women face in the workplace, our platform welcomes all individuals seeking career support and mentorship."
  },
  {
    question: "How accurate is Asha's AI assistant?",
    answer: "Asha's AI assistant is designed to provide helpful, accurate guidance based on current best practices in career development. However, the AI should be viewed as a supportive tool rather than a replacement for professional career coaching or human mentorship."
  },
  {
    question: "How do I connect with a mentor?",
    answer: "You can browse available mentors in the Mentorship section, filtering by expertise areas relevant to your career goals. When you find a mentor you'd like to connect with, click the 'Connect' button to send them a message introducing yourself and explaining what you hope to gain from the mentorship."
  },
  {
    question: "Are the job listings on Asha current?",
    answer: "Yes, we regularly update our job listings to ensure they are current and relevant. Each listing displays when it was posted, and we remove opportunities that are no longer available."
  },
  {
    question: "How does Asha ensure my data privacy?",
    answer: "We take data privacy seriously. Asha follows responsible AI principles, only collecting information necessary to provide our services. Your personal data is encrypted and never sold to third parties. You can review our complete Privacy Policy for detailed information."
  }
];

export const SupportPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will respond shortly.",
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Support & Feedback</h1>
        <p className="text-gray-600">
          Get help with your questions or share your feedback on how we can improve
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Send us a message and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is your message about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide details about your question or feedback"
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-asha-teal hover:bg-asha-teal-dark"
                  disabled={formSubmitting}
                >
                  {formSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Report AI Response</CardTitle>
                <CardDescription>
                  If you received an inaccurate or unhelpful response from Asha, please let us know.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Submit Feedback About AI
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions about Asha and our services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Card className="bg-gradient-to-r from-asha-teal/10 to-asha-lavender/10">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Not finding what you need?</h3>
                  <p className="text-gray-600 mb-4">
                    Reach out to our dedicated support team for personalized assistance.
                  </p>
                  <Button variant="default" className="bg-asha-lavender hover:bg-asha-lavender-dark">
                    Chat with Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
