import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css";
import banner from "../../assets/images/books-page-1280x720.jpg";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch book data from API using Axios
    axios
      .get("https://api.example.com/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".page-fade-in-transition").style.opacity = 1;
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-fade-in-transition shared-wrapping shared-padding">
      <img src={banner} alt="Books Banner" className="banner" />
      <div className="books-content">
        <h1>Books</h1>
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.coverImageUrl} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
