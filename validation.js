import { body } from "express-validator";

export const registerValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password must be at least 5 characters").isLength({
    min: 5,
  }),
  body("fullName", "Name must be at least 3 characters").isLength({
    min: 3,
  }),
  body("avatarUrl", "Wrong avatar URL format").optional().isURL(),
];

export const loginValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password must be at least 5 characters").isLength({
    min: 5,
  }),
];

export const postCreateValidation = [
  body("title", "Enter the title of the article")
    .isLength({ min: 3 })
    .isString(),
  body("text", "Enter text of the article").isLength({ min: 10 }).isString(),
  body("tags", "Invalid tags format (must be array)").optional().isString(),
  body("imageUrl", "Invalid URL").optional().isString(),
];
export const commentCreateValidation = [
  body("text", "Enter text of the post").isLength({ min: 3 }).isString(),
];
