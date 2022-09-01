import express from "express";
import authRoute from "./auth.js";
import commentRoute from "./comment.js";
import postRoute from "./post.js";
import uploadRoute from "./upload.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/comments", commentRoute);
router.use("/posts", postRoute);
router.use("/upload", uploadRoute);

export default router;
