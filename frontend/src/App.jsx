import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import Login from './component/Login';
import Signup from './component/Signup';
import GetAllBlogs from './component/GetAllBlogs';
import BlogDetails from './component/BlogDetails';
import CreateBlog from './component/CreateBlog';
import PrivateRoute from './component/PrivateRoute'; // ✅ Make sure this path is correct

function Home() {
  return <HeroSection />;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />

          {/* ✅ Protected Routes */}
          <Route path="/create-blog" element={
            <PrivateRoute>
              <CreateBlog />
            </PrivateRoute>
          } />

          <Route path="/getallblogs" element={
            <PrivateRoute>
              <GetAllBlogs />
            </PrivateRoute>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
