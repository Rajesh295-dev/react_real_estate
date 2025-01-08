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



// export const login = async (req, res) => {
//     //db operations

//     const { username, password } = req.body;

//     try {
//         const user = await prisma.user.findUnique({
//             where: { username }
//         })
//         if (!user) return res.status(401).json({ message: "Invalid Credentials!" })
//         // check if the user is exist or not 
//         const isValidPassword = await bcrypt.compare(password, user.password)
//         if (!isValidPassword) return res.status(401).json({ message: "Invalid Credentials!" })
//         //if there is no user create error

//         // if there is user send cokkie token to the user
//         //res.setHeader("Set-Cookie", "test=" + "myValue").json({ message: "success!!" }
//         const age = 1000 * 60 * 60 * 24 * 7;

//         // const age = 7 * 24 * 60 * 60; // 7 days in seconds
//         const token = jwt.sign(
//             { id: user.id, isAdmin: false },
//             process.env.JWT_SECRET_KEY,
//             { expiresIn: `${age}s` } // Explicitly specify seconds
//         );


//         // const token = jwt.sign({
//         //     id: user.id,
//         //     isAdmin: false,
//         // }, process.env.JWT_SECRET_KEY, { expiresIn: age })

//         console.log("generated token", token)

//         const { password: userPassword, ...userInfo } = user

//         res.cookie("token", token, {
//             httpOnly: true,
//             //secure:true
//             maxAge: age,
//         }).status(200).json(userInfo)


//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ message: "Failed to Login!" })
//     }

// }


export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await prisma.user.findUnique({
            where: { username },
        });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid Credentials!" });
        }

        // Exclude password from response
        const { password: userPassword, ...userInfo } = user;

        // Generate JWT token
        const age = 1000 * 60 * 60 * 24 * 7; // 7 days in milliseconds
        const token = jwt.sign(
            { id: user.id, isAdmin: false },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age / 1000 } // Convert to seconds
        );

        console.log("Generated token:", token);

        // Set cookie with token
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax", // Use "strict" or "none" if necessary
            maxAge: age,
        }).status(200).json(userInfo);

    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({ message: "Failed to Login!" });
    }
};




export const logout = (req, res) => {
    //db operations
    res.clearCookie("token").status(200).json({ message: "Logout Successfully!" })
}