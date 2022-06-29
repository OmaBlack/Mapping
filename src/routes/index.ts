import express from "express";
const router = express.Router();
import { getLatitudeAndLongitude } from "../controllers/positionController";
import { getAddress } from "../controllers/AddressController";

router.get("/position", getLatitudeAndLongitude);
router.get("/address", getAddress);
export default router;
