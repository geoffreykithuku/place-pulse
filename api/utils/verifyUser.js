import jwt from "jsonwebtoken";

const validUserToken = async(req, res, next) => {
    const token = req.cookies.token;
    console.log(req.cookies)
  if (!token) {
    return res.status(500).json({ message: "User not authenticated" });
  }

  await jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};

export default validUserToken;
