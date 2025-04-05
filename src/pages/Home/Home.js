import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [myBook, setMyBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubscribeModalOpen, setSubscribeModalOpen] = useState(false); // Add state for the subscribe modal
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  // Subscribe Modal Functions
  const openSubscribeModal = () => {
    setSubscribeModalOpen(true);
  };

  const closeSubscribeModal = () => {
    setSubscribeModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://gamha-blog-a5a35bdb1d4a.herokuapp.com"
        : "http://localhost:8000";
    try {
      const response = await axios.post(`${baseUrl}/subscribe/`, {
        email,
      });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      setMessage("Failed to subscribe");
      console.error("Error subscribing:", error);
    }
  };

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
        <div className="intro">
          <h1>Introduction</h1>
          <div className="intro-text">
          <p>Sometime in mid 2022, I cracked.</p>

          <p>
            I was living in my Dad’s windowless basement, I was unemployed, and
            for over 2 years I only left the house to buy toothpaste.
          </p>

          <p>
            I was trying to get a job as a software developer. I had no
            experience, no confidence, and no real desire to work as one. I was
            following a script that someone else had written. I thought if I
            followed the script I’d be okay.
          </p>

          <p>
            But in the context of a pandemic, inflation, social division,
            information overload, and mounting tyranny, the script was beyond
            irrelevant, it was obscene. I felt like I was drifting on the
            surface of the ocean on a disintegrating raft, rising and
            falling with the waves during a storm. One night, pacing back and
            forth in my room, struggling against an invisible grip around my
            chest, I finally admitted to myself “I need an anchor, I need
            something more.”
          </p>

          <p>I humbled myself and opened my heart and mind to God.</p>

          <p>
            Slowly, a new world opened up to me, a world beyond the one we
            see.
          </p>

          <p>
            The stories I’ve written are my way of reflecting this experience to
            myself and others.
          </p>

          <p>
            If you’d like to be notified of new releases, click the button
            below.
          </p>
          </div>
          <button className="home-button" onClick={openSubscribeModal}>
            Subscribe
          </button>
        </div>
        <div className="latest-release">
          <h1>
            <a
              className="inherit-style"
              href={myBook?.amazon_link}
              target="_blank"
            >
              Available Now
            </a>
          </h1>
          <div className="latest-release-content">
            <a
              className="inherit-style"
              href={myBook?.amazon_link}
              target="_blank"
            >
              <img
                src={myBook?.cover_image}
                alt="Book cover for Damon Andrew's latest release"
                className="latest-release-image"
              />
            </a>
            <div className="latest-release-text-button">
              <p>{myBook?.synopsis}</p>
              <button className="home-button">
                <a
                  className="inherit-style"
                  href={myBook?.amazon_link}
                  target="_blank"
                >
                  Buy Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isSubscribeModalOpen && (
        <div className="modal-overlay" onClick={closeSubscribeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeSubscribeModal}>
              X
            </button>
            <h3>Subscribe</h3>
            <p>...if you want to be notified of new releases</p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="modal-input"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit" className="modal-button">
                Subscribe
              </button>
            </form>
            <div className="subscribe-message">
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
