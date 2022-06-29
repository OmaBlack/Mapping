import express, { Request, Response } from "express";
import axios from "axios";
import schema from "../middleware/validation";
export const getAddress = async (req: Request, res: Response) => {
  try {
    const tomtomKey: string | any = process.env.KEY;
    const { latitude, longitude } = req.body;
    const baseURLAddress: string | any = process.env.baseURLAddress;

    if (!latitude) {
      return res.status(400).json({
        message: "Please Provide a latitude point",
      });
    }
    if (!longitude) {
      return res.status(400).json({
        message: "Please provide a longitude point",
      });
    }
    const { data } = await axios.get(
      `${baseURLAddress}/${latitude},${longitude}.json?key=${tomtomKey}`
    );
    res.send(data);
  } catch (error: any) {
    res.send(error);
  }
};
// https://{baseURL}/search/{versionNumber}/reverseGeocode/{position}.{ext}?key={Your_API_Key}&returnSpeedLimit={returnSpeedLimit}&heading={heading}&radius={radius}&number={number}&returnRoadUse={returnRoadUse}&roadUse={roadUse}&entityType={entityType}&callback={callback}&language={language}&allowFreeformNewline={allowFreeformNewline}&returnMatchType={returnMatchType}&view={view}&mapcodes={mapcodes}&filter={filter}
// https://api.tomtom.com/search/2/geocode
