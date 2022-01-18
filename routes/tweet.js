import express from "express";
import getTweets from "../controllers/tweets.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await getTweets());
});

export { router as tweetRoute };
