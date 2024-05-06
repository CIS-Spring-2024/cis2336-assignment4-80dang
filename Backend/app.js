const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Body parser middleware to handle JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware to allow cross-origin requests
app.use(cors());

app.get('/', (req, res) => {
    // Serve the order confirmation web page
    res.send("Welcome to my Express server!")
});

app.post('/data', (req, res) => {
    const { name } = req.body;
    console.log(req.body);  // Log data sent by the client
    console.log(`Received submission:`, name);
  
    // Send a response back to the client
    res.send('Data received successfully!');
});


// Handle 404 (Not Found)
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Basic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

