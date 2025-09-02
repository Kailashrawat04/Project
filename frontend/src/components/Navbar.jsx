import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="nav-left">
        <Link to="/Home" className="logo-link">
          <h2 className="logo">Shopy</h2>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Middle Menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/home-living">Home & Living</Link></li>
        <li><Link to="/beauty">Beauty & Health</Link></li>
        <li><Link to="/studio">Studio</Link></li>
      </ul>

      {/* Search Bar */}
      <div className="nav-search">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
        />
        <i className="ri-search-line" onClick={onSearch}></i>
      </div>

      {/* Right Buttons */}
      <div className="nav-right">
        {/* <Link to="/admin/products/add" className="btn">Add Product</Link> */}
        <Link to="/cart" className="btn cart-btn">Cart</Link>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
