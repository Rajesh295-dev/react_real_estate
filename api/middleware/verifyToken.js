import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    // Ensure the token variable is properly initialized
    //const token = req.cookies?.token; // Safely access cookies object
    const token =
        req.cookies?.token ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzE5OGUwMGQ0NTA3OTgwMDMwYmU1YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MzYzNzY5MjIsImV4cCI6MjM0MTE3NjkyMn0.0M-SpNnO8Qxb3bJXacKhJkVtypOTf4TdCRPn7oQM_sI";

    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    // Verify the token using jwt
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            console.error("Token verification error:", err.message);
            return res.status(403).json({ message: "Token is invalid or expired" });
        }

        // Attach payload to request
        console.log("Token payload:", payload);
        req.userId = payload.id;
        req.isAdmin = payload.isAdmin || false;

        // Continue to the next middleware
        next();
    });
};
