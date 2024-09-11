
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import Routes
 
app.use('/', require('./routes/index'));

// Set view engine
app.set('view engine', 'ejs');

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  