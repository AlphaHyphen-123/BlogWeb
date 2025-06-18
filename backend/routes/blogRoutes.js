const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  publishBlog,
  getBlogById,
} = require("../controllers/blogController");

const verifyToken = require("../middleware/verifyToken");


router.get("/", getAllBlogs);


router.get("/:id", getBlogById); 



router.post("/create", verifyToken, createBlog);


router.put("/publish/:id", verifyToken, publishBlog);

module.exports = router;
