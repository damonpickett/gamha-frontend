import fb from "../../assets/icons/fb.svg";
import x from "../../assets/icons/x.svg";
import ig from "../../assets/icons/ig.svg";
import backToTop from "../../assets/icons/back-to-top-button.svg";
import "../../shared.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapping">
        <div className="scroll-to-top">
          <img
            src={backToTop}
            alt="back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          ></img>
        </div>
        <div className="social-media">
          <div className="sm-link-image none">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb} alt="facebook"></img>
            </a>
          </div>
          <div className="sm-link-image">
            <a
              href="https://twitter.com/gamhawords"
              target="_blank"
              rel="noreferrer"
            >
              <img src={x} alt="x"></img>
            </a>
          </div>
          <div className="sm-link-image none">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ig} alt="instagram"></img>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>© Damon Andrew 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
