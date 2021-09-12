import mongoose from 'mongoose'

const feedback = mongoose.Schema({
    customer:String,
    email:String,
    message:String
})

const Feedback = mongoose.model("Feedback", feedback)

export default Feedback