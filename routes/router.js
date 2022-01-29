import express from "express";
import getTweets from "../controllers/tweets/tweets.js";
import createUser from "../controllers/auth/createUser.js";
import loginUser from "../controllers/auth/loginUser.js";
import loggedIn from "../controllers/auth/loggedIn.js";
import logoutUser from "../controllers/auth/logoutUser.js";
import quiz from "../controllers/quiz/quiz.js";
import getAns from "../middleware/getAns.js";

const router = express.Router();

//auth
router.post("/quizzes/signup", createUser);
router.post("/quizzes/login", loginUser);
router.get("/quizzes/", loggedIn);
router.get("/quizzes/logout", logoutUser);

//quizzes
router.post(
  ["/quiz/team", "/quiz/nba", "/quiz/hard", "/quiz/player"],
  getAns,
  quiz
);

//tweets
router.get("/", getTweets);

export default router;
