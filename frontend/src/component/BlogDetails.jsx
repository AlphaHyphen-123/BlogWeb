import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/blog/${id}`)
      .then(res => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!blog) return <div className="text-center mt-5">Blog not found</div>;

  return (
    <div className="container my-5">
      <h2>{blog.title}</h2>
      <p className="text-muted">
        By {blog.author?.name } on {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      {blog.image && <img src={blog.image} alt="Blog" className="img-fluid mb-4" />}
      <p>{blog.content}</p>
      <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
      <p><strong>Status:</strong> {blog.status}</p>
    </div>
  );
}

export default BlogDetails;
