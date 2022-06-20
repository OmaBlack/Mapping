import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import startup from "./startup";
dotenv.config();
if (!process.env.KEY) {
  console.log("Please set the KEY environment variable");
  process.exit(1);
}
var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(startup);

module.exports = app;
