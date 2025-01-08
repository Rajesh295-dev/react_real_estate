import jwt from "jsonwebtoken"

export const shouldBeLoggedIn = async (req, res) => {
    console.log(req.userId)
    res.status(200).json({ message: "Your are Authenticated" });
}


export const shouldBeAdmin = (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Not Authenticated" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            console.error("Token verification error:", err.message);
            return res.status(403).json({ message: "Token is invalid or expired" });
        }

        if (!payload.isAdmin) {
            return res.status(403).json({ message: "Not Authorized.." });
        }

        // If the user is authenticated and an admin
        return res.status(200).json({ message: "You are Authenticated as Admin" });
    });
};



