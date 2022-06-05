const mongoose = require('mongoose');

export const teamsSchema = new mongoose.Schema({
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