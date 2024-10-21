const Puzzle = require('../models/puzzle');

const getAllPuzzles = async (req, res) => {
    try {
        const Puzzles = await Puzzle.find()
        res.json(Puzzles)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPuzzlesById = async (req, res) => {
    try {
        const { id } = req.params;
        const puzzle = await Puzzle.findById(id)
        if (puzzle) {
            return res.json(puzzle);
        }
        return res.status(404).send('Puzzle with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPuzzle = async (req, res) => {
    try {
        const puzzle = await new Puzzle(req.body)
        await puzzle.save()
        return res.status(201).json({
            puzzle,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updatePuzzle = async (req, res) => {
    try {
        let { id } = req.params;
        let puzzle = await Puzzle.findByIdAndUpdate(id, req.body, { new: true })
        if (puzzle) {
            return res.status(200).json(puzzle)
        }
        throw new Error("Player not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePuzzle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Puzzle.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Puzzle deleted");
        }
        throw new Error("Puzzle not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPuzzles,
    getPuzzlesById,
    createPuzzle,
    updatePuzzle,
    deletePuzzle
}