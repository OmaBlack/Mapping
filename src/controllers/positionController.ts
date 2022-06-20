import { Request, Response } from "express";
import axios from "axios";
export const getLatitudeAndLongitude = async (req: Request, res: Response) => {
  const tomtomKey = process.env.KEY;
  const { address } = req.body;
  const baseURL = process.env.baseURL;
  try {
    if (!address) {
      return res.status(400).json({
        message: "Please provide an address",
      });
    }
    const data = await axios.get(`${baseURL}/${address}${tomtomKey}`);
    const result = data.data.results;
    let storeArray: number[] = [];
    let position: string = "";
    for (let element of result) {
      storeArray.push(element.score);
    }
    const max: number = Math.max(...storeArray);
    for (const element of result) {
      if (element.score === max) {
        position = element.position;
      }
    }
    if (position === "") {
      return res.status(404).send("could not find position");
    }
    return res.json({ successfull: position });
  } catch (error:any) {
    res.json({ error: error.message });
  }
};

// https://api.tomtom.com/search/2/geocode
