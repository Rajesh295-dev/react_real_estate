import { Server } from "socket.io"
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// console.log("Starting Socket.IO server...");

const io = new Server({
    cors: {
        origin: process.env.CORS_ORIGIN,
    },
});

// Log the CORS origin for debugging
// console.log("CORS Origin:", process.env.CORS_ORIGIN);

let onlineUser = [];
const addUser = (userId, socketId) => {
    const userExists = onlineUser.find((user) => user.userId === userId);
    if (!userExists) {
        onlineUser.push({ userId, socketId })
    }
}



const removeUser = (socketId) => {
    onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
}


const getUser = (userId) => {
    return onlineUser.find((user) => user.userId === userId)
}

io.on("connection", (socket) => {
    // console.log(`New connection: ${socket.id}`);
    socket.on("newUser", (userId) => {
        addUser(userId, socket.id)
        //console.log(`User added: ${userId} with socket ID: ${socket.id}`);
    })
    socket.on("sendMessage", ({ receiverId, data }) => {
        const receiver = getUser(receiverId)
        if (receiver) {
            io.to(receiver.socketId).emit("getMessage", data);
        } else {
            console.error(`User with ID ${receiverId} not found.`);
        }
        // this is old line of code without if condition
        //io.to(receiver.socketId).emit("getMessage", data)
    })
    socket.on("disconnect", () => {
        removeUser(socket.id);
        //console.log(`Socket disconnected: ${socket.id}`);
    })

})

io.listen(4000, () => {
    console.log('Server listening on port 4000');
});