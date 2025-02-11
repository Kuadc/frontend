import React from 'react'
import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {currentYear} My Movies. All rights reserved..</p>
          <div className="footer-links">
            <a href="#" className="footer-link">About us</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
}
