import React, { useEffect } from "react";
import "../../shared.css";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (window.scrollY > 0) {
        footer.classList.add("footer-visible");
      } else {
        footer.classList.remove("footer-visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      <div className="footer-wrapping">
        <div className="footer-buttons">
          <a
            href="https://ko-fi.com/O4O2X1B85"
            target="_blank"
            rel="noreferrer"
          >
            <button className="footer-button">Support</button>
          </a>
          <button className="footer-button none">Share</button>
          <button className="footer-button none">Subscribe</button>
        </div>
        <div className="copyright">
          <p>© Damon Andrew 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
