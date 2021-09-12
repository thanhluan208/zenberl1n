import express from 'express'

const router = express.Router()

import { createTestimonial, getTestimonial } from '../controllers/testimonial.js'

router.post('/', createTestimonial)
router.get('/', getTestimonial)

export default router