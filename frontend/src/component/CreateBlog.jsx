import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: '',
    image: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to create a blog');
      navigate('/login');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/blog/create', {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim())
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      setMessage('Blog created successfully!');
      setFormData({ title: '', content: '', tags: '', image: '' });

    } catch (err) {
      const status = err.response?.status;
      if (status === 401 || status === 403) {
        setError("Session expired. Please login again.");
        localStorage.removeItem("token");
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setError(err.response?.data?.message || 'Error creating blog.');
      }
    }
  };

  return (
    <div className="container my-5">
      <h2>Create a New Blog</h2>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Content</label>
          <textarea
            name="content"
            rows="5"
            className="form-control"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            className="form-control"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Create Blog</button>
      </form>
    </div>
  );
}

export default CreateBlog;
