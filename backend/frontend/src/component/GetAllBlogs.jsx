import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GetAllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/blog')
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">All Blogs</h2>
      <div className="row">
        {blogs.map(blog => (
          <div className="col-md-4 mb-4" key={blog._id}>
            <div className="card h-100 shadow-sm">
              {blog.image && (
                <img src={blog.image} className="card-img-top" alt="Blog" style={{ height: '200px', objectFit: 'cover' }} />
              )}
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.slice(0, 100)}...</p>
                <p className="text-muted">
                  Tags: {blog.tags.join(', ')} <br />
                  Status: <strong>{blog.status}</strong><br />
                  Created: {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <Link to={`/blogs/${blog._id}`} className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllBlogs;
