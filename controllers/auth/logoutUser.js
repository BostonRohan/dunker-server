const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token").send();
  } catch (err) {
    return res.json(null);
  }
};
export default logoutUser;
