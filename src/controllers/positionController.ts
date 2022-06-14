import express from "express";
import dotenv from "dotenv";
// require('dotenv').config()
dotenv.config();
import axios from "axios";
import { Request, Response } from "express";
const apiKey = process.env.KEY;
const tomtomKey = process.env.TOMTOM;
console.log("api", tomtomKey);
export const getLatitudeAndLongitude = async (req: Request, res: Response) => {
  const { key } = req.body;
  console.log("tomtom", apiKey);
  console.log("query here", req.query);
  
  try {
    const data = await axios.get(
      `https://api.tomtom.com/search/2/geocode/${key}${apiKey}`
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

// const data2 = await axios.get("https://api.tomtom.com/search/2/geocode/2a%2C%20Louis%20Solomon%20street%2C%20Lagos%2C%20Nigeria.json?key=lnbGQ5NgbNlQfuGmwOo7YiI2Gc3YipAX");
//   console.log(data2.data);
//   res.send(data2.data);

// const data = await axios.get(
//   "https://api.tomtom.com/search/2/geocode/2a%2C%20Louis%20Solomon%20street%2C%20Lagos%2C%20Nigeria.json?key=lnbGQ5NgbNlQfuGmwOo7YiI2Gc3YipAX"
// );
