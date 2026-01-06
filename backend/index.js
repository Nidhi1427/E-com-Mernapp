const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Server running on port ${PORT}`);
        }).on('error', (err) => {
            console.error('🚫 Server failed to start:', err.message);
        });
    })
    .catch((err) => {
        console.error('🚫 Database connection failed:', err.message);
    });
