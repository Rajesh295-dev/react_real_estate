

import jwt from "jsonwebtoken"
export const verifyToken = (req, res, next) => {

    console.log("verified token", token)
    const token = req.cookies?.token; // Get token from cookies
    if (!token) {
        return res.status(401).json({ message: "Token is missing..." });
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






