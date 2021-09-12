import express from 'express'

const router = express.Router()

import { createFeedback,getFeedback } from '../controllers/feedback.js'

router.post('/', createFeedback)
router.get('/', getFeedback)

export default router

