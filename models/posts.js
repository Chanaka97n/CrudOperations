const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  topic: {
    type: String,
    requred: true,
  },
  description: {
    type: String,
    requred: true,
  },
  postCategory: {
    type: String,
    requred: true,
  },
});

module.exports = mongoose.model("Posts", postSchema);
