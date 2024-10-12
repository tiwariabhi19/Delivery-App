**Delivery Management System API**


Welcome to the Delivery Management System API! This RESTful API facilitates the management of food delivery services, allowing users to register, authenticate, and interact with various resources including users, restaurants, food items, and orders.A comprehensive Node.js, Express, MongoDB, and JWT project showcasing practical implementation of various concepts.


- Node.js and Express fundamentals
- MongoDB connection and schema design
- JWT authentication and authorization
- RESTful API development (CRUD operations)
- MVC pattern implementation
- Password hashing and token generation
- User and restaurant management

Table of Contents
Features
Technologies
Getting Started
API Endpoints
Authentication
Error Handling
Contributing
License



Features

Features

- User registration and login
- Password reset and update
- Restaurant creation and management
- Food category and item management
- Order management
- Admin APIs


User registration and authentication
Admin role management
CRUD operations for restaurants and food items
Order placement and management
Secure password storage and token-based authentication








Technologies
Node.js - JavaScript runtime for building server-side applications
Express - Web framework for Node.js to simplify API development
MongoDB - NoSQL database for storing application data
Mongoose - ODM for MongoDB and Node.js
JWT - For user authentication
Bcrypt - For hashing passwords
CORS - Middleware to enable Cross-Origin Resource Sharing
Dotenv - For managing environment variables
Morgan - HTTP request logger middleware for Node.js



Getting Started



Prerequisites
Node.js (version 14 or higher)
MongoDB (local installation or a cloud instance)
Postman or any API testing tool




Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/delivery-management-system-api.git
cd delivery-management-system-api
Install dependencies:




bash
Copy code
npm install
Create a .env file in the root directory and add your environment variables:





makefile
Copy code
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
Start the server:






bash
Copy code
npm start
The server will be running at http://localhost:4000.





API Endpoints




User Endpoints

Register User: POST /api/v1/auth/register

Login User: POST /api/v1/auth/login

Get User Info: GET /api/v1/user

Update User: PUT /api/v1/user

Delete User: DELETE /api/v1/user/:id




Restaurant Endpoints




Get All Restaurants: GET /api/v1/restaurant


Get Restaurant by ID: GET /api/v1/restaurant/:id

Create Restaurant: POST /api/v1/restaurant

Update Restaurant: PUT /api/v1/restaurant/:id

Delete Restaurant: DELETE /api/v1/restaurant/:id

Food Endpoints




Get All Foods: GET /api/v1/food

Get Food by ID: GET /api/v1/food/:id

Create Food: POST /api/v1/food

Update Food: PUT /api/v1/food/:id

Delete Food: DELETE /api/v1/food/:id

Order Endpoints




Place Order: POST /api/v1/order

Update Order Status: PUT /api/v1/order/:id

Authentication



This API uses JSON Web Tokens (JWT) for authentication. After a successful login, a token will be provided. Include this token in the Authorization header for any protected routes:




makefile



Copy code
Authorization: Bearer <token>
Error Handling



The API uses standard HTTP status codes for error handling. In the event of an error, the response will include a success flag set to false and a message describing the error.

Contributing



Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

License
This project is licensed under the MIT License - see the LICENSE file for details.
