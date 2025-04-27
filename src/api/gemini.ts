export const generateGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error('Error calling local server:', error);
    return "I apologize, but I'm having trouble processing your request right now.";
  }
}; 