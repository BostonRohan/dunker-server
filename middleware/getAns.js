import { nba } from "../utils/ans.js";
import { team } from "../utils/ans.js";
import { hard } from "../utils/ans.js";
import { player } from "../utils/ans.js";
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
      break;
    case "player":
      ans = player;
      break;
    default:
      ans = [];
  }
  req.ans = ans;
  next();
};
export default getAns;
