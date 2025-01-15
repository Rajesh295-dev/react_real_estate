import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const { username, password, email, } = (req.body);
    // console.log(req.body)
    //db operations

    try {
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // console.log(hashedPassword)
        //create a new user 

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        });
        // console.log(newUser)
        res.status(201).json({ message: "User created Successfully!" })
    } catch (err) {
        res.status(500).json({ message: "Failed to create user!" });
    }


}



//it will send the token via Cookies 

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // CHECK IF THE USER EXISTS

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

        // CHECK IF THE PASSWORD IS CORRECT

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid Credentials!" });

        // GENERATE COOKIE TOKEN AND SEND TO THE USER

        // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: false,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        );

        const { password: userPassword, ...userInfo } = user;

        // res.status(200).json({
        //     token,
        //     userInfo,
        // });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: age,
        })
            .status(200)
            .json(userInfo);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
};






export const logout = (req, res) => {
    //db operations
    res.clearCookie("token").status(200).json({ message: "Logout Successfully!" })
}