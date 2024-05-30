import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Support.css";

const Support = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in-transition">
      <div className="support-banner">
        <div className="support-overlay-text">
          <h1>Support</h1>
        </div>
      </div>

      <div className="support-content shared-wrapping shared-padding">
        <p>
          I would really appreciate a small donation to help pay the costs of
          running this website. You can also support my work by purchasing books
          through my <Link to="/books">books page</Link>.
        </p>
        <div className="support-links">
          <a
            href="https://ko-fi.com/O4O2X1B85"
            target="_blank"
            rel="noreferrer"
          >
            <img
              height="36"
              style={{ border: "0px", height: "36px" }}
              src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
          <iframe
          className="none"
            src="https://ko-fi.com/streamalerts/goaloverlay/sa_eaad4c69-2697-4f55-aa0e-54b1b1fc985b"
            style={{ width: "100%", height: "500px", border: "none" }}
            title="Goal Overlay"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
