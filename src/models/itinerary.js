const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itineraryActivitySchema = new Schema(
    {
        name: String,
        duration: Number, // Time in minutes
        location: String, 
    }
);

const itinerarySchema = new Schema(
    {
        itineraryActivities: {
            type: [itineraryActivitySchema]
        },

        availableDates: {
            type: [Date]
        },

        pickUpLocation: {
            type: String
        },

        DropOffLocation: {
            type: String
        },

        price: {
            type: Number
        },

        accesibility: {
            type: String
        },

        timeline: {
            type: String
        },

        language: {
            type: String
        },

        isBooked: {
            type: Boolean
        },

        isActive: {
            type: Boolean
        }
    }
);

module.exports = mongoose.model('Itinerary', itinerarySchema);