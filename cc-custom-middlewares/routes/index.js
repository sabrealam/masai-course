
const express = require('express');
const checkSchemaTypeMiddlewares = require('../middlewares/checkSchemaTypeMiddlewares');
const router = express.Router();

 
// Routes
router.post('/', checkSchemaTypeMiddlewares, (req,res)=> {
  res.send('Data received successfully');
} );

module.exports = router;
  