require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

let todos = [
  { id: 1, task: 'Take child to Creche', completed: true },  
  { id: 2, task: 'Buy groceries', completed: false },
  { id: 3, task: 'Clean the house', completed: true },
  { id: 4, task: 'Finish homework', completed: false },
  { id: 5, task: 'Call Mum', completed: true },
];

// GET one Todo by ID
app.get('/todos/1', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === 1);
  if (!todo) {return res.status(404).json({ message: 'Todo not found' });
}
  res.status(200).json(todo);
});

// Validate the POST request
app.post('/todos', (req, res) => {
  const {task} = req.body;
  if (!task) return res.status(400).json({ message: 'Task is required' });
  const newTodo = { id: todos.length + 1, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// GET active todos
app.get('/todos/active', (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.completed === false);
  res.status(200).json(activeTodos);
});

//app.patch('/todos/:id', (req, res) => {
  //const todo = todos.find((item) => item.id === parseInt(req.params.id, 10));
    //if (!todo) return res.status(404).json({ message: 'Todo not found' });
    //object.assign(todo, req.body);
    //res.status(200).json(todo);
//});

//app.delete('/todos:id', (req, res) => {
 //const id = parseInt(req.params.id);
 //const InitialLength = todos.length;
 //todos = todos.filter((t) => t.id !== id);
 //if (todos.length === InitialLength) 
    //return res.status(404).json({ error: 'Not found' });
    //res.status(204).send();
//});

//app.use((err, req, res, next) => {
  //console.error(err.stack);
  //res.status(500).json({ error: 'Internal Server Error' });
//});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});