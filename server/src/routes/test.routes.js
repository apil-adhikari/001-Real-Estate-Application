import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";

const router = express.Router();

/**
 * 1) user should logged in and,
 * 2) user should be an admin
 */

router.get("/should-be-logged-in", shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

router.post;

export default router;
