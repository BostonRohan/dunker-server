import express from "express";
import getTweets from "../controllers/tweets.js";

const router = express.Router();

//auth
// router.post("/quizzes", auth);

//tweets
router.get("/", getTweets);

export default router;
