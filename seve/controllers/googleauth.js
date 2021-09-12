import Googleauth from "../models/googleauth.js";

export const googleLogin = async (req,res) => {
    const {email, name} = req.body
    try {
        const existingUsers = await Googleauth.findOne({ email })

        if( existingUsers ) return res.status(400).json({message: "User already exists"})

        const result = await Googleauth.create({ email, name})

        res.status(201).json(result)
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}