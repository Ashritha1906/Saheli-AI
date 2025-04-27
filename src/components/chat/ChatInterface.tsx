import { useState } from 'react';
import { ChatMessages, type Message } from './ChatMessages';
import { QuickSuggestions, type QuickSuggestion } from './QuickSuggestions';
import { ChatInput } from './ChatInput';
import { generateGeminiResponse } from '@/api/gemini';

const quickSuggestions: QuickSuggestion[] = [
  { id: '1', text: 'Find Jobs', action: 'jobs' },
  { id: '2', text: 'Explore Mentorship', action: 'mentorship' },
  { id: '3', text: 'Upcoming Events', action: 'events' },
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '0', 
      content: "Hello! I'm Saheli, your career companion. How can I help with your professional journey today?", 
      isUser: false, 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      const botResponse = await generateGeminiResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble processing your request right now. Could you please try again?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };
  
  const handleSuggestionClick = async (suggestion: QuickSuggestion) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: `I'd like to ${suggestion.text.toLowerCase()}`,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    try {
      const botResponse = await generateGeminiResponse(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble processing your request right now. Could you please try again?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto">
      {/* Chat header */}
      <div className="bg-white border-b p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full saheli-gradient flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <div className="ml-3">
            <h2 className="font-semibold">Saheli</h2>
            <p className="text-sm text-gray-500">Your Career Companion</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <ChatMessages messages={messages} isTyping={isTyping} />

      {/* Quick Suggestions */}
      <QuickSuggestions suggestions={quickSuggestions} onSuggestionClick={handleSuggestionClick} />

      {/* Chat Input */}
      <ChatInput 
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSendMessage}
        isTyping={isTyping}
      />
    </div>
  );
};
