import React from "react";
import fb from "../../assets/icons/fb.svg";
import x from "../../assets/icons/x.svg";
import ig from "../../assets/icons/ig.svg";
import backToTop from '../../assets/icons/back-to-top-button.svg'
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="scroll-to-top">
        <img 
          src={backToTop} 
          alt="back to top" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        ></img>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/">
          <img src={fb} alt="facebook"></img>
        </a>
        <a href="https://www.x.com/">
          <img src={x} alt="x"></img>
        </a>
        <a href="https://www.instagram.com/">
          <img src={ig} alt="instagram"></img>
        </a>
      </div>
      <div className="copyright">
        <p>© Damon Pickett 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
