import express from "express";
import getTweets from "../controllers/tweets.js";
import createUser from "../controllers/auth/createUser.js";
import loginUser from "../controllers/auth/loginUser.js";
import loggedIn from "../controllers/auth/loggedIn.js";

const router = express.Router();

//auth
router.post("/quizzes/signup", createUser);
router.post("/quizzes/login", loginUser);
router.get("/quizzes/", loggedIn);

//tweets
router.get("/", getTweets);

export default router;
