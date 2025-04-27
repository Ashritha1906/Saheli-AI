
import { ScrollArea } from '@/components/ui/scroll-area';
import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

export type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

type ChatMessagesProps = {
  messages: Message[];
  isTyping: boolean;
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const ChatMessages = ({ messages, isTyping }: ChatMessagesProps) => {
  return (
    <ScrollArea className="flex-1 p-4 space-y-4 bg-gradient-to-b from-white to-gray-50">
      <div 
        className="space-y-4"
        role="log"
        aria-live="polite"
      >
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={cn(
              "flex animate-fade-in",
              message.isUser ? "justify-end" : "justify-start"
            )}
          >
            <div 
              className={cn(
                "max-w-[80%] rounded-2xl p-4 shadow-sm",
                message.isUser 
                  ? "bg-gradient-to-r from-saheli-teal to-saheli-teal-dark text-white" 
                  : "bg-white border border-gray-100 text-gray-900"
              )}
            >
              <div className="flex items-center mb-2">
                {!message.isUser && (
                  <div className="h-8 w-8 rounded-full saheli-gradient flex items-center justify-center mr-2 shadow-sm">
                    <Bot size={16} className="text-white" />
                  </div>
                )}
                {message.isUser && (
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <User size={16} className="text-white" />
                  </div>
                )}
                <span className={cn(
                  "text-xs",
                  message.isUser ? "text-white/70" : "text-gray-500"
                )}>
                  {formatTime(message.timestamp)}
                </span>
              </div>
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center space-x-2 max-w-[80%] shadow-sm">
              <div className="h-8 w-8 rounded-full saheli-gradient flex items-center justify-center shadow-sm">
                <Bot size={16} className="text-white" />
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-saheli-lavender rounded-full animate-typing-dot-1"></div>
                <div className="w-2 h-2 bg-saheli-teal rounded-full animate-typing-dot-2"></div>
                <div className="w-2 h-2 bg-saheli-blue rounded-full animate-typing-dot-3"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};
