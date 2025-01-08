// import jwt from "jsonwebtoken"

// export const verifyToken = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "Not Authenticated" });
//     jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
//         if (err) return res.status(403).json({ message: "Token is valid!" });

//         req.userId = payload.id;

//         next();
//     });


// }


import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Token is missing" });

    const token = authHeader.split(" ")[1];


    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (err) {
            console.error("Token validation error:", err.message);
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        req.userId = decoded.userId; // Attach userId to the request
        next();
    });
};


