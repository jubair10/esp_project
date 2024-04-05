const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();

// Serve static files (HTML, CSS, JS) from the 'public' directory
app.use(express.static(__dirname));

// Use middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // Send HTML file
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/data_endpoint', (req, res) => {
  // Extract data from the request body
  const data = req.body;

  // Do something with the received data (e.g., store it in a database)
  console.log('Received data:', data);

  // Send a response back to the client
  res.status(200).send('Data received successfully');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
