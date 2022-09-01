import express from "express";

import { UserController } from "../controllers/index.js";
import { checkAuth } from "../middleware/index.js";
import { handleValidationErrors } from "../utils/index.js";
import { loginValidation, registerValidation } from "../validation.js";

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
router.get("/me", checkAuth, UserController.getMe);

export default router;
