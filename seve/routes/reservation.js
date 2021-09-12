import express from 'express'

const router = express.Router()

import {createReservation, getReservation, deleteReservation} from "../controllers/reservation.js"

router.post('/',createReservation)
router.get('/', getReservation)
router.delete('/:id',deleteReservation)

export default router