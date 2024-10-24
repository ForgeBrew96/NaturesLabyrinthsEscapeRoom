const inventory = document.querySelector(`.inventory`)
const hintButton = document.querySelectorAll(`.hintButton`)
const hintCount = document.querySelector(`.hintCount`)
const playerName = document.querySelectorAll(`.playerName`)
const Oxygen = document.querySelectorAll(`.Oxygen`)
const playerImage = document.querySelectorAll(`.playerimg`)
console.log(playerName[0])

    const fetchAlicesData = async () => {
            const response = await fetch('http://localhost:3001/player/671591da0b7c95595ddf2ebe'); 
            const alice = await response.json();
            console.log(alice);
            console.log(alice.name)
            playerName[0].innerHTML = alice.name
            playerImage[0].src = alice.profileIMG
    };
    fetchAlicesData()

    const fetchAxelsData = async () => {
        const response = await fetch('http://localhost:3001/player/671591da0b7c95595ddf2ebf'); 
        const Axel = await response.json();
        console.log(Axel);
        console.log(Axel.name)
        playerName[1].innerHTML = Axel.name
        playerImage[1].src = Axel.profileIMG
};
fetchAxelsData()

    const fetchCharliesData = async () => {
        const response = await fetch('http://localhost:3001/player/671591da0b7c95595ddf2ec0'); 
        const Charlie = await response.json();
        console.log(Charlie);
        console.log(Charlie.name)
        playerName[2].innerHTML = Charlie.name
        playerImage[2].src = Charlie.profileIMG
};
fetchCharliesData()

const fetchLorasData = async () => {
    const response = await fetch('http://localhost:3001/player/671591da0b7c95595ddf2ec1'); 
    const Lora = await response.json();
    console.log(Lora);
    console.log(Lora.name)
    playerName[3].innerHTML = Lora.name
    playerImage[3].src = Lora.profileIMG
};
fetchLorasData()

const fetchNathesData = async () => {
    const response = await fetch('http://localhost:3001/player/671591da0b7c95595ddf2ec2'); 
    const Nathe = await response.json();
    console.log(Nathe);
    console.log(Nathe.name)
    playerName[4].innerHTML = Nathe.name
    playerImage[4].src = Nathe.profileIMG
};
fetchNathesData()
