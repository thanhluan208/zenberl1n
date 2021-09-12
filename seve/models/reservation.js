import mongoose from 'mongoose'

const reservation = mongoose.Schema({
    customer: String,
    telNumber: Number,
    numberOfCustomer: Number,
    date: {
        type: Date,
        default: new Date()
    },
    time: String,
    message:String,
})

const Reservation = mongoose.model("RESERVATION", reservation)

export default Reservation