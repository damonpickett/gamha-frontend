import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Books.css';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch book data from API using Axios
        axios.get('https://api.example.com/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching book data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <div className="book-grid">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.coverImageUrl} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;