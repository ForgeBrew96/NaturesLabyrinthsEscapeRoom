const mongoose = require('mongoose');

const Team = require('./team');
const Player = require('./player'); 
const Room = require('./room'); 
const Puzzle = require('./puzzle'); 

module.exports = {
    Team,
    Player,
    Room,
    Puzzle
};