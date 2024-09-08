const express = require('express')
var morgan = require('morgan') 
const app = express()
const port = 5000
const fs = require('fs')
const path = require('path')


// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan( 'combined', { stream: accessLogStream }))
 



app.get('/', (req, res) => res.status(200).send(`Hello From / Route`))
app.get('/get-users', (req, res) => res.status(200).send(`Hello From /get-users Route`))


app.post(`/add-user`, (req, res) => res.status(201).send(`Hello From /add-user Route`))
app.put(`/user/:id`, (req, res) => res.status(201).send(`Hello From /user/:id Route`))
app.delete(`/user/:id`, (req, res) => res.send(`Hello From /user/:id Route`))








app.listen(port, () => console.log(`Example app listening on port ${port}!`))