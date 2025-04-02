import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .get(`${apiUrl}/api/mybooks/`)
      .then((response) => {
        setMyBooks(response.data.results); 
        setLoading(false);
        console.log("MyBooks:", myBooks);
      })
      .catch((error) => {
        console.error("There was an error fetching data from the mybook endpoint!", error);
        setLoading(false);
      });
  }, []);

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
    <div className="home-page page-fade-in-transition">
      <div className="jumbotron">
        <div className="overlay-text">
          <h1 className="tagline">
            God, The Ancient Matriarch, and The Haunting Aliens
          </h1>
          <h2 className="author">The Blog of Damon Andrew</h2>
        </div>
      </div>

      <div className="shared-wrapping">
        <img 
          src="/path-to-your-image.jpg" 
          alt="Descriptive text for the image" 
          className="home-image" 
        />
      </div>
    </div>
  );
};

export default Home;
