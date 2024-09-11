const router = require('express').Router();




router.get('/', getTodos)
router.get('/add-todo', getTodos)
router.get('/update-todo', getTodos)
router.get('/delete-todo', getTodos)

module.exports = router