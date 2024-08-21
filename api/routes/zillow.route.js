import express from "express";
import { getZillowData } from "../controllers/zillow.controller.js";

const router = express.Router();

router.get("/", getZillowData)


export default router;