import prisma from "../lib/prisma.js";




export const addMessage = async (req, res) => {

    try {
        res.status(200).json(users)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to get Users " })
    }
}



