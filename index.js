const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));

const todos = [];
const completed = [];

app.get("/", (req, res) => {
  res.render('index', {todos: todos, completed: completed});
});

app.post("/", (req, res) => {
  let todoObject = req.body.todoInput;
  let task = {todoObject};
  todos.push(task);
  res.redirect('/');
});

app.post('/complete', (req, res) => {
  let completeObject = req.body;
  let arrayValue = completeObject.arrayKey;
  //console.log(completeObject.arrayKey);
  todos.splice(arrayValue, 1);
  //console.log(completeObject);
  completed.push(completeObject);
  //console.log(completed);
res.redirect('/');
});

app.listen(3000);
