import User from "../models/user";

export const test = (req, res) => {
  res.json({ message: "hello, world" });
};

export const update = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return res
      .status(500)
      .json({ message: "You can only update your account" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
