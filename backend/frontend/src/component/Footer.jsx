import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">© 2025 Blogify. All rights reserved.</p>

        <div className="mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>

        <p className="mb-0">
          Made with ❤️ by <a href="https://github.com/AlphaHyphen-123" className="text-info text-decoration-none">Aditya Kumar</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
