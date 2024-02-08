import { test, update } from "../controllers/user.controller.js";
import verifyUserToken  from "../utils/verifyUser.js";

import express from "express";

const router = express.Router();

router.get("/test", test);
router.put("/update/:id", verifyUserToken, update);
export default router;
