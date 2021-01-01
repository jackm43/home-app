'use strict';


var mongoose = require('mongoose'),
  weather = mongoose.model('Weather');

exports.list_all_weather = function(req, res) {
  weather.find({}, function(err, weather) {
    if (err)
      res.send(err);
    res.json(weather);
  });
};




exports.create_a_weather = function(req, res) {
  var new_weather = new weather(req.body);
  new_weather.save(function(err, weather) {
    if (err)
      res.send(err);
    res.json(weather);
  });
};


exports.read_a_weather = function(req, res) {
  weather.findById(req.params.weatherId, function(err, weather) {
    if (err)
      res.send(err);
    res.json(weather);
  });
};


exports.update_a_weather = function(req, res) {
  weather.findOneAndUpdate({_id: req.params.weatherId}, req.body, {new: true}, function(err, weather) {
    if (err)
      res.send(err);
    res.json(weather);
  });
};


exports.delete_a_weather = function(req, res) {


  weather.remove({
    _id: req.params.weatherId
  }, function(err, weather) {
    if (err)
      res.send(err);
    res.json({ message: 'weather successfully deleted' });
  });
};

exports.delete_all_weathers = function(req, res) {
    weather.remove({}, function(err, weather) {
        if (err)
            res.send(err);
        res.json({message: 'deleted all weathers data'})
    })
}