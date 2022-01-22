import express from "express";
import getTweets from "../controllers/tweets.js";
import createUser from "../controllers/auth/createUser.js";
import loginUser from "../controllers/auth/loginUser.js";
import loggedIn from "../controllers/auth/loggedIn.js";
import logoutUser from "../controllers/auth/logoutUser.js";

const router = express.Router();

//auth
router.post("/quizzes/signup", createUser);
router.post("/quizzes/login", loginUser);
router.get("/quizzes/", loggedIn);
router.get("/quizzes/", logoutUser);

//tweets
router.get("/", getTweets);

export default router;
