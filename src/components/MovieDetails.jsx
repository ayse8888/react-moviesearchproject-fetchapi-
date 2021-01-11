import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SimilarMovies from "./SimilarMovies";

function MovieDetails(props) {
  const { allMovies } = props;
  const [movie, setMovie] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { movieID } = useParams();
  const [query, setQuery] = useState();
  console.log(movie);

  useEffect(() => {
    const similarURL = `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=0ecede2e93db3d208afce55b40229dbf&language=en-US&page=1`;
    const detailsURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=0ecede2e93db3d208afce55b40229dbf&language=en-US`;
    fetch(detailsURL)
      .then(response => response.json())
      .then(data => setMovie(data));

    fetch(similarURL)
      .then(response => response.json())
      .then(data => setSimilarMovies(data.results));
  }, [query]);

  return (
    <>
      <div className="col-sm-4 offset-sm-4">
        <nav aria-label="breadcrumb" className="mb-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {movie.title}
            </li>
          </ol>
        </nav>
        <div>
          <div className="card mb-5">
            <img
              height="350"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              <p className="card-text">Movie Rate : {movie.vote_average}</p>
              {movie.genres
              ? movie.genres.map(genre => {
                  return <button className="btn btn-dark mr-2">{genre.name}</button>;
                })
              : ""}
            </div>
          </div>
          <div />
        </div>
        <h5>Recommended For You</h5>
        <hr />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflowX: "scroll"
        }}
      >
        {similarMovies.map(movie => {
          return (
            <SimilarMovies
              setQuery={setQuery}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              vote={movie.vote_average}
            />
          );
        })}
      </div>
    </>
  );
}

export default MovieDetails;
