
import { Send, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isTyping: boolean;
};

export const ChatInput = ({ value, onChange, onSubmit, isTyping }: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="p-4 border-t bg-white shadow-sm">
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="flex items-center gap-3">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          className="flex-1 bg-gray-50 border-saheli-teal/20 focus-visible:ring-saheli-teal rounded-full px-5 py-6 h-12 shadow-inner"
        />
        <Button 
          type="submit"
          className="bg-gradient-to-r from-saheli-teal to-saheli-teal-dark hover:opacity-95 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-md hover:shadow-lg transition-all"
          disabled={value.trim() === '' || isTyping}
        >
          {isTyping ? <Loader className="animate-spin" size={18} /> : <Send size={18} />}
        </Button>
      </form>
    </div>
  );
};
