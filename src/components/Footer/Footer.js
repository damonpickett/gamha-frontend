import React, { useEffect, useState } from "react";
import "../../shared.css";
import "./Footer.css";
import instagram from "../../assets/icons/ig-48.svg";
import x from "../../assets/icons/x-48.svg";
import whatsapp from "../../assets/icons/whatsapp-48.svg";
import fb from "../../assets/icons/fb-48.svg";
import reddit from "../../assets/icons/reddit-48.svg";

const Footer = () => {
  const [isShareModalOpen, setShareModalOpen] = useState(false);

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

  const openShareModal = () => {
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL copied to clipboard!");
  };

  const shareOnX = () => {
    const text = encodeURIComponent("Check this out");
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent("Check this out");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnReddit = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://www.reddit.com/submit?url=${url}&title=${title}`, '_blank');
  };

  return (
    <>
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
            <button className="footer-button" onClick={openShareModal}>
              Share
            </button>
            <button className="footer-button none">Subscribe</button>
          </div>
          <div className="copyright">
            <p>© Damon Andrew 2024</p>
          </div>
        </div>
      </footer>

      {isShareModalOpen && (
        <div className="modal-overlay" onClick={closeShareModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeShareModal}>
              X
            </button>
            <h3>Share this page</h3>
            <div className="modal-buttons">
              <img src={x} alt="x" onClick={shareOnX} />
              <img src={whatsapp} alt="whatsapp" onClick={shareOnWhatsApp} />
              {/* <img src={fb} alt="fb" onClick={shareOnFacebook} /> */}
              <img src={reddit} alt="reddit" onClick={shareOnReddit} />
            </div>
            <h3>Connect</h3>
            <div className="modal-buttons">
              <a
                href="https://x.com/gamhawords"
                target="_blank"
                rel="noreferrer"
              >
                <img src={x} alt="x" />
              </a>
              <a
                href="https://www.instagram.com/gamhawords/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <button
              className="modal-button clipboard-button"
              onClick={copyToClipboard}
            >
              Copy URL to Clipboard
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;