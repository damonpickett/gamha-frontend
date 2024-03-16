import { useEffect } from "react";
import "./Support.css";

const Support = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-fade-in-transition">
      <h1>Support</h1>
      <p>This is the Support component.</p>
    </div>
  );
};

export default Support;
