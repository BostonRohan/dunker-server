const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
  } catch (err) {
    return res.json(null);
  }
};
export default logoutUser;
