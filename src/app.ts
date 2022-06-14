import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
require('dotenv').config()
// dotenv.config();
import indexRouter from "./routes/index";

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

const PORT = process.env.PORT;

console.log(`server is running a ${PORT}`);

module.exports = app;
