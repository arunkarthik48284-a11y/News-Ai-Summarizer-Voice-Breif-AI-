# 🎙️ VoiceBrief — AI-Powered Voice News

> **"Listen Fast. Understand Deep."**

VoiceBrief is a modern, AI-powered voice news application that helps users stay updated with the latest news in the shortest possible time. Whether you want a 2-minute audio briefing of all headlines or a deep dive into a specific story — VoiceBrief has you covered.

![VoiceBrief Hero](https://img.shields.io/badge/Status-Hackathon%20Ready-blueviolet?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## ✨ Features

### ⚡ Quick News Mode
- Listen to **all top headlines in ~2 minutes**
- AI-summarized bullet-style audio updates
- "Play All News" with sequential voice playback
- Estimated listening time display

### 🧠 Deep Brief Mode
- Tap any story to get a **detailed AI summary**
- "Listen Briefly" — short audio summary
- "Explain in Detail" — full contextual breakdown
- Read + listen combined experience

### 🎧 Voice Integration
- **Text-to-Speech** using Web Speech API (Murf AI ready)
- Play / Pause / Stop controls
- Previous / Next navigation for queued playback
- Animated equalizer & progress bar

### 🔍 Smart Filtering
- Category chips: Technology, Sports, Business, Politics
- Real-time search across all articles
- Instant UI updates

---

## 🚀 Getting Started

### Option 1: Open Directly (No Setup)
Simply open `public/index.html` in any modern web browser. That's it!

### Option 2: Python HTTP Server
```bash
cd VoiceBrief/public
python -m http.server 8080
```
Visit **http://localhost:8080**

### Option 3: Node.js Server
```bash
cd VoiceBrief
npm install
npm start
```
Visit **http://localhost:3000**

---

## 📁 Project Structure

```
VoiceBrief/
├── server.js              # Express backend (optional)
├── package.json           # Node.js project config
├── data/
│   └── mockNews.js        # Mock news data (12 articles)
└── public/
    ├── index.html         # Main application page
    ├── index.css          # Dark glassmorphism design system
    └── app.js             # Client logic + TTS voice engine
```

---

## 🎨 Design

- **Theme**: Blue/purple gradient dark glassmorphism
- **Typography**: Inter (Google Fonts)
- **Layout**: Responsive, mobile-first design
- **Animations**: Smooth transitions, hover effects, scroll animations
- **Audio Bar**: Fixed bottom player with equalizer visualization

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express (optional) |
| Voice | Web Speech API (Murf AI compatible) |
| AI Summaries | Pre-crafted (OpenAI API ready) |
| News Source | Mock data (NewsAPI.org ready) |

---

## 🗂️ Categories

- 🖥️ **Technology** — AI, Space, AR/VR, EVs
- ⚽ **Sports** — Cricket, Football, Olympics
- 📈 **Business** — Markets, Economy, Startups
- 🏛️ **Politics** — Policy, Climate, Global Affairs

---

## 📌 Future Enhancements

- [ ] Murf AI voice generation integration
- [ ] OpenAI real-time article summarization
- [ ] NewsAPI.org live headlines
- [ ] Multi-language support
- [ ] Personalized feed based on user interests
- [ ] PWA with offline support

---

## 📄 License

MIT License — free for personal and commercial use.

---

<p align="center">
  Built with ❤️ for Hackathon 2026<br>
  <strong>VoiceBrief</strong> — Listen Fast. Understand Deep.
</p>

