const express = require('express');
const cors = require('cors');
const logRequest = require('./middlewares/logger.js');
const validateTodo = require('./middlewares/validator.js');
const errorhandler = require('./middlewares/errorHandler.js');
const app = express(); 

app.use(express.json());// Parse JSON bodies

const corsOptions = {
  origin: 'http://localhost:3001', 
};
   
app.use(cors(corsOptions));

app.use(logRequest);

let todos = [
  { id: 1, task: 'Take child to Creche', completed: true },  
  { id: 2, task: 'Buy groceries', completed: false },
  { id: 3, task: 'Clean the house', completed: true },
  { id: 4, task: 'Finish homework', completed: false },
  { id: 5, task: 'Call Mum', completed: true },
];
// GET ALL - Read all todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// GET one Todo by ID
app.get('/todos/:id', (req, res, next) => {
  try{
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid ID');
}
  res.status(200).json(todos.find((t) => t.id === id)); 

  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// Validate the POST request
app.post('/todos', validateTodo, (req, res, next) => {
  try { 
    const {task} = req.body;
  
  if (!task) return res.status(400).json({ message: 'Task is required' });
  const newTodo = { id: todos.length + 1, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);

  }catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// GET active todos
app.get('/todos/active', (req, res, next) => {
  try{
    const activeTodos = todos.filter((todo) => !todo.completed);
  res.status(200).json(activeTodos);

  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

// PATCH - Update a todo by ID 
app.patch('/todos/:id',validateTodo, (req, res, next) => {
  try {
    // Validate the request body using JOI
   const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: 'Not found' });
  }
  Object.assign(todo, req.body);
  res.status(200).json(todo);

  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

app.delete('/todos/:id', (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
  const InitialLength = todos.length;
  todos = todos.filter((t) => t.id !== id);
  if (todos.length === InitialLength) 
    return res.status(404).json({ error: 'Not found' });
    res.status(204).send();

  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

app.use(errorhandler); // Error handling middleware



const PORT = 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
