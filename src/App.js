import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";
import Favorites from "./Favorites";
import Login from "./Login";
import BookDetail from "./BookDetail"; // New component for book details

const App = () => {
  const [books, setBooks] = useState([
    { title: "My AA❤️", author: "UMAR A.", reviews: [], isFavorite: false },
    { title: "My EE❤️", author: "M UMAR", reviews: [], isFavorite: false },
    { title: "Billi🥤", author: "Ibtesam", reviews: [], isFavorite: false },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, reviews: [], isFavorite: false }]);
  };

  const addReview = (bookTitle, review) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.title === bookTitle ? { ...book, reviews: [...book.reviews, review] } : book
      )
    );
  };

  const toggleFavorite = (bookTitle) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.title === bookTitle ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
  };

  return (
    <Router>
      <nav>
        <h1>💀 UmarBooks</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/add-book" element={<AddBook onAdd={addBook} />} />
        <Route path="/favorites" element={<Favorites books={books} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:title" element={<BookDetail books={books} onAddReview={addReview} onToggleFavorite={toggleFavorite} />} />
      </Routes>
    </Router>
  );
};

export default App;
