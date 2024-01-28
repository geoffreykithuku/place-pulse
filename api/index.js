import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

// mongo db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

// attach user and auth routers
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("app running on port 3000");
});
