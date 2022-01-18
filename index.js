import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { tweetRoute } from "./routes/tweet.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors({ origin: "http://localhost:3000" }));

//Routes
app.use("/", tweetRoute);

//Connect to DB
mongoose
  .connect(process.env.MDB_CONNECT_STRING)
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
