import User from "../models/user.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  // destructure user params from request.body
  const { username, email, password } = req.body;
  const hashedPassword = await bcryptjs.hashSync(password, 10);

  try {
    // use create to directly create and save the user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
