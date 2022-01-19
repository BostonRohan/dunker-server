import errorHandler from "../utils/errorHandler";
import User from "../models/userModel";
const auth = async ({ username, email, password }) => {
  if (!username || !email || !password)
    return errorHandler(400, "Please enter all required fields");

  if (password.length < 6)
    return errorHandler(
      400,
      "Please enter a password of at least 6 characters"
    );

  const existingUser = await User.findOne({ username, email });

  if (existingUser)
    return errorHandler(
      400,
      "An account with this username or email already exists"
    );
  else return;
};

export default auth;
