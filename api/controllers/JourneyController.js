'use strict';


var mongoose = require('mongoose'),
  journey = mongoose.model('Journey');

exports.list_all_journey = function(req, res) {
  journey.find({}, function(err, journey) {
    if (err)
      res.send(err);
    res.json(journey);
  });
};




exports.create_a_journey = function(req, res) {
  var new_journey = new journey(req.body);
  new_journey.save(function(err, journey) {
    if (err)
      res.send(err);
    res.json(journey);
  });
};


exports.read_a_journey = function(req, res) {
  journey.findById(req.params.journeyId, function(err, journey) {
    if (err)
      res.send(err);
    res.json(journey);
  });
};


exports.update_a_journey = function(req, res) {
  journey.findOneAndUpdate({_id: req.params.journeyId}, req.body, {new: true}, function(err, journey) {
    if (err)
      res.send(err);
    res.json(journey);
  });
};


exports.delete_a_journey = function(req, res) {


  journey.remove({
    _id: req.params.journeyId
  }, function(err, journey) {
    if (err)
      res.send(err);
    res.json({ message: 'journey successfully deleted' });
  });
};

exports.delete_all_journeys = function(req, res) {
    journey.remove({}, function(err, journey) {
        if (err)
            res.send(err);
        res.json({message: 'deleted all journeys'})
    })
}