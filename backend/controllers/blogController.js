const BlogPost = require("../models/BlogPost");

// Create Blog (Auto-publish)
const createBlog = async (req, res) => {
  const { title, content, tags, image } = req.body;
  const authorId = req.userId;

  try {
    const newBlog = new BlogPost({
      title,
      content,
      tags,
      image,
      author: authorId,
      status: "published" // ✅ Directly set blog status to "published"
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created", blog: newBlog });

  } catch (err) {
    res.status(500).json({ message: "Failed to create blog", error: err.message });
  }
};

// Publish Blog (Optional if you want to control status manually)
const publishBlog = async (req, res) => {
  const blogId = req.params.id;
  const userId = req.userId;

  try {
    const blog = await BlogPost.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.author.toString() !== userId) {
      return res.status(403).json({ message: "You can only publish your own blog" });
    }

    blog.status = "published";
    await blog.save();

    res.status(200).json({ message: "Blog published successfully", blog });

  } catch (error) {
    res.status(500).json({ message: "Error publishing blog", error: error.message });
  }
};

// Get all published blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find({ status: "published" }).populate("author", "name");
    console.log("Fetching all published blogs...");
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error: error.message });
  }
};

// Get blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await BlogPost.findById(id).populate("author", "name");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error: error.message });
  }
};

module.exports = {
  createBlog,
  publishBlog,
  getAllBlogs,
  getBlogById
};
