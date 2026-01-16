# Todo App Backend API

A simple backend API for a Todo application built using Node.js, Express, and MongoDB.  
This project demonstrates user authentication and CRUD operations using REST APIs.

## Features
- User signup and login with JWT authentication
- Create, read, update, and delete todos
- Todos are user-specific
- Protected routes using middleware

## Technologies Used
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JSON Web Token (JWT)  

## How to Run
1. Clone or download the project  
2. Install dependencies  
   npm install  
3. Create a `.env` file with required variables  
4. Start the server  
   node index.js  

Server runs at:  
http://localhost:3000

## API Endpoints

### User
- POST /user/signup → Register user  
- POST /user/login → Login and get token  

### Todo (Protected)
- POST /todo → Create todo  
- GET /todo → Get all todos  
- GET /todo/:id → Get todo by ID  
- PUT /todo → Update todo  
- DELETE /todo/:id → Delete todo  
- DELETE /todo → Delete all todos  

## Authorization
Pass JWT token in request headers:

## Author
Ashish Goyat