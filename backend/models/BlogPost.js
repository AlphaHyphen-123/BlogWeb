const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  image: String,
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft"
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("BlogPost", blogPostSchema);
