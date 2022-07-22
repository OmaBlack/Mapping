import express, { Request, Response } from "express";
import axios from "axios";
export const reverseGeocode = async (req: Request, res: Response) => {
  const baseURL: string | any = process.env.reverseGeocode;
  const {
    originLatitude,
    originLongitude,
    destinationLatitude,
    destinationLongitude,
  } = req.body;

  const origin = {
    point: { latitude: originLatitude, longitude: originLongitude },
  };
  const destination = {
    point: { latitude: destinationLatitude, longitude: destinationLongitude },
  };
  const body = {
    origins: [origin],
    destination:[destination],
  };
  try {
    const response = await axios.post(baseURL, body, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
    res.send("Got it");
  } catch (error:any) {
    res.status(500).send(error.message);
  }
};
