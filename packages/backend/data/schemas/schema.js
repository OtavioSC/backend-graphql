const mongoose = require('mongoose');

export const teamsModel = new mongoose.Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    }
});