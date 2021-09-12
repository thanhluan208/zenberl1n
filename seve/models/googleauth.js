import mongoose from 'mongoose'

const googleauth = mongoose.Schema(
    {
        email:String,
        name:String,
    }
)

export default mongoose.model("googleauth",googleauth)