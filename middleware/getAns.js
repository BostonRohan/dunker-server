import { nba } from "../utils/quiz/ans.js";
import { team } from "../utils/quiz/ans.js";
import { hard } from "../utils/quiz/ans.js";
import { player } from "../utils/quiz/ans.js";
const getAns = (req, res, next) => {
  const quizName = Object.keys(req.body).join(" ");
  let ans = [];
  switch (quizName) {
    case "nba":
      ans = nba;
      break;
    case "team":
      ans = team;
      break;
    case "hard":
      ans = hard;
    case "player":
      ans = player;
    default:
      ans = [];
  }
  req.ans = ans;
  next();
};
export default getAns;
