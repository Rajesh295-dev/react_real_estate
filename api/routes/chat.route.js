import express from "express";

import { verifyToken } from "../middleware/verifyToken.js"
import { getChat, getChats, postChat, readChat } from "../controllers/chat.controller.js";
const router = express.Router();


router.get("/", verifyToken, getChats)
router.get("/:id", verifyToken, getChat)
router.post("/", verifyToken, postChat)
router.put("/read/:id", verifyToken, readChat)




export default router;