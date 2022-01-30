const scoreHandler = (ans, selected) => {
  let score = 10;
  for (let i = 0; i < ans.length; i++) {
    if (selected[i] !== ans[i]) {
      score--;
    }
  }
  return score;
};
export default scoreHandler;
