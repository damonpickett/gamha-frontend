import React, { useEffect, useState } from "react";
import "../../shared.css";
import "./Footer.css";

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
            <button className="footer-button" onClick={openModal}>
              Share
            </button>
            <button className="footer-button none">Subscribe</button>
          </div>
          <div className="copyright">
            <p>© Damon Andrew 2024</p>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <h3>Share this page</h3>
            <div className="modal-buttons">
              <button className="modal-button" onClick={shareOnX}>
                Share to X
              </button>
              <button className="modal-button" onClick={shareOnWhatsApp}>
                Share to WhatsApp
              </button>
            </div>
            <h3>Follow me</h3>
            <div className="modal-buttons">
              <a
                href="https://www.instagram.com/gamhawords/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="modal-button">Follow on Instagram</button>
              </a>
              <a
                href="https://x.com/gamhawords"
                target="_blank"
                rel="noreferrer"
              >
                <button className="modal-button">Follow on X</button>
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
