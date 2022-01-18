import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const leaderboardSchema = new mongoose.Schema({
  user: { type: ObjectId, required: true },
  score: { type: Number, required: true },
  taken: { type: Number, required: true },
  timestamps: true,
});

const Leaderboard = mongoose.model("leaderboard", leaderboardSchema);

export default Leaderboard;
