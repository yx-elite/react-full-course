import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "The Matrix",
    director: "The Wachowskis",
    releaseDate: "1999-03-31",
    genre: "Science Fiction",
    rating: 8.7,
  });

  const changeRating = () => {
    setMovie({ ...movie, rating: 9.0 });
  };
  return (
    <div>
      <h1>Movie: {movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>

      <button onClick={changeRating}>Change Rating</button>
    </div>
  );
};

export default App;
