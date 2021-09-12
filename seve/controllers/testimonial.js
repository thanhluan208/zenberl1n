import Testimonial from "../models/testimonial.js"

export const createTestimonial = async (req,res) => {
    const testimonial = req.body

    const newTestimonial = new Testimonial(testimonial)

    try {
        await newTestimonial.save()

        res.status(201).json({newTestimonial})
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const getTestimonial = async (req,res) => {
    try {
        const testimonial = await Testimonial.find()

        res.status(200).json(testimonial)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}