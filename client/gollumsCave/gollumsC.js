const inventory = document.querySelector(`.inventory`)
const hintButton = document.querySelector(`.hintButton`)
const hintCount = document.querySelector(`.hintCount`)
const playerName = document.querySelectorAll(`.playerName`)
const gameContentText = document.querySelector(`.gameContentText`)
const Oxygen = document.querySelectorAll(`.Oxygen`)
const playerImage = document.querySelectorAll(`.playerimg`)
const screen = document.querySelector(`#mainScreenImage`)
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

// const fetchNathesData = async () => {
//     const response = await fetch('http://localhost:3001/player/671591da0b7c95595ddf2ec2');
//     const Nathe = await response.json();
//     console.log(Nathe);
//     console.log(Nathe.name)
//     playerName[4].innerHTML = Nathe.name
//     playerImage[4].src = Nathe.profileIMG
// };
// fetchNathesData()

const fetchRoomData = async () => {
    const response = await fetch('http://localhost:3001/room/6716957c6b7180b852acaa20');
    const gollumsCave = await response.json();
    console.log(gollumsCave);
    console.log(gollumsCave.backGroundIMG)
    // screen.src = gollumsCave.backGroundIMG
};
fetchRoomData()

const fetchTeamData = async () => {
    const response = await fetch('http://localhost:3001/team/6716bcf54c071a1bc6509510');
    const Lucemon = await response.json();
    console.log(Lucemon);
    console.log(Lucemon.hintsLeft)
    console.log(Lucemon.inventory)
    inventory.innerHTML = `Inventory: ${Lucemon.inventory}`
    hintCount.innerHTML = `Hints: ${Lucemon.hintsLeft}`
};
fetchTeamData()

const fetchFirstPuzzleData = async () => {
    const response = await fetch('http://localhost:3001/puzzle/67168f291f020c3e8e7c7198');
    const EndOfCave = await response.json();
    console.log(EndOfCave);
    console.log(EndOfCave.availableHints)
    console.log(EndOfCave.solution)
};
fetchFirstPuzzleData()

let hintClickCount = 0
const provideHint = async () => {
    const responseTeam = await fetch('http://localhost:3001/team/6716bcf54c071a1bc6509510');
    const Lucemon = await responseTeam.json();
    const response = await fetch('http://localhost:3001/puzzle/67168f291f020c3e8e7c7198');
    const EndOfCave = await response.json();

    if (hintClickCount === 0) {
        alert(EndOfCave.availableHints[0])
         hintCount.innerHTML = `Hints: 2`
    } else if (hintClickCount === 1) {
        alert(EndOfCave.availableHints[1])
         hintCount.innerHTML = `Hints: 1`
    } else {
        alert(EndOfCave.availableHints[2])
         hintCount.innerHTML = `Hints: 0`
    }

    hintClickCount++;
}
hintButton.addEventListener('click', provideHint)

const fetchSecondPuzzleData = async () => {
    const response = await fetch('http://localhost:3001/puzzle/67168f291f020c3e8e7c7199');
    const almostOut = await response.json();
    console.log(almostOut);
    console.log(almostOut.availableHints)
    console.log(almostOut.solution)
};
fetchSecondPuzzleData()

            document.addEventListener('DOMContentLoaded', () => {    
                const itemButtons = document.querySelectorAll('.item-button');

                itemButtons.forEach(button => {        
                    button.addEventListener('click', async () => {            
                        const item = button.getAttribute('data-item');                      
                        try {                
                            const teamResponse = await fetch(`http://localhost:3001/team/6716bcf54c071a1bc6509510`);                
                            const teamData = await teamResponse.json();                
                            let updatedInventory = teamData.inventory.slice();               
                            if (item === '🫁') {                    
                                if (teamData.inventory.includes('🗝️')) {                        
                                    updatedInventory.push('🫁')                    
                                } else {                        
                                    alert(`No way that's opening without a Key 🗝️`);                        
                                    gameContentText.innerText = `No way that's opening without a Key 🗝️`;                        
                                    return;                    
                                }                    
                            } else if (item === '🗝️') {                    
                                if (teamData.inventory.includes('🥄')) {                         
                                    updatedInventory.push('🗝️')                      
                                } else {                        
                                    alert(`That's locked in good, but a good hit should bust it open 🛠️.`);                        
                                    gameContentText.innerText = `That's locked in good, but a good hit should bust it open 🛠️.`;                        
                                    return;                    
                                }                    
                            } else if (item === '🪨') {                    
                                if (teamData.inventory.includes('🥄') && teamData.inventory.includes('🫁')) {                         
                                    alert(`We're Getting OUT of here!`)                      
                                } else {                        
                                    alert(`We'll need oxygen and something to move these in order to start heading back.`);                        
                                    gameContentText.innerText = `We'll need oxygen and something to move these in order to start heading back.`;                                         
                                }                    
                            } else {                    
                                updatedInventory.push(item);                 
                            }                
                            
                                if (teamData.inventory.includes(item)) {
                                    alert(`Nothing else to grab from here`);
                                } else if (item != '🪨') {
                                    const updatedInventory = teamData.inventory.slice();
                                    updatedInventory.push(item);
                            
                                    const updateResponse = await fetch(`http://localhost:3001/team/6716bcf54c071a1bc6509510`, {
                                        method: 'PUT',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({ inventory: updatedInventory })
                                    });
                            
                                    if (updateResponse.ok) {
                                        alert(`Item ${item} added to inventory! 🎉`);
                                    } else {
                                        alert('Error adding item to inventory.');
                                    }
                                }
                            } catch (error) {
                                console.error('Error:', error);
                            }
                    })    
                })
            });

document.addEventListener('DOMContentLoaded', () => {
    const wetCavesounds = document.getElementById('wetCavesounds');
    wetCavesounds.play();
});