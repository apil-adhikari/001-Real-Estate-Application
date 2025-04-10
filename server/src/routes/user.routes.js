import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
import { shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getAllUsers);

// User should be logged in to access these routes: ""
router.get("/:id", verifyToken, getUser);
router.patch("/:id", verifyToken, updateUser);
router.post("/:id", verifyToken, deleteUser);

export default router;
