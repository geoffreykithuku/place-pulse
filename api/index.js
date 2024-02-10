import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: ["http://localhost:3000"],
    credentials: true,
  }
));
app.use(cookieParser());

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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({ message });
});


app.listen(4000, () => {
  console.log("app running on port 4000");
});

