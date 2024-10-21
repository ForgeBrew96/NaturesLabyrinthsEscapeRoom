const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Room, Puzzle } = require('../models');

const main = async () => {

    const mongoose = require('mongoose');

    const gollumsCavePuzzles = [
        {
            connectedRoom: "Gollums Cave",
            name: "End of the Cave, Time to Leave!",
            task: "Find the key to the oxygen tank container. Find the shovel to remove the debris from the route back.",
            solution: "The key is in the locked container on the wall. Break it open with the shovel. The Oxygen tanks chest is in the center of the room. Dust off the wording on the container to read what it is. The shovel fell in the water towards the back of the room.",
            availableHints: [
                "You'll need a key to open the chest.",
                "Thankfully the key box is small enough to break, but now without some kind of tool.",
                "You'll need to remove some of the debris in order to fit back through the water tunnel."
            ]
        },
        {
            connectedRoom: "Gollums Cave",
            name: "Remembering Your Route Out",
            task: "Choose the correct paths to get out of the cave!",
            solution: "Swim upwards through the water tunnel. Crawl through the feet level tunnel. Take the left route out to the exit!",
            availableHints: [
                "You know you left markers for the group to head back and recorded them somewhere!",
                "Did I bring my journal?!?!"
            ]
        }
    ];

    await Puzzle.insertMany(gollumsCavePuzzles);
    console.log("Created the Gollum's Cave puzzles");
    
    mongoose.connection.close();

}

const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();