import scoreHandler from "../../utils/scoreHandler.js";

const quiz = async (req, res) => {
  const selected = Object.values(req.body)[0];

  const score = scoreHandler(req.ans, selected);

  res.status(200).send(score.toString());
};
export default quiz;
