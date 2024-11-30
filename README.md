# Project Name
simple web application for submiting and view data through a form.

## Description
This project is a full-stack web application with a React front-end and Node.js back-end. It includes a sign-up feature with unit tests for both front-end and back-end functionalities.

## Requirements
- react.js
- Node.js (v14 or later)
- MongoDB (local)
- Express
- cors
- nodemon
- Tailwind css

### Front-End (React)
1. Create and Navigate to the `client/` directory:

   cd client

2. Install dependencies:

   npm install react-router-dom axios tailwindcss postcss autoprefixer tailwindcss init

   Setup tailwind.config.js by adding this:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

3. Run the React development server:

   bash npm start


### Back-End (Node.js)
1. Create and Navigate to the `server/` directory:

   cd server
   npm init -y
   
2. Install dependencies:

   npm install express mongoose axios cors socket.io dotenv
   
3. Set up your `.env` file for MongoDB and other environment variables:
   
   MONGODB_URL=your-mongodb-url
   PORT=3000
   
4. Run the server:

   npm start
   

### Front-End Tests
1. Run the React unit tests:

   npm test


### Back-End Tests
1. Run the Node.js unit tests:

   npm test


## License
MIT License