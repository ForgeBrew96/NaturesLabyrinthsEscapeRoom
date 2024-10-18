const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const PuzzleSchema = new Schema(

    {
        connectedRoom: { type: String, required: true },
        name: { type: String, required: true },
        task: { type: String, required: true },
        solution: { type: String, required: true },
        availableHints: [{ type: String, required: true }]
    },
    
    { timestamps: true },
)

module.exports = mongoose.model('Puzzle', PuzzleSchema)