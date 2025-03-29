import React from "react";
import { Link } from "react-router-dom";

const Favorites = ({ books }) => {
  const favoriteBooks = books.filter((book) => book.isFavorite);

  return (
    <div>
      <h2>❤️ Favorite Books</h2>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <ul>
          {favoriteBooks.map((book, index) => (
            <li key={index}>
              <Link to={`/book/${book.title}`}>
                <strong>{book.title}</strong> by {book.author}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
