import React, { useState } from "react";
import { Link } from "react-router-dom";
const SimilarMovies = ({
  poster_path,
  title,
  vote,
  id,
  setQuery
}) => {

  return (
    <div
      style={{
        marginRight: "1rem"
      }}
    >
      <div className="card similar-movies">
        <img
          height="200"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top image"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">Movie Rate : {vote}</p>
          <Link onClick={id => setQuery(id)} to={`/movie/${id}`} className="btn btn-dark">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SimilarMovies;
