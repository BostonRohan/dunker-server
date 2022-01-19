import express from "express";
import getTweets from "../controllers/tweets.js";
import createUser from "../controllers/createUser.js";

const router = express.Router();

//auth
router.post("/quizzes/signup", createUser);

//tweets
router.get("/", getTweets);

export default router;
