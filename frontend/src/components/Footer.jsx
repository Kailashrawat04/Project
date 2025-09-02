import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Home & Living</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CUSTOMER POLICIES</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Track Orders</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Whitehat</a></li>
            <li><a href="#">Cleartrip</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="app-links">
            <a href="#" className="app-link">
              <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" />
            </a>
            <a href="#" className="app-link">
              <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store" />
            </a>
          </div>
          <h3>KEEP IN TOUCH</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">YouTube</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2023 www.myntra.com. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
            <a href="#">Company Details</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
