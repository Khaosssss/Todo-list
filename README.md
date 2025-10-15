# 📝 Task Manager

A simple full-stack task manager built with React, Express, MongoDB, and TailwindCSS.

---

## 🚀 Features

- Add, delete, and mark tasks as completed
- Persistent storage with MongoDB
- REST API built with Express
- Responsive UI styled with TailwindCSS

---

## 🛠️ Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- MongoDB running locally (e.g., via MongoDB Compass or `mongod`)

---

## 💻 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Khaosssss/todo-list.git
cd todo-list
cd Backend
npm install
```
Create a .env file and fill the contents

MONGO_URI=mongodb://"your url"
PORT=5000

```bash
npm run start
```

Setup frontend
```bash
cd Frontend
npm install
npm run dev
```

Add new tasks, mark tasks completed, or delete tasks

All changes persist to your local MongoDB database

⚙️ Notes
Make sure MongoDB is running before starting the backend

You can change the database connection string in .env

If you deploy, update .env with your production MongoDB URI

📄 License
This project is licensed under the MIT License.





