
const express = require('express');
const { allUsers, addUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = express.Router();

 
// Routes
router.get('/', allUsers);
router.post('/add-user', addUser);
router.post('/update-user', updateUser);
router.post('/delete-user', deleteUser);

module.exports = router;
  