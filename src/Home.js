import React from "react";
import { Link } from "react-router-dom";

const Home = ({ books }) => {
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          books.map((book, index) => (
            <li key={index}>
              <Link to={`/book/${book.title}`}>
                <strong>{book.title}</strong> by {book.author}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
