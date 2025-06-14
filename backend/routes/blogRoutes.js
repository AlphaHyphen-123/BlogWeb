const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  publishBlog,
  getBlogById,
} = require("../controllers/blogController");

const verifyToken = require("../middleware/verifyToken");

// Get all published blogs
router.get("/", getAllBlogs);

// Get blog by ID
router.get("/:id", getBlogById); // ✅ Correct


// Create a new blog (only for logged-in users)
router.post("/create", verifyToken, createBlog);

// Publish a blog by ID (only author)
router.put("/publish/:id", verifyToken, publishBlog);

module.exports = router;
