# Student Learning Analytics Dashboard Task8

## 📌 Project Overview
A full-stack web application that displays student learning analytics using React, Node.js, Express, and MySQL. It provides dashboard insights, student management, search, filtering, pagination, and profile views.

---

## 🚀 Features

- Student Dashboard with analytics cards
- Search students by name or ID
- Filter by Department and Skill
- Paginated student table
- Student profile page
- REST API integration
- Responsive UI (desktop, tablet, mobile - basic)
- Navigation using React Router

---

## 🧑‍💻 Tech Stack

### Frontend:
- React.js
- HTML5
- CSS3
- JavaScript (ES6+)
- Axios
- React Router

### Backend:
- Node.js
- Express.js

### Database:
- MySQL

---

## 📂 Folder Structure
Student-Learning-Analytics-Dashboard/
│
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── db.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
│
├── database.sql
├── screenshots/
└── README.md

---

## ⚙️ Project Setup Steps

### Backend

cd backend
npm install
npm start


### Frontend

cd frontend
npm install
npm run dev

🔗 API Endpoints
Students
GET /students
GET /students/:id
GET /students/search
Dashboard
GET /dashboard/stats


🗄️ Database

Import database.sql into MySQL:

CREATE DATABASE student_dashboard;
USE student_dashboard;

## 📸 Screenshots

### 🖥️ Dashboard Page
### 👨‍🎓 Student List Page
### 👤 Student Profile Page
### 📱 Mobile Responsive View
