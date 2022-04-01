import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  team: Array,
  nba: Array,
  player: Array,
  hard: Array,
});

const Quiz = mongoose.model("Quiz", quizSchema, "quiz");

export default Quiz;
