const express = require("express");
const Posts = require("../models/posts");

const router = express.Router();

//save posts

router.post("/post/save", (req, res) => {
  let newPost = new Posts(req.body);

  try {
    const data = newPost.save();
    res.status(200).json({
      success: "Post saved successfully",
    });
    // res.json(newPost);
  } catch (error) {
    console.log(error);
  }
});

//   (err) => {
//   if (err) {
//     return res.status(400).json({
//       error: err,
//     });
//   }
//   return res.status(200).json({
//     success: "Post saved successfully",
//   });
// }

// get post

router.get("/posts", async (req, res) => {
  const data = await Posts.find().exec().limit(5);
  console.log(data);
  res.json(data);
});

//get a specific post
router.get("/post/:id", (req, res) => {
  let postId = req.params.id;

  Posts.findById(postId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      post,
    });
  });
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