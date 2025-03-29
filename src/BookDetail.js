import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ books, onAddReview, onToggleFavorite }) => {
  const { title } = useParams();
  const book = books.find((b) => b.title === title);

  const [review, setReview] = useState("");

  if (!book) {
    return <h2>Book not found</h2>;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() !== "") {
      onAddReview(book.title, review);
      setReview("");
    }
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>By {book.author}</h3>
      <button onClick={() => onToggleFavorite(book.title)}>
        {book.isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
      </button>

      <h3>Reviews</h3>
      <ul>
        {book.reviews.length > 0 ? (
          book.reviews.map((r, index) => <li key={index}>{r}</li>)
        ) : (
          <p>No reviews yet</p>
        )}
      </ul>

      <form onSubmit={handleReviewSubmit}>
        <textarea
          placeholder="Write a review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default BookDetail;
