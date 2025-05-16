import express from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/adminController.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/logout", logoutAdmin);

// ✅ Protected admin check route
router.get("/isAdmin", isAdmin, (req, res) => {
  res.status(200).json({ success: true, admin: req.admin });
});

export default router;
