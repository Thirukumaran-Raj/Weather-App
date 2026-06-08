import express from "express";
import { getWeather } from "../controllers/weatherController.js";

const router = express.Router();

// GET weather by city
router.get("/:city", getWeather);

export default router;