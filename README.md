# MERN Authentication System (JWT-style)

A robust, production-ready Authentication System built with the MERN stack (MongoDB, Express, React, Node.js). This project implements secure stateless authentication using JSON Web Tokens (JWT) and HttpOnly cookies, along with Redux Toolkit for state management.

## 🚀 Features

- **Authentication**: User Registration and Login.
- **Security**: 
  - JWT-based authentication (Access & Refresh tokens).
  - HttpOnly Cookies for preventing XSS attacks.
  - Password hashing using `bcryptjs`.
  - CORS configuration for local development.
- **Role-Based Access Control**:
  - Protected Routes for authenticated users.
  - Role checks (User vs Admin).
- **Frontend**:
  - Built with React (Vite).
  - State management with Redux Toolkit (`authSlice`).
  - Styling with Tailwind CSS.
  - Responsive UI with `Lucide` icons.
- **UX Improvements**:
  - `Ctrl + Enter` shortcut to submit forms.
  - Loading states and error handling.

## 🛠️ Technology Stack

- **Frontend**: React, Vite, Redux Toolkit, React Router DOM, Axios, Tailwind CSS.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB, Mongoose.
- **Auth**: IsonWebToken (JWT), Bcryptjs, Cookie-Parser.

## 📂 Project Structure

```
root
├── client/              # React Frontend
├── server/              # Express Backend
└── README.md            # Documentation
```

## ⚙️ Prerequisites

- Node.js (v14+ recommended)
- MongoDB (Running locally or MongoDB Atlas URI)

## 🔧 Installation & Setup

### 1. clone the repository
```bash
git clone <repository-url>
cd Authentication-System-JWT-style-
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string/your_db_name_here # Or your Atlas URI
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=15m
JWT_REFRESH_SECRET=your_refresh_secret
JWT_REFRESH_EXPIRE=7d
NODE_ENV=development
```

Run the backend server:
```bash
npm run dev
```
*Server runs on: `http://localhost:5000`*

### 3. Frontend Setup
Open a new terminal, navigate to the client directory and install dependencies:
```bash
cd client
npm install
```

Run the frontend development server:
```bash
npm run dev
```
*Client runs on: `http://localhost:5173` (or similar port)*

## 📡 API Endpoints

| Method | Endpoint             | Description                | Protected |
| :----- | :------------------- | :------------------------- | :-------- |
| POST   | `/api/auth/register` | Register a new user        | No        |
| POST   | `/api/auth/login`    | Login user & set cookie    | No        |
| GET    | `/api/auth/logout`   | Logout user & clear cookie | Yes       |
| GET    | `/api/auth/me`       | Get current user profile   | Yes       |

## 🧪 Usage

1.  **Register**: Create a new account at `/register`.
2.  **Dashboard**: After login, you are redirected to the protected `/dashboard`.
3.  **Persistence**: Refresh the page to test if the session persists via cookies/storage.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests.

## 📄 License

This project is open-source and available under the MIT License.
