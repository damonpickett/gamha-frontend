import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/books/")
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
      <div className="banner">
        <div className="books-overlay-text">
          <h1>Books</h1>
        </div>
      </div>

      <div className="books-content shared-wrapping shared-padding">
        {books.map((book) => (
          <div key={book.id}>
            <a
              key={book.id}
              href={book.amazon_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={book.cover_image} alt={book.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
