const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const PlayerSchema = new Schema(

    {
        name: { type: String },
        profileIMG: { type: String, required: true },
        age: { type: Number, required: true },
        backStory: { type: String, required: true },
    },

    { timestamps: true },
)

module.exports = mongoose.model('Player', PlayerSchema)

//The data is meant to be fictional data for the characters players can choose to play as, for the escape room. They will input their own name for their character though.