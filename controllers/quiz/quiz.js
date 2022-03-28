import scoreHandler from "../../utils/scoreHandler.js";

const quiz = async (req, res) => {
  const token = req.cookies.token;
  const selected = Object.values(req.body)[0];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const score = scoreHandler(req.ans, selected);

  res.status(200).send(score.toString());
};
export default quiz;
