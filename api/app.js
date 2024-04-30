import express from "express";
import authRoute from "./routes/auth.route.js"
import postRoute from "./routes/post.route.js"
const app = express();

// this is if console ninja doesnot work
// export PATH="$PATH:/Users/rajeshgautam/.console-ninja/.bin"


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
    console.log("Server is ready to roll!")
})