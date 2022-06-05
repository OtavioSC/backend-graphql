const mongoose = require('mongoose');
const { environment } = require('../config');
const { teamSchema } = require('./schemas/teams.js');
const env = process.env.NODE_ENV || "development";

mongoose.connect(environment[env].dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to mongodb");
});

const Teams = mongoose.model('Teams', teamSchema);

module.exports = Teams;