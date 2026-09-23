# DevLog 🚀

A personal developer progress dashboard. Not a blogging website, but a dedicated space to track DSA practice, development sessions, projects, learning, and daily logs.

## 📖 Overview

DevLog is designed to replace scattered Notion pages and Excel sheets with a single, focused dashboard. It provides a clear view of your daily, weekly, and overall progress as a developer, while serving as a practical MERN stack learning project.

## ✨ Features (MVP)

- **📊 Main Dashboard:** At-a-glance stats for DSA solved, development hours, and learning topics.
- **🧩 DSA Tracker:** Log LeetCode problems, track difficulty, topics (e.g., Backtracking, DP), and maintain notes.
- **💻 Development Tracker:** Log coding sessions with technology, duration, and "what I learned" notes.
- **📁 Projects:** Track your MERN (or other) projects with progress bars and development logs.
- **📚 Learning Tracker:** Track topics you are currently learning, confidence levels, and resources.
- **📝 Daily Log:** A quick daily entry for what you did, what you learned, problems faced, and tomorrow's plan.
- **🎯 Goals:** Set and track monthly goals for DSA, MERN, and Projects.
- **📈 Weekly Analytics:** Visualize your weekly coding hours and DSA difficulty breakdown.

## 🛠️ Tech Stack

- **Frontend:** React (Vite), React Router, Axios, Recharts (for analytics), Tailwind CSS (or standard CSS)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens), bcryptjs

## 📂 Project Structure

```text
Devlog/
├── backend/
│   ├── src/
│   │   ├── config/       # DB connection
│   │   ├── controllers/  # Route logic
│   │   ├── middleware/   # Auth & error handling
│   │   ├── models/       # Mongoose schemas
│   │   ├── routes/       # API routes
│   │   ├── app.js        # Express app setup
│   │   └── server.js     # Server entry point
│   ├── .env              # Environment variables (not tracked)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Dashboard, DSA, Projects, etc.
│   │   ├── App.jsx       # Main app & routing
│   │   └── main.jsx      # Entry point
│   └── package.json
├── .gitignore
└── README.md