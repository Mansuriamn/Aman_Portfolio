const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

require('dotenv').config(); // Load environment variables

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const _dirname = path.resolve();

// Database connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST,   // Use environment variable
    user: process.env.DB_USER,   // Use environment variable
    password: process.env.DB_PASSWORD, // Use environment variable
    database: process.env.DB_NAME // Use environment variable
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // SQL query with placeholders
    const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';

    // Values to be inserted in the placeholders
    const values = [name, email, message];

    // Execute the query
    db.query(query, values, (err, result) => {
        if (err) {
            res.status(500).send('Failed to insert data.');
        } else {
            res.status(200).send('Data inserted successfully!');
        }
    });
});

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

// Use the environment variable for the port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
