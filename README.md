# Vector Interview API

## 📌 Overview
This API allows users to authenticate (sign up & log in) and manage interview sessions with the fields **title, description, and questions** using MongoDB and Express.

---

## **Getting Started**

###  **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/PATIENCE-ONAH/Vector-interview-api.git
   cd Vector-interview-api

2. Install dependencies:
   ```bash
    npm install

3. Set up environment variables in a .env file:
   ```
    MONGODB_CONNECTION_STRING=your_mongodb_url
    JWT_SECRET=your_secret_key

4. Start the server:
   ```
    npm run start

📌 Authentication API

 1. User Sign Up

Endpoint: POST /api/auth/signup

Request Body:
 ```
{
  "fullName": "John Doe",
  "email": "user@example.com",
  "password": "yourpassword"
}

Response:
```
{
  "message": "User registered successfully",
  "token": "your-jwt-token"
}

2. User Login

Endpoint: POST /api/auth/login

Request Body:
 ```
{
  "email": "user@example.com",
  "password": "yourpassword"
}

Response:
```
{
  "message": "Login successful",
  "token": "your-jwt-token"
}

📌 Interview API
 1. Create an Interview

Endpoint: POST /api/interviews/create

Request Body:
 ```
{
  "title": "Backend Developer Interview",
  "description": "Interview for backend developer position",
  "questions": [
    "What is REST API?",
    "Explain object oriented programming."
  ]
}

Response:
```
{
  "_id": "650abc123456",
  "title": "Backend Developer Interview",
  "description": "Interview for backend developer position",
  "questions": [
    "What is REST API?",
    "Explain object oriented programming."
  ],
  "createdAt": "2025-03-10T12:00:00Z"
}




