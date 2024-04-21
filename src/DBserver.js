// Import required modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create an Express application
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    maxAge: 600
}))

// Create a MySQL database connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'app',
    password: 'mysql',
    database: ''
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Define a route to handle incoming queries
app.get('/query', (req, res) => {
    const query = req.query.query; // Get the query string parameter from the request URL
    //const Qquery = decodeURI(query)
    // Execute the SQL query
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query: ' + error.message);
            res.status(500).send('Error executing query');
            return;
        }
        // Send the results back to the client as JSON
        res.json(results);
        //console.log(res.json(results))
    });
});

// Start the Express server
const port = 3000; // You can choose any port you like
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
