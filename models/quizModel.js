import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  team: Array,
  nba: String,
  player: Array,
  hard: Array,
});

const Quiz = mongoose.model("Quiz", quizSchema, "quiz");

export default Quiz;
