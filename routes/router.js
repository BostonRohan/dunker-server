import express from "express";
import getTweets from "../controllers/tweets/tweets.js";
import createUser from "../controllers/auth/createUser.js";
import loginUser from "../controllers/auth/loginUser.js";
import quiz from "../controllers/quiz/quiz.js";
import getAns from "../middleware/getAns.js";

const router = express.Router();

//auth
router.post("/quizzes/signup", createUser);
router.post("/quizzes/login", loginUser);

//quizzes
router.post(
  ["/quiz/team", "/quiz/nba", "/quiz/hard", "/quiz/player"],
  getAns,
  quiz
);

//tweets
router.get("/", getTweets);

export default router;
