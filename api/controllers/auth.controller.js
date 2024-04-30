import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
    const { username, password, email, } = (req.body);
    console.log(req.body)
    //db operations

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
    //create a new user 

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        }
    });
    console.log(newUser)

}
export const login = (req, res) => {
    //db operations
}
export const logout = (req, res) => {
    //db operations
}