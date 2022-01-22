import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";

const loggedIn = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.json(null);

    const validatedUser = jwt.verify(token, process.env.JWT_SECRET);

    const { username } = await User.findOne({ _id: validatedUser.id });

    res.send(username);
  } catch (err) {
    return res.json(null);
  }
};

export default loggedIn;
