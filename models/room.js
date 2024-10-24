const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const RoomSchema = new Schema(

    {
        name: { type: String, required: true },
        backGroundIMG: { type: String, required: true },
        themeDescription: { type: String, required: true },
        connectedPuzzlesID: [{type: Schema.Types.ObjectId, ref: 'Puzzle', required: true}],
        connectedPuzzlesName: [{type: String, ref: 'Puzzle', required: true}]
    },
    
    { timestamps: true },
)

module.exports = mongoose.model('Room', RoomSchema)