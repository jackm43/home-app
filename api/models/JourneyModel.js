'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journeySchema = new Schema({
    // journey_name: {
    //     type: String
    // },
    // from_address: {
    //     type: String
    // },
    // to_address: {
    //     type: String
    // },
    departure_time: {
        type: String
    },
    arrival_time: {
        type: String
    },
    line: {
        type: String
    },
    travel_time: {
        type: String
    },
    transport_type: {
        type: String
    },
    date: {
        type: String
    }
})

module.exports = mongoose.model('Journey', journeySchema);