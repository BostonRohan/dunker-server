import Quiz from "../models/quizModel.js";

const getAns = async (req, res, next) => {
  const quizName = Object.keys(req.body).join(" ");
  const data = await Quiz.find({});
  const ans = data[0][quizName];
  req.ans = ans;
  next();
};
export default getAns;
