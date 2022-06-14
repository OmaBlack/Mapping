import express from "express";
import { Request, Response } from "express";
const router = express.Router();
import { getLatitudeAndLongitude } from "../controllers/positionController";

router.post("/postion", getLatitudeAndLongitude);

export default router;
