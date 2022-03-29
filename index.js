import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./routes/router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://dunker.vercel.app"
        : "http://localhost:3000",
  })
);
app.use(express.json());

//Routes
app.use(router);
//Connect to DB

mongoose
  .connect(process.env.MDB_CONNECT_STRING)
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
