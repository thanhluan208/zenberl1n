import Reservation from "../models/reservation.js"

import mongoose from 'mongoose'

export const createReservation = async (req,res) => {
    const reservation = req.body

    const newReservation = new Reservation(reservation)

    try {
        await newReservation.save()

        res.status(201).json({newReservation})
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const getReservation = async (req,res) => {
    try {
        const reservation = await Reservation.find()

        res.status(200).json(reservation)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const deleteReservation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Reservation.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}