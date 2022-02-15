import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res
        .status(400)
        .json({ message: "Please enter all required fields" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Please enter a password of at least 6 characters" });

    //Check for existing user
    const existingUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    if (existingUsername || existingEmail)
      return res.status(400).json({
        message: "An account with this username or email already exists",
      });

    //hash password
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    //save to db
    const newUser = new User({
      username,
      email,
      password: hash,
    });

    const savedUser = await newUser.save();

    //create jwt token
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

export default createUser;
