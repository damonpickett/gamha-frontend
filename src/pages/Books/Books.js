import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
      .get(`${apiUrl}/api/books/`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
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
    <div className="page-fade-in-transition">
      <div className="books-banner">
        <div className="books-overlay-text">
          <h1>Books</h1>
        </div>
      </div>

      <div className="books-content shared-wrapping shared-padding">
        <p>
          Books shape and polish the mind. The following are works that have
          shaped and polished mine. I earn a commission when you purchase one of
          these books through the links below so doing so also supports my work.
        </p>
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-grid-item" key={book.id}>
              <a
                key={book.id}
                href={book.amazon_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="book-cover"
                  src={book.cover_image}
                  alt={book.title}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
