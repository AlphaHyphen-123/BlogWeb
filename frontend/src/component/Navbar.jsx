import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Nav.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  // Listen to storage changes or manual login updates
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    // Optional: run this when component mounts
    handleStorageChange();

    // Optional: for multi-tab support
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-3" to="/">Blogify</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create-blog">Create Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/getallblogs">Get All Blogs</NavLink>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
