import express from "express";

import { CommentController } from "../controllers/index.js";
import { checkAuth } from "../middleware/index.js";
import { handleValidationErrors } from "../utils/index.js";
import { commentCreateValidation } from "../validation.js";

const router = express.Router();

router.get("/getLastFive", CommentController.getLastFive);
router.get("/:id", CommentController.getFromOnePost);
router.post(
  "/:id",
  checkAuth,
  handleValidationErrors,
  commentCreateValidation,
  CommentController.create
);
router.delete("/:id", checkAuth, CommentController.remove);

export default router;
