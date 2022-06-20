import express from "express";
const router = express.Router();
import { getLatitudeAndLongitude } from "../controllers/positionController";

router.get("/position", getLatitudeAndLongitude);

export default router;
