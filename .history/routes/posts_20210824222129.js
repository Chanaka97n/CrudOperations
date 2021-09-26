const express = require("express");
const Posts = require("../models/posts");

const router = express.Router();

//save posts

router.post("/post/save", (req, res) => {
  let newPost = new Posts(req.body);

  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Post saved successfully",
    });
  });
});

// get post

router.get("/posts", (req, res) => {
  const data = Posts.find().exec();
  res.json(data);
  // Posts.find().exec((err, posts) => {
  // if (err) {
  //   return res.status(400).json({
  //     error: err,
  //   });
  // }
  // return res.status(200).json({
  //   success: true,
  //   existingPosts: posts,
  // });
  // });
});

//update posts

router.put("/post/update/:id", (req, res) => {
  Posts.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update Successfully",
      });
    }
  );
});

//delete post

router.delete("/post/delete/:id", (req, res) => {
  Posts.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccessfull",
        err,
      });

    return res.json({
      message: "Delete Successfull",
      deletePost,
    });
  });
});

module.exports = router;
