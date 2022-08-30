import PostModel from "../models/Post.js";
import CommentModel from "../models/Comment.js";

export const getLast = async (req, res) => {
  try {
    const comments = await CommentModel.find().limit(5).exec();

    const lastComment = comments.flat().slice(0, 5);
    res.json(lastComment);
  } catch (err) {
    res.status(500).json({
      message: "Can't find any comments",
    });
  }
};
export const getFromOnePost = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comments = await CommentModel.find({ id: commentId })
      .populate("user")
      .exec();

    res.json(comments);
  } catch (err) {
    res.status(500).json({
      message: "Can't find any comments",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const commentId = req.params.id;

    CommentModel.findOneAndUpdate(
      {
        _id: commentId,
      },
      {
        returnDocument: "after",
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Can't find comment",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Comment is not define",
          });
        }

        res.json(doc);
      }
    ).populate("user");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't find comment",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const commentId = req.params.id;

    CommentModel.findOneAndDelete(
      {
        _id: commentId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Can't remove comment",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Comment is not define",
          });
        }

        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't remove comment",
    });
  }
};
export const create = async (req, res) => {
  try {
    const commentId = req.params.id;

    const post = await PostModel.findById(commentId);
    const comment = await CommentModel.create({
      id: post._id,
      text: req.body.text,
      user: req.userId,
    });

    post.comments.push(comment._id);
    post.commentCount = post.comments.length;

    await post.save();

    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't create comment",
    });
  }
};
export const update = async (req, res) => {
  try {
    const commentId = req.params.id;

    await CommentModel.updateOne(
      {
        _id: commentId,
      },
      {
        text: req.body.text,
        user: req.userId,
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't update comment",
    });
  }
};
