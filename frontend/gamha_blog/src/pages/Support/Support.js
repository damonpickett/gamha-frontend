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
    <div className="page-fade-in-transition shared-wrapping shared-padding">
      <h1>Support</h1>
      <p>If you like my work, please consider supporting me on ko-fi. </p>
    </div>
  );
};

export default Support;
