const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Player, Team, Room, Puzzle } = require('./models')

const playerCont = require('./controllers/playerCont');
const teamCont = require('./controllers/teamCont');

const puzzleCont = require('./controllers/puzzleCont');
const roomCont = require('./controllers/roomCont');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());

(async () => {
    try {
        await connectDB();
    } catch (error) {
        console.error('Failed to connect to the database');
        process.exit(1); // Exit process if the DB connection fails
    }
})();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send(`Employee Section of Nature's Labrynth: Escape the Abyss`))

app.get('/player', playerCont.getAllPlayers)
app.get('/player/:id', playerCont.getPlayersById)
app.post('/player', playerCont.createPlayer)
app.put('/player/:id', playerCont.updatePlayer)
app.delete('/player/:id', playerCont.deletePlayer)

app.get('/team', teamCont.getAllTeams)
app.get('/team/:id', teamCont.getTeamsById)
app.post('/team', teamCont.createTeam)
app.put('/team/:id', teamCont.updateTeam)
app.delete('/team/:id', teamCont.deleteTeam)

app.get('/puzzle', puzzleCont.getAllPuzzles)
app.get('/puzzle/:id', puzzleCont.getPuzzlesById)
app.post('/puzzle', puzzleCont.createPuzzle)
app.put('/puzzle/:id', puzzleCont.updatePuzzle)
app.delete('/puzzle/:id', puzzleCont.deletePuzzle)

app.get('/room', roomCont.getAllRooms)
app.get('/room/:id', roomCont.getRoomsById)
app.post('/room', roomCont.createRoom)
app.put('/room/:id', roomCont.updateRoom)
app.delete('/room/:id', roomCont.deleteRoom)

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
});