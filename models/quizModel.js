import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  { team: Array, nba: String, player: Array, hard: Array },
  { collection: "quiz" }
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
