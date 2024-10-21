const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Player, Team } = require('../models');

const main = async () => {
    // const Alice = await Player.findOne({ name: 'Alice' });
    // const Axel = await Player.findOne({ name: 'Axel' });
    // const Charlie = await Player.findOne({ name: 'Charlie' });
    // const Lora = await Player.findOne({ name: 'Lora' });
    // const Nathe = await Player.findOne({ name: 'Nathe' });

    const players = await Player.find({ name: { $in: ["Alice", "Axel", "Charlie", "Lora", "Nathe"] } });
    const playerIds = players.map(player => player._id);
    const playerNames = players.map(player => player.name);

    const mongoose = require('mongoose');

    const Team1 = await new Team({
        userName: 'Lucemon',
        passWord: 'Survivors',
        teamName: 'Lucemon Survivors',
        memberCount: 5,
        playerId: playerIds,
        playerNames: playerNames,
        hintsLeft: 3,
        inventory: [],
        roomsCompleted: []
    })    
    await Team1.save()

console.log("Created the first Team!")

mongoose.connection.close();

}

const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();