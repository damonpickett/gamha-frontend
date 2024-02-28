import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="jumbotron">
        <h1 className="tagline">God, Dreams, Intuition, and Psychedelics</h1>
        <h2 className="author">A Blog by Damon Pickett</h2>
      </div>
      <h1>Welcome to the Home Page</h1>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#">Learn More</a>
      <a href="#" className="in-page-nav">
        Enter
      </a>
    </div>
  );
};

export default Home;
