const mongoose = require('mongoose');
const { connectDB } = require('../db');
const { Player } = require('../models');

const main = async () => {

const players = [

    {
        name: "Alice",
        profileIMG: "https://images.ygoprodeck.com/images/cards_cropped/85914562.jpg",
        age: 25,
        backStory: "At 25, Alice is known for her daring spirit and sharp intellect. Growing up near the rugged cliffs of Cornwall, her early adventures involved scaling steep rock faces and diving into the tumultuous sea below. She is always had a knack for solving riddles, inspired by her grandfathers stories of ancient pirate treasures. She sees the escape room as just another thrilling puzzle waiting to be conquered.",
    },
    {
        name: "Axel",
        profileIMG: "https://64.media.tumblr.com/2763d68ef9149032b0f5c7568c286088/d215f3a87397ec4e-2f/s640x960/a8543b7bce137936b77ad46d3badcabcb0ebdd12.png",
        age: 27,
        backStory: "Axel, 27, has always been drawn to the untamed wilderness. Raised in the dense forests of Oregon, he learned survival skills from his parents, who were wildlife biologists. Axels adventurous spirit took him to the depths of the Amazon and the peaks of the Andes. Hes seen it all, and his experience with natural hazards makes him a valuable team member when navigating Natures Nightmare.",
    },
    {
        name: "Charlie",
        profileIMG: "https://64.media.tumblr.com/25524585ec5c1962827bcdb2f677d2ed/e5158371f3502d41-8b/s640x960/13b11e637264eec941b4b80256a0f37cd7d59829.png",
        age: 33,
        backStory: "At 33, Charlie is a seasoned adventurer with a background in archaeology. He spent years uncovering ancient ruins in the deserts of Egypt and the jungles of Peru. His knowledge of history and ancient traps gives him a unique edge in solving the most complex puzzles. Charlie joined the team to bring his expertise to the digital age of escape rooms.",
    },
    {
        name: "Lora",
        profileIMG: "https://cdna.artstation.com/p/assets/images/images/011/483/472/large/hue-vang-lara-s-moment02.jpg?1529830999",
        age: 26,
        backStory: "Lora, 26, is a marine biologist with a love for the mysteries of the deep sea. Her explorations have taken her to underwater caves and coral reefs teeming with life. Shes fearless, often diving into the unknown to study elusive marine creatures. Loras keen observational skills and calm under pressure are crucial when the team faces aquatic-themed challenges.",
    },
    {
        name: "Nathe",
        profileIMG: "https://cdnb.artstation.com/p/assets/images/images/027/878/445/large/mayank-kumarr-nathan-drake.jpg?1592838204",
        age: 35,
        backStory: "At 35, Nathe is an extreme sports enthusiast with a penchant for high-stakes adventures. From BASE jumping off the Swiss Alps to cave diving in Mexicos cenotes, he is done it all. His physical prowess and quick thinking make him the teams go-to guy for any physically demanding tasks. Nathe sees the escape room as an adrenaline-fueled journey, just another notch on his adventure belt.",
    },

 


]

await Player.insertMany(players);
}

const run = async () => {
    await connectDB();
    await main();
    mongoose.connection.close();
};

run();