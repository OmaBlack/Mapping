import { Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

export const getLatitudeAndLongitude = async (req: Request, res: Response) => {
  const tomtomKey = process.env.KEY;
  const { key } = req.body;
  try {
    const data = await axios.get(
      `https://api.tomtom.com/search/2/geocode/${key}${tomtomKey}`
    );
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
        console.log("position", element.position);
      }
    }
    res.json({ position });
  } catch (error) {
    res.json({ error });
  }
};
