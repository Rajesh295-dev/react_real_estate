import express from "express";
import { getUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js"
const router = express.Router();
router.get("/", getUsers)
// router.get("/:id", verifyToken, getUser)
router.put("/:id", verifyToken, updateUser)
router.delete("/", verifyToken, deleteUser)




export default router;