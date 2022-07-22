import express from "express";
const router = express.Router();
import { getLatitudeAndLongitude } from "../controllers/positionController";
import { getAddress } from "../controllers/AddressController";
import { reverseGeocode } from "../controllers/reverseGeoCode";
router.get("/position", getLatitudeAndLongitude);
router.get("/address", getAddress);
router.get("/geolocation", reverseGeocode);
export default router;
