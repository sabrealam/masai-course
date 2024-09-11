const Todos = require('../models/todosModel');

function getTodo(req, res){
    try {
        const todos = Todos.find(); 
        res.send(todos)
    } catch (error) {
        res.status(400).send(error)
    }
}

function addTodo(req, res){
    let {title, description} = req.body;
    try {
        const todo = new Todos({title, description});
        todo.save();
        res.send(todo)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function updateTodo(req, res){
    let id = req.params.id;
    let {title, description} = req.body;
    try {
            await Todos.findByIdAndUpdate(id, {title, description});
            const todo = Todos.findById(id);
            res.send(todo)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function deleteTodo(req, res){
    let id = req.params.id;
    try {
            await Todos.findByIdAndDelete(id);
            const todo = Todos.findById(id);
            res.send(todo)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {

    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
}