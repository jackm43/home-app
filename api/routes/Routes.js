'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/TaskController');
  var journeyList = require('../controllers/JourneyController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/journeys')
    .get(journeyList.list_all_journey);

  app.route('/newjourney')
    .post(journeyList.create_a_journey)

  app.route('/deletejourneys')
   .delete(journeyList.delete_a_journey)
};
