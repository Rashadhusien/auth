import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { checkRole } from "../middlewares/role.middleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
});

router.get("/admin", verifyToken, checkRole(["admin"]), (req, res) => {
  res.json({ message: "Admin route accessed successfully" });
});

router.get("/profile", verifyToken, getUser);

export default router;
