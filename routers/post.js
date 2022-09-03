import express from "express";

import { PostController } from "../controllers/index.js";
import { checkAuth } from "../middleware/index.js";
import { handleValidationErrors } from "../utils/index.js";
import { postCreateValidation } from "../validation.js";

const router = express.Router();

router.get("/get", PostController.getAll);
router.get("/tags", PostController.getLastTags);
router.get("/:id", PostController.getOne);
router.post(
  "/addPost",
  checkAuth,
  handleValidationErrors,
  postCreateValidation,
  PostController.create
);
router.delete("/:id", checkAuth, PostController.remove);
router.put(
  "/:id",
  checkAuth,
  handleValidationErrors,
  postCreateValidation,
  PostController.update
);

export default router;
