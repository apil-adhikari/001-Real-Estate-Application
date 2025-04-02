import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

// We need to define the routers for register, login, logout
router.post("/register", register);
router.post("/login", login);

router.post("/logout", logout);

export default router;
