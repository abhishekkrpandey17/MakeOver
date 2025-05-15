import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/isLogin", verifyUser, (req, res) => {
  res.json({ status: 200 });
});

export default router;
