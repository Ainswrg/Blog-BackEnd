import PostModel from "../models/Post.js";

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(10).exec();

    const tags = Array.from(new Set(posts.map((obj) => obj.tags).flat())).slice(
      0,
      5
    );
    res.json(tags);
  } catch (err) {
    res.status(500).json({
      message: "Can't find any tags",
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const { sort, order, category } = req.query;
    const orderBy = order === "asc" ? 1 : -1;
    const findBy = category ? { tags: category } : {};
    const posts = sort
      ? await PostModel.find(findBy)
          .sort({ [sort]: orderBy })
          .populate("user")
          .populate("comments")
          .exec()
      : await PostModel.find().populate("user").exec();
    res.json(posts);
  } catch (err) {
    res.status(500).json({
      message: "Can't find any posts",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Can't find post",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Article is not define",
          });
        }

        res.json(doc);
      }
    ).populate("user");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't find post",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndDelete(
      {
        _id: postId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            message: "Can't remove post",
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: "Article is not define",
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
      message: "Can't remove post",
    });
  }
};
export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags.split(",").map((e) => e.trim()),
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't create article",
    });
  }
};
export const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.userId,
        tags: req.body.tags.split(",").map((e) => e.trim()),
      }
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't update post",
    });
  }
};
