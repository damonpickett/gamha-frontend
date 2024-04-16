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
        <p>I would really appreciate a small donation to help pay the costs of running this website. You can also support my work by purchasing a book through my <Link to="/books">books page</Link>.</p>
      </div>
    </div>
  );
};

export default Support;
