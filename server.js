var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  
  mongoose = require('mongoose'),
  Task = require('./api/models/TaskModel'), //created model loading here
  Journey = require('./api/models/JourneyModel')
  bodyParser = require('body-parser');
  
var cors = require('cors');
app.use(cors());
// mongoose instance connection url connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);