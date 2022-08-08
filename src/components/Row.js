import React, { useState, useEffect } from "react";
import instance from "../instance";
import "./Row.css";

function Row({ title, fetchUrl,isLargeRow }) {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const movieData = await instance.get(fetchUrl);
    setMovies(movieData.data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("movies", movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
            <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${imageUrl}${isLargeRow ?  movie.poster_path : movie.backdrop_path}`}
              alt={movie.name} /> 
        ))}
      </div>
    </div>
  );
}

export default Row;
