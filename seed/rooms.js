const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Room, Puzzle } = require('../models');

const main = async () => {
   

    const puzzles = await Puzzle.find({ name: { $in: ["End of the Cave, Time to Leave!", "Remembering Your Route Out"] } });
    const puzzleIds = puzzles.map(Puzzle => Puzzle._id);
    const puzzleNames = puzzles.map(Puzzle => Puzzle.name);

    const mongoose = require('mongoose');

    const gollumsCave = await new Room({
        name: "Escaping Gollums Cave",
        backGroundIMG: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibtd-AVo6zA07YnVvINYi-Y-NKud6E8CtkvgFRUFrDfF48YmH2Qv3ufyQQRc4Dw_iWLmKIVA6UdNCet86lWtwKV0r4tkZam6iJQLAv2BYK47KptGIfsnuQwFvEK4wRMdj636Bhhm6IPtZ4/s400/Just+inside+opening.jpg",
        themeDescription: "Gollums Cave in Utah, also known as the cave of death is a tight and short passage that required daring cave divers to crawl and to swim (completely submerged) through into narrow tunnels to eventually find the end of the cave. Gollums Cave, previously being a miner site, has a shallow amount of oxygen and can leave divers dizzy and disoriented when trying to head back.Can you find any left over tools to help you prepare and escape Gollums Cave?",
        connectedPuzzlesID: puzzleIds,
        connectedPuzzlesName: puzzleNames
    })    
    await gollumsCave.save()

console.log("Created the first Room")

mongoose.connection.close();

}

const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();