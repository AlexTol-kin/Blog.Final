const mongoose = require("mongoose");
const validator = require("validator");

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
        message: "Image should be a valid url",
      },
    },
    content: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    published_at: {
      type: String,
    },
  },

  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
