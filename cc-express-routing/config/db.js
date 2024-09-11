
const mongoose = require('mongoose');
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/myapp';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error: ', err));
  