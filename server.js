const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); // for Node.js 18+

const app = express();
const PORT = 5000;

const GEMINI_API_KEY = 'AIzaSyCP03-2wdFWfVR7Sk1YV3DdV_RO_NJKBPw';

app.use(cors());
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: userMessage }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    const data = await response.json();
    console.log('Gemini Response:', data);

    const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, couldn't get a valid response.";
    res.json({ reply: aiMessage });
  } catch (error) {
    console.error('Error contacting Gemini API:', error);
    res.status(500).json({ reply: 'Error contacting Gemini API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
