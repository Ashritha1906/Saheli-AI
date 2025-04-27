
import { Button } from '@/components/ui/button';

export type QuickSuggestion = {
  id: string;
  text: string;
  action: string;
};

type QuickSuggestionsProps = {
  suggestions: QuickSuggestion[];
  onSuggestionClick: (suggestion: QuickSuggestion) => void;
};

export const QuickSuggestions = ({ suggestions, onSuggestionClick }: QuickSuggestionsProps) => {
  return (
    <div className="p-4 border-t bg-gradient-to-r from-white to-gray-50">
      <div className="flex flex-wrap gap-3 mb-2">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion.id}
            variant="outline"
            size="sm"
            className="bg-white/70 backdrop-blur-sm border border-saheli-lavender/20 hover:bg-saheli-lavender/10 text-saheli-lavender-dark rounded-full px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion.text}
          </Button>
        ))}
      </div>
    </div>
  );
};
