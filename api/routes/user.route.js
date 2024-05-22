import express from "express";
import { getUser, deleteUser, getUsers, updateUser, savePost, profilePosts, getNotificationsNumber } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js"
const router = express.Router();


router.get("/", getUsers)
// we donot fetch user like we fetch post instead we use authetication route
// router.get("/:id", verifyToken, getUser)
router.put("/:id", verifyToken, updateUser)
router.delete("/:id", verifyToken, deleteUser)
router.post("/save", verifyToken, savePost)
router.get("/profilePosts", verifyToken, profilePosts)
router.get("/notification", verifyToken, getNotificationsNumber)




export default router;