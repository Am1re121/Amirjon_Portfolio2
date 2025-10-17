const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => { 
    res.send('About Page');
}) 

app.get('/contact', (req, res) => { 
    res.send('Contact Page');
});