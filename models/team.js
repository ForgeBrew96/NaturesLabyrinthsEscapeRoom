const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const TeamSchema = new Schema(
    
    {
        userName: { type: String, required: true},
        passWord: { type: String, required: true},
        teamName: { type: String, required: true },
        memberCount: { type: Number },
        playerId: [{type: Schema.Types.ObjectId, ref: 'Player'}],
        playerNames: [{type: String, required: true}],
        hintsLeft: { type: Number, required: true, min: 0, max: 3 },
        inventory: [{ type: String }], //will use emojis to inventory items
        roomsCompleted: [{type: Schema.Types.ObjectId, ref: 'Room'}]
    },

    { timestamps: true },
)

module.exports = mongoose.model('Team', TeamSchema)