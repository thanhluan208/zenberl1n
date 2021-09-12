import mongoose from 'mongoose'

const testimonial = mongoose.Schema({
    email:String,
    image:String,
    message:String,
    name:String,
    star:Number,
    createAt: {
        type:Date,
        default:new Date().toUTCString()
    }
})

const Testimonial = mongoose.model("TESTIMONIAL", testimonial)

export default Testimonial