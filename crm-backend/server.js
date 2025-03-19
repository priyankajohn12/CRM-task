// server.js
require('dotenv').config();  // Ensure that environment variables are loaded

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import MongoDB connection (make sure db.js is correctly configured)
require('./config/db');  // Ensure the db.js file is connecting to MongoDB

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route to ensure server is running
app.get('/', (req, res) => {
  res.send('Hello, CRM!');
});

// Import routes for authentication and customers (ensure these are created)
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customers');

// Use the imported routes
app.use('/auth', authRoutes);
app.use('/customers', customerRoutes);

// Start server and listen for requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

