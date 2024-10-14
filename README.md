**Delivery Management System RESTful API**


This project is a RESTful API built using Node.js, Express.js, and MongoDB. The API manages orders, drivers, routes, and payments in a delivery management system, following the MVC (Model-View-Controller) design pattern.

**Prerequisites**

To get started with this project, ensure you have the following installed:

Node.js
MongoDB

**Getting Started**

**Step 1: Initialize the Project**


1. Create a new folder for the project.
2. Run npm init to initialize the project and create a package.json file.

**Step 2: Install Dependencies**

1. Install Express.js: npm install express.
2. Create a server.js file as the entry point of the project.
3. Install supporting packages:

4. npm install nodemon colors cors morgan dotenv mongoose
5. Add a script to your package.json for running the server with nodemon:
   
"scripts": {
   "server": "nodemon server.js"
}
**Step 3: Setup Middleware**

1. Import CORS middleware for handling cross-origin requests:
   app.use(cors());
2. Use Express to handle JSON data from client-side:
   app.use(express.json());
3. Set up Morgan for logging HTTP requests:
   app.use(morgan('dev'));


**Step 4: Configure Environment Variables**
1. Create a .env file in the root of your project. Use dotenv to load environment variables:
    require('dotenv').config();
2. Set the server's port dynamically from the environment variables:
    const PORT = process.env.PORT || 4000;
3. Project Structure (MVC Pattern)

**The project follows the MVC (Model-View-Controller) architecture:**

Model: Defines the structure of the database.
Controller: Contains business logic and handles requests from the user.
View: Not applicable here, as this project is purely backend.

**Folder Structure:**


├── routes/         # API routes
├── models/         # Database schema
├── controllers/    # Business logic (callback functions)
├── config/         # Database connection
├── data/           # Predefined data (if any)
├── middleware/     # Custom middleware
├── utils/          # Utility files (helper functions)



**API Routes**

1. Create a test route:
   
  router.get('/api/v1/test/test-user', (req, res) => {
    res.send('Test route working!');
  });

2. Test the route on
    http://localhost:4000/api/v1/test/test-user.


**Database Setup (MongoDB)**

**Step 1: MongoDB Cloud Setup**

1. Sign up for a free *MongoDB* Atlas account.
2. Create a cluster (free tier available).
3. Go to Security > Network Access and whitelist your IP address.
4. In Database Access, create a user with readWrite permissions.
5. Copy the connection string from Database > Connect, insert your username and password, and 6. store it in your .env file:


MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase

**Step 2: Database Configuration**

In the config/ folder, create a db.js file to connect to MongoDB using Mongoose:



const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
module.exports = connectDB;

**User Model**

In the models/ folder, create a User model schema:


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: {
       type: String,
       required: true,
   },
   email: {
       type: String,
       required: true,
       unique: true,
   },
   password: {
       type: String,
       required: true,
   },
   address: String,
   phone: String,
   userType: {
       type: String,
       enum: ['admin', 'driver', 'user'],
       default: 'user',
   },
   profile: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);


**Authentication & Registration Flow**

**Step 1: Create Routes for Authentication**

1. Create authRoutes.js under routes/.
2. Set up a POST route for user registration:
   router.post('/register', registerUser);


**Step 2: Implement Registration Logic**

1. In the controllers/ folder, create authController.js.
2. Implement the registerUser function:

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    
    // Validate user input
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({
        username,
        email,
        password,  // In production, hash the password before saving
    });

    res.status(201).json({
        message: 'User registered successfully',
        data: user
    });
};


**Step 3: Connect Authentication Routes**
1. In server.js, connect the authentication routes:

app.use('/api/v1/auth', require('./routes/authRoutes'));


====

**User Endpoints**

Register User: POST /api/v1/auth/register

Login User: POST /api/v1/auth/login

Get User Info: GET /api/v1/user

Update User: PUT /api/v1/user

Delete User: DELETE /api/v1/user/:id




**Restaurant Endpoints**




Get All Restaurants: GET /api/v1/restaurant


Get Restaurant by ID: GET /api/v1/restaurant/:id

Create Restaurant: POST /api/v1/restaurant

Update Restaurant: PUT /api/v1/restaurant/:id

Delete Restaurant: DELETE /api/v1/restaurant/:id

**Food Endpoints**




Get All Foods: GET /api/v1/food

Get Food by ID: GET /api/v1/food/:id

Create Food: POST /api/v1/food

Update Food: PUT /api/v1/food/:id

Delete Food: DELETE /api/v1/food/:id

**Order Endpoints**




Place Order: POST /api/v1/order

Update Order Status: PUT /api/v1/order/:id

**Authentication**



This API uses JSON Web Tokens (JWT) for authentication. After a successful login, a token will be provided. Include this token in the Authorization header for any protected routes:




**makefile**



Copy code
Authorization: Bearer <token>
Error Handling



The API uses standard HTTP status codes for error handling. In the event of an error, the response will include a success flag set to false and a message describing the error.

**Contributing**



Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

**License**

This project is licensed under the MIT License - see the LICENSE file for details.
