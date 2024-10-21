const Room = require('../models/room');

const getAllRooms = async (req, res) => {
    try {
        const Rooms = await Room.find()
        res.json(Rooms)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRoomsById = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id)
        if (room) {
            return res.json(room);
        }
        return res.status(404).send('Room with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createRoom = async (req, res) => {
    try {
        const room = await new Room(req.body)
        await room.save()
        return res.status(201).json({
            room,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateRoom = async (req, res) => {
    try {
        let { id } = req.params;
        let room = await Room.findByIdAndUpdate(id, req.body, { new: true })
        if (room) {
            return res.status(200).json(room)
        }
        throw new Error("room not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Room.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Room deleted");
        }
        throw new Error("Room not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllRooms,
    getRoomsById,
    createRoom,
    updateRoom,
    deleteRoom
}