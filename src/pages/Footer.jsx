import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-col">
        <h4>Get to know us</h4>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Explore NGOs</li>
          <li>Legal &amp; Financials</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Connect with us</h4>
        <ul>
          <li>Contact us</li>
          <li>Help centre</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Donate</h4>
        <ul>
          <li>Monthly Giving</li>
          <li>Fundraisers</li>
        </ul>
        <div className="currency-toggle">
          <span>INR</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>USD</span>
        </div>
        <div className="socials">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© SK &nbsp; Donations through this platform are tax exempted under 5)</span>
      <div className="footer-links">
        <span>Terms</span>
        <span>Privacy Policy</span>
        <span>Site Map</span>
      </div>
    </div>
  </footer>
);

export default Footer;
