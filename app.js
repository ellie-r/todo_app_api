const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const taskController = require('./Controllers/taskController.js')
const cors = require('cors');

app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.options('*', cors({origin: '*', optionsSuccessStatus: 200}));

//display all or completed tasks
app.get('/task', taskController.getTasks);
// add new task
app.post('/task',jsonParser, taskController.addTask)
// mark as complete
app.put('/task/:id', taskController.markAsComplete)
// delete task
app.delete('/task/:id', taskController.deleteTask)


app.listen(3000);