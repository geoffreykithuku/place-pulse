import { test, update, deleteUser } from "../controllers/user.controller.js";
import verifyUserToken  from "../utils/verifyUser.js";

import express from "express";

const router = express.Router();

router.get("/test", test);
router.put("/update/:id", verifyUserToken, update);
router.delete("/delete/:id", verifyUserToken, deleteUser);
export default router;
