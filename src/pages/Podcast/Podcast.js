import { useEffect } from "react";
import "./Podcast.css";

const Podcast = () => {
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
      <div className="podcast-ad-banner">
        <div className="podcast-overlay-text">
          <h1>The GAMHA Podcast</h1>
          <h2>With Damon Pickett</h2>
          <p>New episode every Sunday evening</p>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <div className="podcast-content shared-padding shared-wrapping">
        <p>
          If you'd like to support my work, sign up for a paid subscription to
          the relaxing, meditative experience that is my podcast.
        </p>
      </div>
    </div>
  );
};

export default Podcast;
