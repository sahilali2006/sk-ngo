import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

        <div className="navbar-left">

        <span className="navbar-logo-circle">SK</span>
        <h2 className="logo">NGO</h2>
      
      </div>
      
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/volunteerForm" onClick={() => setMenuOpen(false)}>VolunteerForm</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/login" className="navbar-login-btn" onClick={() => setMenuOpen(false)}>
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
