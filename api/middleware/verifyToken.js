import jwt from "jsonwebtoken"

// export const verifyToken = (req, res, next) => {
//     const token = req.cookies.token;
//     console.log("verify token ", token)
//     if (!token) return res.status(401).json({ message: "Not Authenticated" });
//     jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
//         if (err) return res.status(403).json({ message: "Token is valid!" });

//         console.log("Token Verified Successfully:", payload);


//         req.userId = payload.id;

//         next();
//     });


// }

import jwt from "jsonwebtoken"
export const verifyToken = (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies
    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            console.error("Token verification error:", err.message);
            return res.status(403).json({ message: "Token is invalid or expired" });
        }

        console.log("Token payload:", payload);
        req.userId = payload.id;
        req.isAdmin = payload.isAdmin || false; // Attach admin flag
        next();
    });
};






