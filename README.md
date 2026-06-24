# 📚 ExamNotesAI

🔗 **Live Demo:** https://one-examnotesaiclient-j2tt.onrender.com

ExamNotesAI is a complete AI-powered study notes platform designed to help students generate, organize, and manage study materials efficiently. By leveraging Google Gemini AI and the MERN Stack, the platform creates intelligent notes, simplifies exam preparation, and provides a seamless learning experience through an intuitive and responsive interface.

---

# ✨ Features

| Feature                     | Description                                                               |
| --------------------------- | ------------------------------------------------------------------------- |
| 🔐 Secure Authentication    | User registration, login, JWT-based authentication, and protected routes. |
| 🤖 AI Notes Generation      | Generate structured and intelligent study notes using Google Gemini AI.   |
| 📝 Notes Management         | Create, organize, update, and manage study notes efficiently.             |
| 📚 Study Dashboard          | Centralized dashboard for accessing all generated notes.                  |
| 🔍 Smart Content Generation | AI-generated content tailored to study topics and requirements.           |
| 📱 Responsive Design        | Fully responsive UI optimized for desktop, tablet, and mobile devices.    |
| ⚡ Fast Performance          | Built using React and Vite for optimized performance and user experience. |
| ☁️ Cloud Deployment         | Accessible anywhere through cloud-hosted deployment.                      |

---

# 🛠️ Tech Stack

| Layer / Component  | Technology               | Purpose                                    |
| ------------------ | ------------------------ | ------------------------------------------ |
| Frontend Framework | React.js / Vite          | Modern user interface and fast development |
| Styling            | Tailwind CSS             | Responsive and modern UI design            |
| HTTP Client        | Axios                    | API communication                          |
| Backend Framework  | Node.js / Express.js     | REST API development                       |
| Database           | MongoDB Atlas / Mongoose | Data storage and management                |
| Authentication     | JWT                      | Secure user authentication                 |
| AI Integration     | Google Gemini AI         | Intelligent notes generation               |
| Deployment         | Render                   | Application hosting and deployment         |

---

# 📂 Project Structure

```text
ExamNotesAI
│
├── client
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public
│   └── vite.config.js
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Getting Started

## Prerequisites

* Node.js (v18+)
* MongoDB Atlas Account
* Google Gemini API Key

---

## Backend Setup

Navigate to the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run server
```

---

## Frontend Setup

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the client folder:

```env
VITE_API_URL=http://localhost:8000
```

Start the frontend:

```bash
npm run dev
```

---

# 🌐 Deployment

| Service    | Platform         |
| ---------- | ---------------- |
| Frontend   | Render           |
| Backend    | Render           |
| Database   | MongoDB Atlas    |
| AI Service | Google Gemini AI |

---

# 📡 API Modules

## Authentication

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | User login          |
| GET    | /api/auth/logout   | Logout user         |
| GET    | /api/auth/profile  | Fetch user profile  |

---

## Notes

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| POST   | /api/notes/generate | Generate AI-powered notes |
| GET    | /api/notes          | Fetch all notes           |
| GET    | /api/notes/:id      | Fetch note details        |
| PUT    | /api/notes/:id      | Update note               |
| DELETE | /api/notes/:id      | Delete note               |

---

# 🏗️ System Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Express.js API
 │
 ├── MongoDB Atlas
 │
 └── Google Gemini AI
```
---
# 👨‍💻 Author

### Takshil Kathiriya

🎓 IT Engineering Student

🔗 GitHub: https://github.com/TakshilKathiriya

🔗 LinkedIn:https://www.linkedin.com/in/takshil-kathiriya-17a367284/

📧 Email:takshilkathiriya2@gmail.com

---

# ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

---

# 📜 License

This project is licensed under the MIT License.
