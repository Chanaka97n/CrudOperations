const express = require(express);
const Posts = require("../models/posts");

const router = express.Router();

//save posts

router.post("/post/save", (req, res) => {
  let newPost = new Posts(req.body);

  newPost.save((err) => {
      if(err){
          return res.status(400).json
({
    console.error(:err);
})      }
  })
});
