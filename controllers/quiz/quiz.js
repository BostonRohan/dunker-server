import scoreHandler from "../../utils/scoreHandler.js";
import User from "../../models/userModel.js";
import jwt from "jsonwebtoken";

const quiz = async (req, res) => {
  const token = req.cookies.token;
  const selected = Object.values(req.body)[0];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const score = scoreHandler(req.ans, selected);

  const validatedUser = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findOne({ _id: validatedUser.id });

  user.score = [...user.score, score];

  await user.save();

  res.status(200).send(score.toString());
};
export default quiz;
