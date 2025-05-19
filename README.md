
# Saheli - Asha AI Career Companion 🤖💼

**Saheli** is an AI-powered chatbot prototype built for the Asha Hackathon 2024. It is designed to support and empower women professionals by providing contextual, real-time assistance in exploring job opportunities, mentorship programs, community events, and career development resources.

## 🚀 Project Goals
- Create a context-aware chatbot that delivers meaningful, multi-turn responses.
- Integrate real-time job, event, and mentorship data (dummy/dynamic for MVP).
- Promote inclusivity and ethical AI use by mitigating gender bias in responses.
- Ensure privacy and data security in all interactions.

## ✨ Features
- 💬 **Chatbot Interface**: Powered by Gemini Pro API with context awareness and smart fallback handling.
- 🔍 **Quick Suggestions**: Buttons like “Find Jobs”, “Explore Mentorship”, and “Upcoming Events” for instant queries.
- 🗂️ **Job Listings Page**: Browse and filter jobs (from dummy JSON or API).
- 👥 **Mentorship Program Page**: Explore mentor cards and apply for programs.
- 📆 **Events Page**: View upcoming events and register.
- 🧠 **Bias Mitigation**: AI configured to block hate speech, harassment, and explicit content.
- 📦 **Feedback Form**: Submit support requests or feedback.
- 📱 **Responsive UI**: Built with React.js + TailwindCSS for a sleek, mobile-first experience.

## 🛠️ Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React.js, Tailwind CSS |
| Backend     | Node.js, Express.js    |
| AI Model    | Google Gemini Pro API  |
| APIs        | Google Generative Language API |
| Design Tools| Lovable.dev (UI scaffold)     |

## 🧪 Setup Instructions

### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### Backend Setup
```bash
cd server
npm install
node server.js
```

### API Integration
- Ensure you have a valid **Gemini API Key** from Google.
- Add it to your backend `server.js` file:
```js
const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
```

## 🔐 Security & Ethics
- API key securely hidden on server side.
- AI safety settings configured to block harmful content.
- No personal data stored during prototype phase.

## 📸 Screenshots
Include:
- Landing Page
- Chatbot Interface
- Job Listings Page
- Mentorship Explorer
- Events Page

## 🎯 Future Enhancements
- Add login/signup system.
- Save user profiles & preferences.
- Admin panel to manage job/event listings.
- Real-time analytics dashboard.
- Multilingual support (Hindi, Tamil, etc.).

## 📂 Repository Structure
```
/client      => React frontend
/server      => Node.js backend
README.md    => This file
```

## 📜 License
This is a prototype submitted for Asha Hackathon 2024. Educational use only.

---

### 💡 Quote:
_"Saheli bridges the gap between ambition and opportunity — through ethical AI, smart tech, and a friendly voice."_ 🙌
