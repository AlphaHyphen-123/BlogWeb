Here's a professional `README.md` file for your **Blogify** project (React + Node.js based blog app):

---

````markdown
 📘 Blogify

**Blogify** is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to sign up, log in, and create, view, and manage blog posts.

---

## 🚀 Features

- 🔐 JWT Authentication (Signup/Login)
- 📝 Create, Read, Update, Delete (CRUD) blog posts
- 👨‍💻 Personalized user dashboard
- 📄 Rich text blog editor (optional)
- 💡 Clean and responsive UI using Bootstrap
- 📦 Backend API with Express.js

---

## 🛠️ Tech Stack

**Frontend**  
- React  
- Axios  
- React Router  
- Bootstrap

**Backend**  
- Node.js  
- Express.js  
- MongoDB (with Mongoose)  
- bcrypt for hashing  
- JSON Web Tokens (JWT) for authentication  
- dotenv for environment config

---

## 🔧 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blogify.git
cd blogify
````

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:

```
PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run server
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🌐 API Routes

### Auth

* `POST /api/auth/signup` – Register user
* `POST /api/auth/login` – Login user and return JWT

### Blogs

* `GET /api/blogs/` – Fetch all blogs
* `POST /api/blogs/` – Create new blog (auth required)
* `PUT /api/blogs/:id` – Update blog (auth required)
* `DELETE /api/blogs/:id` – Delete blog (auth required)

---




---

## ✍️ Author

**Aditya Kumar**
*B.Tech CSE Student*


---


