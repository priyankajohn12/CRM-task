require('dotenv').config();  // Make sure this line is at the very top

const mongoose = require('mongoose');

const mongoDBUriString = process.env.MONGODB_URI_STRING;


if (!mongoDBUriString) {
    console.error('MongoDB URI is not defined in .env file');
    process.exit(1); // Exit if MongoDB URI is not defined
}

// Remove deprecated options
mongoose
    .connect(mongoDBUriString)  // No need for useNewUrlParser and useUnifiedTopology anymore
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.error('Connection error: ', err);
    });
