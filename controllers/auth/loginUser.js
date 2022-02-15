import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Please enter all required fields" });

    //get user account
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(400).json({ message: "Wrong email or password" });

    const correctPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!correctPassword)
      return res.status(401).json({ message: "Wrong email or password" });

    //create jwt token
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

export default loginUser;
