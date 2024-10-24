// Fetching All The Data====================
const fetchPlayers = async () => {
    const response = await fetch('http://localhost:3001/player');
    return response.json();
};

const fetchTeams = async () => {
    const response = await fetch('http://localhost:3001/team');
    return response.json();
};

const fetchPuzzles = async () => {
    const response = await fetch('http://localhost:3001/puzzle');
    return response.json();
};

const fetchRooms = async () => {
    const response = await fetch('http://localhost:3001/room');
    return response.json();
};

const getEscapeRoomData = async () => {
    try {
        const [players, teams, puzzles, rooms] = await Promise.all([fetchPlayers(), fetchTeams(), fetchPuzzles(), fetchRooms()]);

        console.log({ players, teams, puzzles, rooms });

        return { players, teams, puzzles, rooms };

    } catch (e) {
        console.error('Error fetching escape room information:', e);
    }
}

function processTeams(teams) {
    // Logic to process teams
    teams.forEach(team => {
        console.log(`Team name: ${team.teamName}`);
    });
}

getEscapeRoomData().then(data => {
    const { players, teams, puzzles, rooms } = data;
    console.log(players)
    console.log(teams)
    console.log(puzzles)
    console.log(rooms)
    processTeams(teams);
})


const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const usernameInput = document.querySelector('.logInUsername');
const passwordInput = document.querySelector('.logInPassword');
const enterAdventureLink = document.getElementById('enterAdventureLink');
const createAccountButton = document.querySelector('.createNewAccount');

const validateInputs = (username, password, teams) => {
    const isValid = teams.some(team => team.userName === username && team.passWord === password);
    console.log(`Validation result for ${username}: ${isValid}`);
    return isValid;
};

async function checkInputs() {
    const teams = await fetchTeams();
    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log(`Username: ${username}, Password: ${password}`);

    const isValid = validateInputs(username, password, teams);
    console.log(`IsValid: ${isValid}`);
    enterAdventureLink.style.pointerEvents = isValid ? 'auto' : 'none';
    enterAdventureLink.style.opacity = isValid ? 1 : 0.5;
}

document.addEventListener('DOMContentLoaded', () => {
    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);
});

document.addEventListener('DOMContentLoaded', () => {
    const birdWater = document.getElementById('birdWater');
    birdWater.play();
});