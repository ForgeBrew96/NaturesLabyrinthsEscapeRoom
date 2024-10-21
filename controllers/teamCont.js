const Team = require('../models/team');

const getAllTeams = async (req, res) => {
    try {
        const Teams = await Team.find()
        res.json(Teams)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTeamsById = async (req, res) => {
    try {
        const { id } = req.params;
        const team = await Team.findById(id)
        if (team) {
            return res.json(team);
        }
        return res.status(404).send('Team with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createTeam = async (req, res) => {
    try {
        const team = await new Team(req.body)
        await team.save()
        return res.status(201).json({
            team,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateTeam = async (req, res) => {
    try {
        let { id } = req.params;
        let team = await Team.findByIdAndUpdate(id, req.body, { new: true })
        if (team) {
            return res.status(200).json(team)
        }
        throw new Error("Team not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Team.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Team deleted");
        }
        throw new Error("Team not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllTeams,
    getTeamsById,
    createTeam,
    updateTeam,
    deleteTeam
}