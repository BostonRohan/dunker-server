import Quiz from "../models/quizModel.js";
const getAns = async (req, res, next) => {
  const quizName = Object.keys(req.body).join(" ");
  const data = await Quiz.find({});
  const ans = data.map((prop) => {
    return prop[quizName];
  });
  req.ans = ans[0];
  next();
};
export default getAns;
