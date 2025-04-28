# PAF_LMS_Group_34

# 📚 SkillFlow - Learning Management System

SkillFlow is an innovative **Skill-Sharing & Learning Platform** that offers a seamless, engaging learning experience.  
Built with **React.js** for the frontend and **Spring Boot** for the backend, it ensures users can **share knowledge**, **track their learning progress**, and **collaborate** effortlessly.

---

## 📄 Project Description

> **SkillFlow: The Ultimate Skill-Sharing & Learning Platform**  

SkillFlow is designed to provide a seamless and engaging learning experience:
- **Frontend**: Built with **React.js** for an intuitive and modern interface.
- **Backend**: Powered by **Spring Boot** for efficient data processing and API management.
- **Authentication**: Secure login using **OAuth 2.0 (Google Login)**.
- **Database**: **MongoDB** stores user profiles, skill posts, learning plans, and community interactions.
- **Deployment**: Hosted on **Vercel** for fast, scalable access across devices.

Whether you're **sharing expertise**, **discovering new skills**, or **engaging with a community of learners**, SkillFlow provides the perfect environment for **collaborative learning**.

---

## ✨ Core Features

### 1. 👤 User Management System
- Secure registration and login using **OAuth 2.0 (Google Login)**.
- Profile management (edit bio, profile picture, skills).
- Follow/unfollow other users to build a learning network.

### 2. 📝 Post Management System
- Create, edit, and delete skill-related posts.
- Posts can include text, images, and videos.
- Share knowledge and learning experiences with the community.

### 3. 💬 Comment & Feedback Management System
- Add, edit, and delete comments on posts.
- Foster discussion, feedback, and collaboration among learners.

### 4. 🎯 Learning Plans Management System
- Create structured learning plans with goals and milestones.
- Add learning resources (links, files, notes).
- Track progress to stay motivated.

### 5. 📌 Saved Content & Manage Component
- Save important posts and resources for quick access later.
- Organize and revisit valuable learning materials anytime.

---

## 🛠 Technologies Used

### Frontend (React)
- ReactJS
- Axios (for API calls)
- Tailwind CSS (optional)
- JavaScript

### Backend (Spring Boot)
- Spring Boot
- Spring Data MongoDB
- OAuth 2.0 Authentication (Google)
- Lombok
- Maven

### Database
- MongoDB

---

## 🚀 How to Run the Project

### 1. Clone the repository
```bash
git clone https://github.com/your-username/skillflow.git
```

### 2. Setup Backend (Spring Boot)
```bash
cd backend
```
- Open in **IntelliJ IDEA** or **Spring Tool Suite**.
- Configure `application.properties`:

```properties
spring.data.mongodb.uri=mongodb+srv://<your-mongodb-username>:<your-mongodb-password>@cluster0.mongodb.net/skillflow?retryWrites=true&w=majority
spring.jpa.show-sql=true
server.port=8080
```
- Run the Spring Boot application.

### 3. Setup Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

## 📸 Screenshots

