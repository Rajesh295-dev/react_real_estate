import prisma from "../lib/prisma.js";
export const getUsers = async (req, res) => {
    console.log("it works!!!")
    try {

        const users = await prisma.user.findMany();
        res.status(200).json(users)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to get Users " })
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id }
        });
        res.status(200).json(user)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to get User " })
    }
}


export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const body = req.body;
    if (id !== tokenUserId) {
        return res.status(403).json({ message: "NOt Authorized!" })
    }
    try {
        const updatedUser = await prisma.user.update({
            where: { id },
            data: body,
        });
        res.status(200).json(updatedUser)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to update User " })
    }
}




export const deleteUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to get delete User " })
    }
}