import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
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
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // find user by email
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return res.status(500).json({ message: "User not found" });
    }

    // compare user password with hashed password
    const validPassword = await bcryptjs.compareSync(
      password,
      validUser.password
    );

    if (!validPassword) {
      return res.status(500).json({ message: "Invalid password" });
    }

    // create token 
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    
    // create cookie with token
    res.cookie("token", token, { httpOnly: true }).status(200).json(rest);

  } catch (error) {
    next(error);
  }
};
