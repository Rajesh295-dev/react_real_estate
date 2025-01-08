import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
import chatRoute from "./routes/chat.route.js"
import messageRoute from "./routes/message.route.js"

// adding zillow page route
import zillowRoute from "./routes/zillow.route.js"

// const PORT = process.env.REACT_APP_PORT || 8800
// console.log("this is the port for backend 🛺", PORT)

const app = express();

// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
//console.log(process.env.CLIENT_URL)
app.use(express.json())
app.use(cookieParser())

// this is if console ninja doesnot work
// export PATH="$PATH:/Users/rajeshgautam/.console-ninja/.bin"

app.get("/api/set-cookie", (req, res) => {
    res.cookie("testCookie", "testValue", {
        httpOnly: true,
        maxAge: 1000 * 60 * 60, // 1 hour
    });
    res.send("Cookie has been set!");
});

app.get("/api/get-cookie", (req, res) => {
    console.log("Request Cookies:", req.cookies); // Should include "token"
    res.json(req.cookies);
});


app.get("/api/debug", (req, res) => {
    res.json({
        cookies: req.cookies,
        headers: req.headers,
        env: process.env,
    });
});

app.get("/api/test-token", (req, res) => {
    const token = "testTokenValue";
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
    res.send("Token cookie has been set!");
});





app.use(
    cors({
        origin: "https://react-real-estate-six.vercel.app",
        // origin: process.env.CLIENT_URL,
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
    })
);


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.use("/api/test", testRoute);

app.use("/api/zillowData", zillowRoute);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the React Real Estate API!");
});


// Health Check Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});


// app.listen(8800, () => {
//     console.log("Server is ready to roll!")
// })

// Export the app for Vercel
export default app;


