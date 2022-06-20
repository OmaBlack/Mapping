import express from "express";
import indexRouter from "./routes/index";

var app = express();

app.use("/", indexRouter);
export default app;
