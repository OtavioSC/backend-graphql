const mongoose = require('mongoose');
const { environment } = require('../config');
const env = process.env.NODE_ENV || "development";

mongoose.connect(environment[env].dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to mongodb");
});
