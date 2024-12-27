import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Matrix",
      director: "The Wachowskis",
      releaseDate: "1999-03-31",
      genre: "Science Fiction",
      rating: 8.7,
    },
    {
      id: 2,
      title: "The Matrix Reloaded",
      director: "The Wachowskis",
      releaseDate: "2003-05-15",
      genre: "Science Fiction",
      rating: 7.9,
    },
    {
      id: 3,
      title: "The Matrix Revolutions",
      director: "The Wachowskis",
      releaseDate: "2003-11-05",
      genre: "Science Fiction",
      rating: 6.8,
    },
  ]);

  const addMovie = () => {
    setMovies([
      ...movies,
      {
        id: 4,
        title: "The Matrix Resurrections",
        director: "The Wachowskis",
        releaseDate: "2021-12-16",
        genre: "Science Fiction",
        rating: 6.2,
      },
    ]);
  };

  const deleteMovie = () => {
    setMovies(movies.filter((movie) => movie.id !== 1));
  };

  const changeMovieName = () => {
    setMovies(
      movies.map((movie) =>
        movie.title === "The Matrix"
          ? { ...movie, title: "The Matrix Resurrections" }
          : movie
      )
    );
  };

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
      <button onClick={addMovie}>Add Movie</button>
      <button onClick={deleteMovie}>Delete Movie</button>
      <button onClick={changeMovieName}>Change Movie Name</button>
    </div>
  );
};

export default App;
