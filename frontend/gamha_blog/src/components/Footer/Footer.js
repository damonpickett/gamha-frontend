import React from "react";
import '../../assets/icons/fb.svg' as fb;
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.x.com/">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="copyright">
        <p>© Damon Pickett 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
