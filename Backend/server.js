const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',  // Replace with your host
    user: 'root',       // Replace with your MySQL username
    password: 'root',       // Replace with your MySQL password
    database: 'portfolio' // Replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.log('Error connecting to database', err);
        return;
    }
    console.log('Database connected!');
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
            console.log('Error while inserting data', err);
            res.status(500).send('Failed to insert data.');
        } else {
            console.log('Data inserted successfully!');
            res.status(200).send('Data inserted successfully!');
        }
    });
});
const port=process.env.PORT || 3000 ;

// Start the server
app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
});
