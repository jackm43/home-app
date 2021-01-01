'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weatherSchema = new Schema({
    temp: {
        type: Number
    },
    feels_like: {
        type: Number
    },
    humidity: {
        type: Number
    },
    sunset: {
        type: Number
    }
})

module.exports = mongoose.model('Weather', weatherSchema);