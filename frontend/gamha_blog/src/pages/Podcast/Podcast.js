import { useEffect } from "react";
import "./Podcast.css";

const Podcast = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-fade-in-transition shared-wrapping shared-padding">
      <h1>Podcast</h1>
      <p>If you'd like to support my work, sign up for a paid subscription to the relaxing, meditative experience that is my podcast. </p>
    </div>
  );
};

export default Podcast;
