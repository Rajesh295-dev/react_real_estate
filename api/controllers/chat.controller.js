import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
    const tokenUserId = req.userId;


    try {

        const chats = await prisma.chat.findMany();
        where: {
            userIDs: {
                hasSome: [tokenUserId]
            }
        }
        res.status(200).json(chats)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to get Chats " })
    }
}

export const getChat = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        const chat = await prisma.chat.findUnique({
            where: {
                id: req.params.id,
                userIDs: {
                    hasSome: [tokenUserId],
                }
            }
        });
        res.status(200).json(chat)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to get Chat " })
    }
}

export const postChat = async (req, res) => {

    const tokenUserId = req.userId

    try {

        const newChat = await prisma.chat.create({
            data: {
                userIDs: [tokenUserId, req.body.receiverId]
            }
        });
        res.status(200).json(newChat)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to post Chats " })
    }
}

export const readChat = async (req, res) => {

    try {

        const users = await prisma.user.findMany();
        res.status(200).json(users)

    } catch (err) {
        console.log(err)
        req.status(500).json({ message: "Failed to read Chats " })
    }
}

