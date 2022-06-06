import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'League',
        required: true
    },
    trophies: Int
})

export default mongoose.model('Team', Schema)