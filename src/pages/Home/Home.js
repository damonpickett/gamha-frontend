import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [myBook, setMyBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .get(`${apiUrl}/api/mybooks/`)
      .then((response) => {
        const books = response.data.results;

        // Find the book with the highest id
        const mostRecentBook = books.reduce((latest, current) =>
          current.id > latest.id ? current : latest
        );

        setMyBook(mostRecentBook); // Set the most recent book
        setLoading(false);
        console.log("Most Recent Book:", mostRecentBook);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching data from the mybook endpoint!",
          error
        );
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
        <div className="latest-release">
          <h1>
            <a className="inherit-style" href={myBook?.amazon_link} target="_blank">
              Available Now
            </a>
          </h1>
          <div className="latest-release-content">
            <a className="inherit-style" href={myBook?.amazon_link} target="_blank">
              <img
                src={myBook?.cover_image}
                alt="Book cover for Damon Andrew's latest release"
                className="latest-release-image"
              />
            </a>
            <div className="latest-release-text-button">
              <p>{myBook?.synopsis}</p>
              <button className="home-button">
                <a className="inherit-style" href={myBook?.amazon_link} target="_blank">
                  Buy Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
