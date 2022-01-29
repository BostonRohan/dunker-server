const scoreHandler = (ans, selected) => {
  let score = 10;
  for (let i = 0; i < ans.length; i++) {
    if (selected[i] !== ans[i]) {
      score--;
    }
  }
  return parseFloat(score).toFixed(2) + "%";
};
export default scoreHandler;
